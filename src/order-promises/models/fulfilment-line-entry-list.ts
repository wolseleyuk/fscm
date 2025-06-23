import { BaseModel, mergeObjects } from "@wolseley/common"
import { FulfilmentLine } from "./fulfilment-line";

export class FulfilmentLineEntryList extends BaseModel {

    public FulfilmentLine: Partial<FulfilmentLine> | null = null;

    protected _required = [
        "FulfilmentLine"
    ]

    constructor(initialData?: any) {
        super();
        const data = mergeObjects(this, initialData);
        Object.assign(this, data);
    }

}