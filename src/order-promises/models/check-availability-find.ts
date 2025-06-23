import { BaseModel, mergeObjects } from "@wolseley/common"
import { FulfilmentLineEntryList } from "./fulfilment-line-entry-list";

export class CheckAvailabilityFind extends BaseModel {
    
    public CallingModule: string = "HVGOP";
    public CallingInstance: string = "OPS";
    public RequestCreationDate: string = new Date().toISOString();
    public RequestTimeZone: string = "GMT";
    public ReleaseNumber: string = "1110990";
    public UniqueOrderIdentifier: string = "1110990";
    public FulfilmentLineEntryList: FulfilmentLineEntryList | null = null;


    protected _required = [
        "CallingModule",
        "CallingInstance",
        "RequesCreationDate",
        "RequestTimeZone",
        "ReleaseNumber",
        "UniqueOrderIdentifier",
        "FulfilmentLineEntryList"
    ]

    constructor(initialData?: any) {
        super();
        const data = mergeObjects(this, initialData);
        Object.assign(this, data);
    }

}