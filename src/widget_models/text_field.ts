import { DuitLeafElement } from "./child";
import DuitElementType from "../lib/element_type";

import type { PaddingAttributes } from "../attributes";
import { BaseAction } from "../lib/action";

export class TextFieldUiElement extends DuitLeafElement {
    type = DuitElementType.padding as const;
    attributes: PaddingAttributes;

    constructor(attrs: PaddingAttributes, id: string, action: BaseAction) {
        super(id, action, true);
        this.attributes = attrs;
    }
}