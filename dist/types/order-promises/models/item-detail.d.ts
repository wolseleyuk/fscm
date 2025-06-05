import { BaseModel } from "@wolseley/common";
export declare class ItemDetail extends BaseModel {
    ItemIdentifier: string | null;
    RequestedDateTime: string;
    OrgInfoList: Array<{
        OrgIdentifier: string;
    }>;
    constructor(initialData?: any);
}
