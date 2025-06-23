import { IRestService, IRestObject, IRestResponse, IBatchOperationBodyPart, ApplicationError } from "@wolseley/common";
import { CheckAvailabilityFind } from "./models/check-availability-find";
import { RequestedShipFromOrg } from "./models/requested-ship-from-org";
import { FulfillmentLine } from "./models/fulfillment-line";
import { FulfillmentLineEntryList } from "./models/fulfillment-line-entry-list";

export class CheckAvailability implements IRestService {

    public find(value: any, Rest: IRestObject): Promise<IRestResponse> {

        const requestedShipFromOrg = new RequestedShipFromOrg({
            OrgIdentifier: "1BL"
        });

        const requestedShipFromOrgValid = requestedShipFromOrg.isValid();

        if (!requestedShipFromOrgValid.ok) {
            throw new ApplicationError(requestedShipFromOrgValid.message)
        }

        const fulfillmentLine = new FulfillmentLine({
            RequestedItem: value.productId,
            UnitPrice: value.price.price,
            RequestedShipFromOrg: requestedShipFromOrg.toObject(true)
        });

        const fulfillmentLineValid = fulfillmentLine.isValid();

        if (!fulfillmentLineValid.ok) {
            throw new ApplicationError(fulfillmentLineValid.message)
        }

        const fulfillmentLineEntryList = new FulfillmentLineEntryList({
            FulfillmentLine: fulfillmentLine.toObject(true)
        })

        const fulfillmentLineEntryListValid = fulfillmentLineEntryList.isValid();

        if (!fulfillmentLineEntryListValid.ok) {
            throw new ApplicationError(fulfillmentLineEntryListValid.message)
        }

        const checkAvailabilityFind = new CheckAvailabilityFind({
            FulfillmentLineEntryList: fulfillmentLineEntryList.toObject(true)
        });

        const checkAvailabilityFindValid = checkAvailabilityFind.isValid();

        if (!checkAvailabilityFindValid.ok) {
            throw new ApplicationError(checkAvailabilityFindValid.message)
        }

        const b = checkAvailabilityFind.toObject(true);

        const r = Rest.get("site_scm_extension:fscm-global-order-promising/check-availability")
            .body(b)
            .parameters({
                onlyData: true
            })

        return r.fetch()
    }

    public findAll(): Promise<IRestResponse> {
        throw new Error('Method not yet implemented')
    }

    public create(): Promise<IRestResponse> {
        throw new Error('Method not yet implemented')
    }

    public create_batchPrepare(): Promise<IBatchOperationBodyPart> {
        throw new Error('Method not yet implemented')
    }

    public update(): Promise<IRestResponse> {
        throw new Error('Method not yet implemented.')
    }

    public update_batchPrepare(): Promise<IBatchOperationBodyPart> {
        throw new Error('Method not yet implemented.')
    }

    public delete(): Promise<IRestResponse> {
        throw new Error('Method not yet implemented.')
    }

    public delete_batchPrepare(): Promise<IBatchOperationBodyPart> {
        throw new Error('Method not yet implemented.')
    }

}