import { BaseModel, mergeObjects } from "@wolseley/common";

export class SalesOrderLineCharge extends BaseModel {
    public ApplyTo: string = "Price";
    public ApplyToCode: string | null = null;
    public AverageUnitSellingPrice: number | null = null;
    public BlockAllowance: number | null = null;
    public BlockSize: number | null = null;
    public CanAdjustFlag: boolean = false;
    public ChargeCurrency: string | null = null;
    public ChargeCurrencyCode: string = "GBP";
    public ChargeDefinition: string | null = null;
    public ChargeDefinitionCode: string = "QP_SALE_PRICE";
    public ChargeSubType: string = "Price";
    public ChargeSubtypeCode: string | null = null;
    public ChargeType: string = "Sale";
    public ChargeTypeCode: string | null = null;
    public GSAUnitPrice: number | null = null;
    public PricePeriodicity: string | null = null;
    public PricePeriodicityCode: string | null = null;
    public PriceType: string = "One time";
    public PriceTypeCode: string | null = null;
    public PricedQuantity: number | null = null;
    public PricedQuantityUOM: string | null = null;
    public PricedQuantityUOMCode: string | null = null;
    public PrimaryFlag: boolean = true;
    public RollupFlag: boolean = false;
    public SequenceNumber: number = 1;
    public SourceChargeId: string = "C1";
    public TierAppliesTo: string | null = null;
    public TierAppliesToCode: string | null = null;
    public UsagePriceLockFlag: boolean | null = null;

    public chargeComponents: any[] = [];
    public chargeTiers: any[] = [];

    protected _required = [
        "SourceChargeId",
        "ApplyTo",
        "PriceType",
        "ChargeType",
        "ChargeSubType",
        "ChargeCurrencyCode",
        "SequenceNumber",
        "ChargeDefinitionCode",
        "PrimaryFlag",
        "RollupFlag"
    ];

    constructor(initialData?: any) {
        super();
        const data = mergeObjects(this, initialData);
        Object.assign(this, data);
    }
}