import { BaseModel, mergeObjects } from "@wolseley/common";

export class SalesOrderLineChargeComponent extends BaseModel {
    public ChargeCurrency: string | null = null;
    public ChargeCurrencyCode: string | null = null;
    public ChargeCurrencyDurationExtendedAmount: number | null = null;
    public ChargeCurrencyExtendedAmount: number | null = null;
    public ChargeCurrencyUnitPrice: number | null = null;
    public Explanation: string | null = null;
    public ExplanationMessageName: string | null = null;
    public HeaderCurrency: string | null = null;
    public HeaderCurrencyCode: string | null = null;
    public HeaderCurrencyDurationExtendedAmount: number | null = null;
    public HeaderCurrencyExtendedAmount: number | null = null;
    public HeaderCurrencyUnitPrice: number | null = null;
    public PercentOfComparisonElement: number | null = null;
    public PriceElement: string | null = null;
    public PriceElementCode: string | null = null;
    public PriceElementUsage: string | null = null;
    public PriceElementUsageCode: string | null = null;
    public PricingSourceId: string | null = null;
    public PricingSourceType: string | null = null;
    public PricingSourceTypeCode: string | null = null;
    public RollupFlag: boolean = false;
    public SequenceNumber: number | null = null;
    public SourceChargeComponentId: string | null = null;
    public SourceMpaId: string | null = null;
    public TaxIncludedFlag: boolean = false;
    public totalComponents: any[] = [];

    protected _required = [
        "SourceChargeComponentId",
        "PriceElementCode",
        "PriceElementUsageCode",
        "HeaderCurrencyUnitPrice",
        "HeaderCurrencyExtendedAmount",
        "RollupFlag",
        "SequenceNumber"
    ];

    constructor(initialData?: any) {
        super();
        const data = mergeObjects(this, initialData);
        Object.assign(this, data);
    }
}