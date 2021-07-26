class Bucket {
    constructor() {
        this._queue = [];
    }

    get remainingAmount() {
        return this._queue.length;
    }

    wait() {
        const nextElement = this.remainingAmount ? this._queue[this.remainingAmount - 1] : Promise.resolve;
        let resolvePromise;
        const promise = new Promise((resolve) => {
            return (resolvePromise = resolve);
        });
        this._queue.push({
            resolvePromise,
            promise,
        });
        return nextElement;
    }

    unLock() {
        const firstElement = this._queue.shift();
        if (firstElement) firstElement.resolve();
    }
}
module.exports = { Bucket };
