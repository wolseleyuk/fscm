import { SalesOrderCreate } from "./models/sales-order-create";
import { IRestObject, ApplicationError, IRestService, IRestResponse, IBatchOperationBodyPart } from '@wolseley/common';
export { SalesOrderCreate } from "./models/sales-order-create";

export class SalesOrder implements IRestService {

    public find(): Promise<IRestResponse> {
        throw new Error('Method not yet implemented')
    }

    public findAll(): Promise<IRestResponse> {
        throw new Error('Method not yet implemented')
    }

    public async create(orderDetails: any, Rest: IRestObject, { fields = "", onlyData = true } = {}): Promise<IRestResponse> {
        const trxId = await this.getSalesOrderNumber(Rest);

        Object.assign(orderDetails,
            {
                RequestedArrivalDate: (new Date()).toISOString(),
                SourceTransactionId: trxId,
                SourceTransactionNumber: trxId,
                Warehouse: '1BL'
            }
        );

        const order = new SalesOrderCreate(orderDetails);

        const orderValid = order.isValid()

        if (!orderValid.ok) {
            throw new ApplicationError(orderValid.message);
        }

        const orderObject = order.toObject(true);

        const r = Rest
            .get('site_scm_extension:fscm-sales-orders-for-orders-hub/create_salesOrdersForOrderHub')
            .body(orderObject)
            .parameters({
                // fields: fields,
                onlyData: onlyData
            });

        return r.fetch();

    }

    public create_batchPrepare(): Promise<IBatchOperationBodyPart> {
        throw new Error('Method not yet implemented')
    }

    public update(headerId: string, changes: any, Rest: IRestObject, { fields = ["HeaderId"], onlyData = true } = {}): Promise<IRestResponse> {
        const f = [
            ...fields,
            ...Object.keys(changes)
        ];

        return this._update(headerId, changes, Rest, { fields: f.join(','), onlyData });
    }

    public update_batchPrepare(): Promise<IBatchOperationBodyPart> {
        throw new Error('Method not yet implemented')
    }

    public delete(): Promise<IRestResponse> {
        throw new Error('Method not yet implemented.')
    }

    public delete_batchPrepare(): Promise<IBatchOperationBodyPart> {
        throw new Error('Method not yet implemented.')
    }

    public submit(headerId: string, Rest: IRestObject, { fields = "HeaderId", onlyData = true } = {}) {
        const body = {
            SubmittedFlag: true,
        };

        return this._update(headerId, body, Rest, { fields, onlyData });
    }

    private _update(headerId: string, body: any, Rest: IRestObject, { fields = "HeaderId", onlyData = true } = {}) {
        const r = Rest
            .get('site_scm_extension:fscm-sales-orders-for-orders-hub/update_salesOrdersForOrderHub')
            .body(body)
            .parameters({
                fields: fields,
                onlyData: onlyData,
                'salesOrdersForOrderHub_Id': headerId
            });

        return r.fetch();
    }

    private async getSalesOrderNumber(Rest: IRestObject) {
        const r = Rest
            .get('site_scm_extension:wol-search/next-order-number');

        const response = await r.fetch();

        const salesOrderNumber = response.body.orderNumber < 1000000 ? response.body.orderNumber.toString().padStart(6, "0") : response.body.orderNumber;

        return `1BL|${salesOrderNumber}`;
    }

    static get model() {
        return new SalesOrderCreate
    }

}