import { BaseModel, mergeObjects } from "@wolseley/common";

export class SalesOrderCreate extends BaseModel {
    public AgreementHeaderId: string | null = null;
    public AgreementNumber: string | null = null;
    public AllowCurrencyOverrideFlag: boolean = true;
    public BusinessUnitId: string | null = null;
    public BusinessUnitName: string | null = null;
    public BuyingPartyContactFirstName: string | null = null;
    public BuyingPartyContactId: string | null = null;
    public BuyingPartyContactLastName: string | null = null;
    public BuyingPartyContactMiddleName: string | null = null;
    public BuyingPartyContactName: string | null = null;
    public BuyingPartyContactNameSuffix: string | null = null;
    public BuyingPartyContactNumber: string | null = null;
    public BuyingPartyId: string | null = null;
    public BuyingPartyName: string | null = null;
    public BuyingPartyNumber: string | null = null;
    public BuyingPartyPersonFirstName: string | null = null;
    public BuyingPartyPersonNameSuffix: string | null = null;
    public BuyingPartyPersonTitle: string | null = null;
    public CancelReason: string | null = null;
    public CancelReasonCode: string | null = null;
    public CanceledFlag: boolean = false;
    public Comments: string | null = null;
    public CurrencyConversionDate: string | null = null;
    public CurrencyConversionRate: string | null = null;
    public CurrencyConversionType: string | null = null;
    public CustomerPONumber: string | null = null;
    public DemandClass: string | null = null;
    public DemandClassCode: string | null = null;
    public EarliestAcceptableShipDate: Date | null = null;
    public FOBPoint: string | null = null;
    public FOBPointCode: string | null = null;
    public FreezePriceFlag: boolean = true;
    public FreezeShippingChargeFlag: boolean = true;
    public FreezeTaxFlag: boolean = true;
    public FreightTerms: string | null = null;
    public FreightTermsCode: string | null = null;
    public HeaderId: string | null = null;
    public LatestAcceptableArrivalDate: Date | null = null;
    public LatestAcceptableShipDate: Date | null = null;
    public OrderKey: string | null = null;
    public OrderRepresentative: string | null = null;
    public OrderRepresentativeUsername: string | null = null;
    public OrigSystemDocumentReference: string | null = null;
    public PackingInstructions: string | null = null;
    public PartialShipAllowedFlag: boolean = false;
    public PaymentTerms: string | null = null;
    public PaymentTermsCode: string | null = null;
    public PreCreditCheckedFlag: boolean = false;
    public PreferredSoldToContactPointId: string | null = null;
    public PricedOn: string | null = null;
    public PricingDate: Date | null = null;
    public PricingSegmentCode: string | null = null;
    public PricingSegmentExplanation: string | null = null;
    public PricingStrategyExplanation: string | null = null;
    public PricingStrategyId: string | null = null;
    public PricingStrategyName: string | null = null;
    public RequestedArrivalDate: Date | null = new Date();
    public RequestedCancelDate: Date | null = null;
    public RequestedFulfillmentOrganizationCode: string | null = null;
    public RequestedFulfillmentOrganizationId: string | null = null;
    public RequestedFulfillmentOrganizationName: string | null = null;
    public RequestedShipDate: Date | null = new Date();
    public RequestingBusinessUnitId: string | null = null;
    public RequestingBusinessUnitName: string | null = null;
    public RequestingLegalEntity: string | null = null;
    public RequestingLegalEntityId: string | null = null;
    public RevisionSourceSystem: string | null = null;
    public SalesChannel: string | null = null;
    public SalesChannelCode: string | null = null;
    public Salesperson: string | null = null;
    public SalespersonId: string | null = null;
    public SegmentExplanationMessageName: string | null = null;
    public ShipmentPriority: string | null = null;
    public ShipmentPriorityCode: string | null = null;
    public ShippingCarrier: string | null = null;
    public ShippingCarrierId: string | null = null;
    public ShippingInstructions: string | null = null;
    public ShippingMode: string | null = null;
    public ShippingModeCode: string | null = null;
    public ShippingServiceLevel: string | null = null;
    public ShippingServiceLevelCode: string | null = null;
    public ShipsetFlag: string | null = null;
    public SourceTransactionId: string | null = null;
    public SourceTransactionNumber: string | null = null;
    public SourceTransactionRevisionNumber: string | null = null;
    public SourceTransactionSystem: string | null = null;
    public StrategyExplanationMessageName: string | null = null;
    public SubmittedFlag: boolean = true;
    public SubstituteAllowedFlag: string | null = null;
    public SupplierId: string | null = null;
    public SupplierName: string | null = null;
    public SupplierSiteId: string | null = null;
    public SupplierSiteName: string | null = null;
    public TransactionDocumentTypeCode: string | null = null;
    public TransactionOn: Date | null = null;
    public TransactionType: string | null = null;
    public TransactionTypeCode: string = 'Branch Order';
    public TransactionalCurrencyCode: string | null = null;
    public TransactionalCurrencyName: string | null = null;

    // public additionalInformation: any[] = [];
    // public attachments: any[] = [];
    public billToCustomer: any[] = [];
    // public copyOrderReference: any[] = [];
    // public holds: any[] = [];
    // public lines: any[] = [];
    // public payments: any[] = [];
    // public promotionCodes: any[] = [];
    // public salesCredits: any[] = [];
    // public shipToCustomer: any[] = [];
    // public totals: any[] = [];

    protected _required = [
        "BusinessUnitId",
        "SourceTransactionId",
        "SourceTransactionNumber",
        "SourceTransactionRevisionNumber",
        "SourceTransactionSystem",
        "TransactionOn",
        "HeaderId"
    ];

    constructor(initialData?: any) {
        super();
        const data = mergeObjects(this, initialData);
        Object.assign(this, data);
    }
}