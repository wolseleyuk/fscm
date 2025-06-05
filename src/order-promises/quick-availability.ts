import { IRestObject } from '@wolseley/common'
import { ItemDetail } from './models/item-detail';
import { QuickAvailabilityFind } from './models/quick-availability-find';

export class QuickAvailability {

    public find(value: string, r: IRestObject) {

        const itemDetail: any = new ItemDetail({ ItemIdentifier: value }).toObject(true);

        const quickAvailabilityFind = new QuickAvailabilityFind({ ItemDetailList: [itemDetail] }).toObject(true);

        r
            .body(quickAvailabilityFind)
            .parameters({ onlyData: false })

        return r.fetch();

    }

}