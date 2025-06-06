import { IRestObject } from '@wolseley/common';
export declare class SalesOrderLine {
    create(value: any, orderDetails: any, Rest: IRestObject, { fields, onlyData, sequence }?: {
        fields?: string | undefined;
        onlyData?: boolean | undefined;
        sequence?: null | undefined;
    }): Promise<any>;
    find(): void;
    findAll(): void;
    deleteOne(headerId: string, key: string, Rest: IRestObject): Promise<any>;
    deleteAll(headerId: string, lines: any, Rest: IRestObject): Promise<any[]>;
    updateQuantity(headerId: string, key: string, quantity: number, charges: any, Rest: IRestObject, { fields, onlyData }?: {
        fields?: string | undefined;
        onlyData?: boolean | undefined;
    }): Promise<any>;
    private _update;
}
