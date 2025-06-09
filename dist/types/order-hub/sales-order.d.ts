import { IRestObject } from '@wolseley/common';
export { SalesOrderCreate } from "./models/sales-order-create";
export declare class SalesOrder {
    create(orderDetails: any, Rest: IRestObject, { fields, onlyData }?: {
        fields?: string | undefined;
        onlyData?: boolean | undefined;
    }): Promise<any>;
    find(): void;
    findAll(): void;
    submit(headerId: string, Rest: IRestObject, { fields, onlyData }?: {
        fields?: string | undefined;
        onlyData?: boolean | undefined;
    }): Promise<any>;
    update(headerId: string, changes: any, Rest: IRestObject, { fields, onlyData }?: {
        fields?: string[] | undefined;
        onlyData?: boolean | undefined;
    }): Promise<any>;
    private _update;
    private getSalesOrderNumber;
}
