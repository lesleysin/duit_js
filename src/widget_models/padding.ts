import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { PaddingAttributes, TextFieldAttributes } from "../attributes";
import { BaseAction } from "../lib/action";

export class PaddingUiElement extends SingleChildLayout {
    type = DuitElementType.padding as const;
    attributes: PaddingAttributes;

    constructor(attrs: PaddingAttributes, id: string, action: BaseAction, controlled?: boolean) {
        super(id, action, controlled);
        this.attributes = attrs;
    }
}