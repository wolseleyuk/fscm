import { BaseModel } from "@wolseley/common";
export declare class QuickAvailabilityFind extends BaseModel {
    CallingInstance: string;
    CallingModule: string;
    RequestCreationDateTime: string;
    ItemDetailList: Array<{
        ItemIdentifier: string;
    }>;
    constructor(initialData?: any);
}
