import { IRestObject, ApplicationError } from '@wolseley/common';
import { SalesOrderLineCharge } from './models/sales-order-line-charge';
import { SalesOrderLineChargeComponent } from './models/sales-order-line-charge-component';
import { SalesOrderLineCreate } from './models/sales-order-line-create';

export class SalesOrderLine {

    public async create(value: any, orderDetails: any, Rest: IRestObject, {fields= "", onlyData = true, sequence = null } = {}) {
        const linePriceInstance = new SalesOrderLineChargeComponent({
            "SourceChargeComponentId": "C1-CC1",
            "PriceElementCode": "QP_LIST_PRICE",
            "PriceElementUsageCode": "LIST_PRICE",
            "HeaderCurrencyUnitPrice": value.price.price,
            "HeaderCurrencyExtendedAmount": value.price.price * (value.orderedQuantity || 1),
            "RollupFlag": false,
            "SequenceNumber": 1
        });

        const netPriceInstance = new SalesOrderLineChargeComponent({
            "SourceChargeComponentId": "C1-CC2",
            "PriceElementCode": "QP_NET_PRICE",
            "PriceElementUsageCode": "NET_PRICE",
            "HeaderCurrencyUnitPrice": value.price.price,
            "HeaderCurrencyExtendedAmount": value.price.price * (value.orderedQuantity || 1),
            "RollupFlag": false,
            "SequenceNumber": 2
        });

        const chargeDetails = {
            chargeComponents: [
                linePriceInstance.toObject(true),
                netPriceInstance.toObject(true)
            ]
        };

        const charge = new SalesOrderLineCharge(chargeDetails).toObject(true);

        const lineDetails = {
            InventoryTransactionFlag: true,
            ProductNumber: value.productId,
            OrderedQuantity: value.orderedQuantity || 1,
            SubinventoryCode: "1BL",
            charges: [charge],
            SourceTransactionLineId: (sequence || ((orderDetails.lines.length || 0) + 1)).toString(),
            SourceTransactionLineNumber: (sequence || ((orderDetails.lines.length || 0) + 1)).toString(),
            SourceTransactionScheduleId: (sequence || ((orderDetails.lines.length || 0) + 1)).toString()
        };

        const line = new SalesOrderLineCreate(lineDetails);

        const lineValid = line.isValid();

        if (!lineValid.ok) {
            throw new ApplicationError(lineValid.message);
        }

        const lineObject = line.toObject(true);

        const r = Rest
            .get('site_scm_extension:fscm-sales-orders-for-orders-hub/create_salesOrdersForOrderHub-lines')
            .body(lineObject)
            .parameters({
                fields: fields,
                onlyData: onlyData,
                'salesOrdersForOrderHub_Id': orderDetails.HeaderId
            });

        return r.fetch();
    }

    public find() { }

    public findAll() { }

    public deleteOne(headerId: string, key: string, Rest: IRestObject) {
        const body = ({
            OrderedQuantity: 0
        });

        return this._update(headerId, key, body, Rest);
    }

    public async deleteAll(headerId: string, lines: any, Rest: IRestObject) {
        const body = ({
            OrderedQuantity: 0
        });

        const updates = [];

        for (const line of lines) {
            const key = line._context.key;

            const update = await this._update(headerId, key, body, Rest);

            updates.push({
                ...update,
                key
            });
        }

        return updates;
    }

    public async updateQuantity(headerId: string, key: string, quantity: number, charges: any, Rest: IRestObject, { fields = "", onlyData = true } = {}) {
            let body = {
                OrderedQuantity: quantity
            };

            const chargeComponentArray = charges.flatMap((c:any) => c.chargeComponents.map((cc:any) => ({
                ...cc,
                chargeKey: c._context.key
            })));

            for (const component of chargeComponentArray) {
                const r = Rest
                    .get('site_scm_extension:fscm-sales-orders-for-orders-hub/update_salesOrdersForOrderHub-lines-charges-chargeComponents')
                    .body({
                        "HeaderCurrencyExtendedAmount": component.HeaderCurrencyUnitPrice * (quantity || 1)
                    })
                    .parameters({
                        onlyData: onlyData,
                        'salesOrdersForOrderHub_Id': headerId,
                        'salesOrdersForOrderHub_lines_Id': key,
                        'salesOrdersForOrderHub_lines_charges_Id': component.chargeKey,
                        'salesOrdersForOrderHub_lines_charges_chargeComponents_Id': component._context.key,
                    });

                await r.fetch();
            }

            // call private update
            return this._update(headerId, key, body, Rest, { fields, onlyData });
        }

    private _update(headerId: string, key: string, body: any, Rest: IRestObject, { fields = "", onlyData = true } = {}) {
        const r = Rest
            .get('site_scm_extension:fscm-sales-orders-for-orders-hub/update_salesOrdersForOrderHub-lines')
            .body(body)
            .parameters({
                fields: fields,
                onlyData: onlyData,
                'salesOrdersForOrderHub_Id': headerId,
                'salesOrdersForOrderHub_lines_Id': key,
            });

        return r.fetch();
    }
}