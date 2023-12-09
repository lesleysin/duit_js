import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { PositionedAttributes } from "../attributes";
import { BaseAction } from "../lib/action";

export class PositionedUiElement extends SingleChildLayout {
    type = DuitElementType.positioned as const;
    attributes: PositionedAttributes;

    constructor(attrs: PositionedAttributes, id: string, action: BaseAction, controlled?: boolean) {
        super(id, action, controlled);
        this.attributes = attrs;
    }
}