import { IRestObject } from '@wolseley/common'

export class Messages {

    public findAll(headerId: string, r: IRestObject) {
        r.body(this._getFindAllBody(headerId));

        return r.fetch();
    }

    private _getFindAllBody(headerId: string) {
        return ({
            "HeaderId": headerId
        });
    }

}