export class Messages {
    findAll(headerId, r) {
        r.body(this._getFindAllBody(headerId));
        return r.fetch();
    }
    _getFindAllBody(headerId) {
        return ({
            "HeaderId": headerId
        });
    }
}
//# sourceMappingURL=messages.js.map