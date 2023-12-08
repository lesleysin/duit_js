import { ID } from "../utils/id";

type HttpMethod = "POST" | "GET" | "PATCH" | "DELETE";

/**
 * Represents an actions dependency.
 * @interface ActionDependency
 */
interface ActionDependency {
    id: ID;
    target: string;
}

interface HttpActionMetainfo {
    method: HttpMethod;
}

/**
 * Represents a base action that can be performed in the application.
 * @class BaseAction
 */
export class BaseAction {
    dependsOn: ActionDependency[];

    /**
     * Url (for http) of event name (for ws)
     */
    event: string;

    /**
    * Creates a new instance of the BaseAction class.
    * @constructor
    * @param {string} event - The name of the event associated with the action.
    * @param {ActionDependency[]} dependsOn - An array of action dependencies.
    */
    constructor(event: string, dependsOn: ActionDependency[] = []) {
        this.event = event;
        this.dependsOn = dependsOn;
    }
}


/**
 * Represents an HTTP action that can be performed in the application.
 * @class HttpAction
 * @extends BaseAction
 */
export class HttpAction extends BaseAction {
    meta: HttpActionMetainfo;

    constructor(event: string, meta: HttpActionMetainfo, dependsOn: ActionDependency[] = []) {
        super(event, dependsOn);
        this.meta = meta ?? {};
    }
}

/**
 * Represents a WebSocket action that can be performed in the application.
 * @class WebSocketAction
 * @extends BaseAction
 */
export class WebSocketAction extends BaseAction {
    constructor(event: string, dependsOn: ActionDependency[] = []) {
        super(event, dependsOn);
    }
}
