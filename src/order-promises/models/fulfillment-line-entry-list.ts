import { BaseModel, mergeObjects } from "@wolseley/common"
import { FulfillmentLine } from "./fulfillment-line";

export class FulfillmentLineEntryList extends BaseModel {

    public FulfillmentLine: Partial<FulfillmentLine> | null = null;

    protected _required = [
        "FulfillmentLine"
    ]

    constructor(initialData?: any) {
        super();
        const data = mergeObjects(this, initialData);
        Object.assign(this, data);
    }

}