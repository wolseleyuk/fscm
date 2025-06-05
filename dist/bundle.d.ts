import { IRestObject } from '@wolseley/common';

declare class QuickAvailability {
    find(value: string, r: IRestObject): Promise<any>;
}

declare class Messages {
    findAll(headerId: string, r: IRestObject): Promise<any>;
    private _getFindAllBody;
}

export { Messages, QuickAvailability };
