import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { PositionedAttributes } from "../attributes";
import { BaseAction } from "../lib/action";

export class PositionedUiElement extends SingleChildLayout {
    type = DuitElementType.textField as const;
    attributes: PositionedAttributes;

    constructor(attrs: PositionedAttributes, id: string, action: BaseAction) {
        super(id, action, true);
        this.attributes = attrs;
    }
}