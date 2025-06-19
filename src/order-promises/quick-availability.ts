import { IRestObject, ApplicationError, IRestService, IRestResponse, IBatchOperationBodyPart } from '@wolseley/common'
import { ItemDetail } from './models/item-detail';
import { QuickAvailabilityFind } from './models/quick-availability-find';

export class QuickAvailability implements IRestService {

    public find(value: string | null, Rest: IRestObject) {

        const itemDetail: any = new ItemDetail({ ItemIdentifier: value });

        const itemDetailValid = itemDetail.isValid();

        if (!itemDetailValid.ok) {
            throw new ApplicationError(itemDetailValid.message)
        };

        const quickAvailabilityFind = new QuickAvailabilityFind({ ItemDetailList: [itemDetail.toObject(true)] });

        const quickAvailabilityFindValid = quickAvailabilityFind.isValid();

        if (!quickAvailabilityFindValid.ok) {
            throw new ApplicationError(quickAvailabilityFindValid.message)
        };

        const b = quickAvailabilityFind.toObject(true);

        const r = Rest
            .get("site_scm_extension:fscm-global-order-promising/quick-availability-check")
            .body(b)
            .parameters({ onlyData: false })

        return r.fetch();
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