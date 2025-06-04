import { IRestObject } from '@wolseley/common';

declare class QuickAvailabilitySDK {
    find(value: string, r: IRestObject): Promise<any>;
}

export { QuickAvailabilitySDK };
