import { IRestObject } from '@wolseley/common';
export declare class Messages {
    findAll(headerId: string, r: IRestObject): Promise<any>;
    private _getFindAllBody;
}
