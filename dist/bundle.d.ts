import { IRestObject } from '@wolseley/common';

declare class QuickAvailability {
    find(value: string, r: IRestObject): Promise<any>;
}

export { QuickAvailability };
