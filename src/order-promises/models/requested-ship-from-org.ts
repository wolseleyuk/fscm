import { BaseModel, mergeObjects } from "@wolseley/common"

export class RequestedShipFromOrg extends BaseModel {

    public OrgIdentifier: string | null = null;

    protected _required = [
        "OrgIdentifier"
    ]

    constructor(initialData?: any) {
        super();
        const data = mergeObjects(this, initialData);
        Object.assign(this, data);
    }

}