(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Common = {}));
})(this, (function (exports) { 'use strict';

    class QuickAvailabilitySDK {
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

    exports.QuickAvailabilitySDK = QuickAvailabilitySDK;

}));
//# sourceMappingURL=bundle.js.map
