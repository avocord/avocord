const { Bucket } = require("./Bucket");
const { API_ENDPOINT } = require("./endpoints");
const FormData = require("form-data");
const axios = require("axios");
class RequestHandler {
    constructor(manager) {
        this.manager = manager;
        this._queue = new Bucket();
    }

    async pushRequestInQueue(request) {
        await this._queue.wait();
        try {
            return await this.execute(request);
        } finally {
            this._queue.unLock();
        }
    }

    async request({ method, route, OAuth, reason, fileOrFiles, body }) {
        const url = new URL(route, API_ENDPOINT("v9")).toString();
        const headers = {
            "User-Agent": `DiscordBot (https://github.com/disonejs/disonejs ${require("../../package.json").version})`,
            "X-RateLimit-Precision": "millisecond",
        };
        if (OAuth) {
            headers.Authorization = `Bearer ${this.manager._token}`;
        }
        if (reason) {
            headers["X-Audit-Log-Reason"] = encodeURIComponent(body.reason);
        }
        let data;
        if (fileOrFiles && Array.isArray(fileOrFiles)) {
            data = new FormData();
            for (const file of fileOrFiles) {
                body.append(file.name, file.data);
            }
            if (body) {
                body.append("payload_json", JSON.stringify(body));
            }
        } else if (body) {
            data = JSON.stringify(body);
            headers["Content-Type"] = "application/json";
        }
        const request = await axios({
            method,
            url,
            data,
            headers,
            timeout: this.manager.maxTimeOutAborted,
        });
        return request;
    }

    async executeQueque() {
        return "xd";
    }
}
module.exports = RequestHandler;
