import { IRestObject, ApplicationError } from '@wolseley/common'
import { ItemDetail } from './models/item-detail';
import { QuickAvailabilityFind } from './models/quick-availability-find';

export class QuickAvailability {

    public find(value: string, r: IRestObject) {

        const itemDetail: any = new ItemDetail({ ItemIdentifier: value });

        const itemDetailValid = itemDetail.isValid();

        if(!itemDetailValid.ok){
            throw new ApplicationError(itemDetailValid.message)
        };

        const quickAvailabilityFind = new QuickAvailabilityFind({ ItemDetailList: [itemDetail.toObject(true)] });

        const quickAvailabilityFindValid = quickAvailabilityFind.isValid();

        if(!quickAvailabilityFindValid.ok){
            throw new ApplicationError(quickAvailabilityFindValid.message)
        };

        const b = quickAvailabilityFind.toObject(true);

        r
            .body(b)
            .parameters({ onlyData: false })

        return r.fetch();

    }

}