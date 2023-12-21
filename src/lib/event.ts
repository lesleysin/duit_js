import UIBuilder from "./builder";

enum ServerEventType {
    update = "update",
    updateLayout = "updateLayout",
}

export abstract class ServerEvent {
    abstract type: ServerEventType;
}

export class UpdateEvent extends ServerEvent {
    type = ServerEventType.update as const;
    updates: Record<string, any>;

    constructor(updates?: Record<string, any>) {
        super();
        this.updates = updates ?? {}
    }
}

export class LayoutUpdateEvent extends ServerEvent {
    type = ServerEventType.updateLayout as const;
    layout?: string;

    constructor(layout: string) {
        super();
        this.layout = layout;
    }
}