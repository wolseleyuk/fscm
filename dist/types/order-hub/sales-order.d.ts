import { IRestObject } from '@wolseley/common';
export declare class SalesOrder {
    create(orderDetails: any, Rest: IRestObject, { fields, onlyData }?: {
        fields?: string | undefined;
        onlyData?: boolean | undefined;
    }): Promise<any>;
    find(): void;
    findAll(): void;
    update(headerId: string, changes: any, Rest: IRestObject, { fields, onlyData }?: {
        fields?: string[] | undefined;
        onlyData?: boolean | undefined;
    }): Promise<any>;
    private _update;
    private getSalesOrderNumber;
}
