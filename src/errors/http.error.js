import { HTTP_STATUS } from '../constants/http-status.constant.js';

class BadRequest {
    constructor(message = BadRequest.name) {
        this.message = message;
        this.status = HTTP_STATUS.BAD_REQUEST;
    }
}

class Unauthorized {
    constructor(message = Unauthorized.name) {
        this.message = message;
        this.status = HTTP_STATUS.UNAUTHORIZED;
    }
}

class Forbidden {
    constructor(message = Forbidden.name) {
        this.message = message;
        this.status = HTTP_STATUS.FORBIDDEN;
    }
}