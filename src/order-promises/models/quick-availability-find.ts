import { BaseModel, mergeObjects } from "@wolseley/common"

export class QuickAvailabilityFind extends BaseModel {

    public CallingInstance: string = "GOP";
    public CallingModule: string = "GOP";
    public RequestCreationDateTime: string = new Date().toISOString();
    public ItemDetailList: Array<{ ItemIdentifier: string }> = [];

    protected _required = [
        "CallingInstance",
        "CallingModule",
        "RequestCreationDateTime",
        "ItemDetailList"
    ]

    constructor(initialData?: any) {
        super();
        const data = mergeObjects(this, initialData);
        Object.assign(this, data);
    }

}