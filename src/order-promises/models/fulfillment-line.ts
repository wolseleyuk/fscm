import { BaseModel, mergeObjects } from "@wolseley/common"
import { RequestedShipFromOrg } from "./requested-ship-from-org";

export class FulfillmentLine extends BaseModel {

    public FulfillmentLineIdentifier: string = "1";
    public SalesOrderNumber: string = "001";
    public InstanceNumber: string = "GOP";
    public SalesOrderLineNumber: string = "1";
    public RequestType: string = "Order";
    public RequestedCreationDate: string = new Date().toISOString();
    public RequestedItem: string | null = null;
    public PromisingType: string = "Ship";
    public RequestedDateTime: string = new Date().toISOString();
    public RequestedQuantity: number = 1;
    public RequestedQuantityUOM: string = "EA";
    public UnitPrice: string = "0";
    public PlanningMultiple: string = "1";
    public SubstitutionsAllowedFlag: boolean = false;
    public SplitsAllowedFlag: boolean = true;
    public GenerateAltAvailabilityFlag: boolean = true;
    public AvailabilityBasis: string = "Delivery";
    public GeneratePeggingFlag: boolean = true;
    public IgnoreReservationFlag: boolean = false;
    public IgnoreDateReservationFlag: boolean = false;
    public RequestedShipFromOrg: Partial<RequestedShipFromOrg> | null = null

    protected _required: string[] = [
        "FulfillmentLineIdentifier",
        "SalesOrderNumber",
        "InstanceNumber",
        "SalesOrderLineNumber",
        "RequestType",
        "RequestedCreationDate",
        "RequestedItem",
        "PromisingType",
        "RequestedDateTime",
        "RequestedQuantity",
        "RequestedQuantityUOM",
        "UnitPrice",
        "PlanningMultiple",
        "SubstitutionsAllowedFlag",
        "SplitsAllowedFlag",
        "GenerateAltAvailabilityFlag",
        "AvailabilityBasis",
        "GeneratePeggingFlag",
        "IgnoreReservationFlag",
        "IgnoreDateReservationFlag",
        "RequestedShipFromOrg",
    ];

    constructor(initialData?: any) {
        super();
        const data = mergeObjects(this, initialData);
        Object.assign(this, data);
    }

}