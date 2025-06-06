import { BaseModel } from "@wolseley/common";
export declare class QuickAvailabilityFind extends BaseModel {
    CallingInstance: string;
    CallingModule: string;
    RequestCreationDateTime: string;
    ItemDetailList: Array<{
        ItemIdentifier: string;
    }>;
    protected _required: string[];
    constructor(initialData?: any);
}
