export class QuickAvailabilitySDK {
    find(value, r) {
        const itemDetail = {
            ItemIdentifier: value,
            RequestedDateTime: new Date().toISOString(),
            OrgInfoList: [
                {
                    OrgIdentifier: "1BL"
                }
            ]
        };
        const quickAvailabilityFind = {
            CallingInstance: "GOP",
            CallingModule: "GOP",
            RequestCreationDateTime: new Date().toISOString(),
            ItemDetailList: [itemDetail]
        };
        r
            .body(quickAvailabilityFind)
            .parameters({ onlyData: false });
        return r.fetch();
    }
}
//# sourceMappingURL=quick-availability-sdk.js.map