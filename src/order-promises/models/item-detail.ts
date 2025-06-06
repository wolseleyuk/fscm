import { BaseModel, mergeObjects } from "@wolseley/common"

export class ItemDetail extends BaseModel {

    public ItemIdentifier: string | null = null;
    public RequestedDateTime: string = new Date().toISOString();
    public OrgInfoList: Array<{ OrgIdentifier: string }> = [{ OrgIdentifier: "1BL" }];

    protected _required = [
        "ItemIdentifier",
        "RequestedDateTime",
        "OrgInfoList"
    ];

    constructor(initialData?: any) {
        super();
        const data = mergeObjects(this, initialData);
        Object.assign(this, data);
    }
}