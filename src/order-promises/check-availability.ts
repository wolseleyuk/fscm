import { IRestService, IRestObject, IRestResponse, IBatchOperationBodyPart, ApplicationError } from "@wolseley/common";
import { CheckAvailabilityFind } from "./models/check-availability-find";
import { RequestedShipFromOrg } from "./models/requested-ship-from-org";
import { FulfilmentLine } from "./models/fulfilment-line";
import { FulfilmentLineEntryList } from "./models/fulfilment-line-entry-list";

export class CheckAvailability implements IRestService {

    public find(value: string | null, Rest: IRestObject): Promise<IRestResponse> {

        const requestedShipFromOrg = new RequestedShipFromOrg({
            OrgIdentifer: "1BL"
        });

        const requestedShipFromOrgValid = requestedShipFromOrg.isValid();

        if (!requestedShipFromOrgValid.ok) {
            throw new ApplicationError(requestedShipFromOrgValid.message)
        }

        const fulfilmentLine = new FulfilmentLine({
            RequestedItem: value,
            RequestedShipFromOrg: requestedShipFromOrg.toObject(true)
        });

        const fulfilmentLineValid = fulfilmentLine.isValid();

        if (!fulfilmentLineValid.ok) {
            throw new ApplicationError(fulfilmentLineValid.message)
        }

        const fulfilmentLineEntryList = new FulfilmentLineEntryList({
            FulfilmentLine: fulfilmentLine.toObject(true)
        })

        const fulfilmentLineEntryListValid = fulfilmentLineEntryList.isValid();

        if (!fulfilmentLineEntryListValid.ok) {
            throw new ApplicationError(fulfilmentLineEntryListValid.message)
        }

        const checkAvailabilityFind = new CheckAvailabilityFind({
            FulfilmentLineEntryList: fulfilmentLineEntryList.toObject(true)
        });

        const checkAvailabilityFindValid = checkAvailabilityFind.isValid();

        if (!checkAvailabilityFindValid.ok) {
            throw new ApplicationError(checkAvailabilityFindValid.message)
        }

        const b = checkAvailabilityFind.toObject(true);

        const r = Rest.get('endpointid')
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