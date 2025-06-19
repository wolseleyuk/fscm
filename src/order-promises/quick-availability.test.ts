import { QuickAvailability } from './quick-availability'
import { ItemDetail } from './models/item-detail'
import { QuickAvailabilityFind } from './models/quick-availability-find'
import { IMockResponse, DynamicMockResponseFactory, MockRestObject, MockResponse, ApplicationError } from '@wolseley/common'

const RESPONSES_200: IMockResponse[] = [
    {
        endpointId: "site_scm_extension:fscm-global-order-promising/quick-availability-check",
        response: MockResponse.success({})
    }
]

const RESPONSES_500: IMockResponse[] = [
    {
        endpointId: "site_scm_extension:fscm-global-order-promising/quick-availability-check",
        response: MockResponse.error('ProductNumber invalid', 500)
    }
]

jest.mock('./models/item-detail');
jest.mock('./models/quick-availability-find')

describe("Quick Availability", () => {

    it("Success", async () => {
        const PRODUCT_ID = '508200';

        const expectedResponse = MockResponse.success({})

        const factory = new DynamicMockResponseFactory(RESPONSES_200);
        const rest = new MockRestObject(factory);

        (ItemDetail as jest.Mock).mockImplementationOnce((args) => {
            return {
                isValid: jest.fn().mockReturnValue({ ok: true, message: 'Completed successfully' }),
                toObject: jest.fn().mockReturnValue({ ...args }),
            };
        });

        (QuickAvailabilityFind as jest.Mock).mockImplementationOnce((args) => {
            return {
                isValid: jest.fn().mockReturnValue({ ok: true, message: 'Completed successfully' }),
                toObject: jest.fn().mockReturnValue({ ...args }),
            };
        });

        const quickAvailability = new QuickAvailability;

        const response = await quickAvailability.find(PRODUCT_ID, rest);

        expect(response).toStrictEqual(expectedResponse);
        expect(ItemDetail).toHaveBeenCalledWith({ ItemIdentifier: PRODUCT_ID });
        expect(QuickAvailabilityFind).toHaveBeenCalledWith({
            ItemDetailList: [
                {
                    ItemIdentifier: PRODUCT_ID
                }
            ]
        });
    })

    it("Rest Fail", async () => {
        const PRODUCT_ID = '508200';

        const expectedResponse = MockResponse.error('ProductNumber invalid', 500);

        const factory = new DynamicMockResponseFactory(RESPONSES_500);
        const rest = new MockRestObject(factory);

        (ItemDetail as jest.Mock).mockImplementationOnce((args) => {
            return {
                isValid: jest.fn().mockReturnValue({ ok: true, message: 'Completed successfully' }),
                toObject: jest.fn().mockReturnValue({ ...args }),
            };
        });

        (QuickAvailabilityFind as jest.Mock).mockImplementationOnce((args) => {
            return {
                isValid: jest.fn().mockReturnValue({ ok: true, message: 'Completed successfully' }),
                toObject: jest.fn().mockReturnValue({ ...args }),
            };
        });

        const quickAvailability = new QuickAvailability;

        const response = await quickAvailability.find(PRODUCT_ID, rest);

        expect(response).toStrictEqual(expectedResponse);
        expect(ItemDetail).toHaveBeenCalledWith({ ItemIdentifier: PRODUCT_ID });
        expect(QuickAvailabilityFind).toHaveBeenCalledWith({
            ItemDetailList: [
                {
                    ItemIdentifier: PRODUCT_ID
                }
            ]
        });
    })

    it("Item Detail Invalid", async () => {
        const PRODUCT_ID = "508200";
        const ERROR_MESSAGE = "ItemDetail validation failed"

        const expectedResponse = MockResponse.success({})

        const factory = new DynamicMockResponseFactory(RESPONSES_200);
        const rest = new MockRestObject(factory);

        (ItemDetail as jest.Mock).mockImplementationOnce((args) => {
            return {
                isValid: jest.fn().mockReturnValue({ ok: false, message: ERROR_MESSAGE }),
                toObject: jest.fn().mockReturnValue({ ...args }),
            };
        });

        (QuickAvailabilityFind as jest.Mock).mockImplementationOnce((args) => {
            return {
                isValid: jest.fn().mockReturnValue({ ok: true, message: 'Completed successfully' }),
                toObject: jest.fn().mockReturnValue({ ...args }),
            };
        });

        const quickAvailability = new QuickAvailability;

        let response;

        try {
            response = quickAvailability.find(PRODUCT_ID, rest)
        } catch (e: any) {
            response = e
        }

        expect(response).toStrictEqual(new ApplicationError(ERROR_MESSAGE));
        expect(ItemDetail).toHaveBeenCalledWith({ ItemIdentifier: PRODUCT_ID });
        expect(QuickAvailabilityFind).toHaveBeenCalledWith({
            ItemDetailList: [
                {
                    ItemIdentifier: PRODUCT_ID
                }
            ]
        });

    })

    it("Quick Availability Find Invalid", async () => {
        const PRODUCT_ID = "508200";
        const ERROR_MESSAGE = "QuickAvailabilityFind validation failed"

        const expectedResponse = MockResponse.success({})

        const factory = new DynamicMockResponseFactory(RESPONSES_200);
        const rest = new MockRestObject(factory);

        (ItemDetail as jest.Mock).mockImplementationOnce((args) => {
            return {
                isValid: jest.fn().mockReturnValue({ ok: true, message: 'Completed successfully' }),
                toObject: jest.fn().mockReturnValue({ ...args }),
            };
        });

        (QuickAvailabilityFind as jest.Mock).mockImplementationOnce((args) => {
            return {
                isValid: jest.fn().mockReturnValue({ ok: false, message: ERROR_MESSAGE }),
                toObject: jest.fn().mockReturnValue({ ...args }),
            };
        });

        const quickAvailability = new QuickAvailability;

        let response;

        try {
            response = quickAvailability.find(PRODUCT_ID, rest)
        } catch (e: any) {
            response = e
        }

        expect(response).toStrictEqual(new ApplicationError(ERROR_MESSAGE));
        expect(ItemDetail).toHaveBeenCalledWith({ ItemIdentifier: PRODUCT_ID });
        expect(QuickAvailabilityFind).toHaveBeenCalledWith({
            ItemDetailList: [
                {
                    ItemIdentifier: PRODUCT_ID
                }
            ]
        });

    })

})