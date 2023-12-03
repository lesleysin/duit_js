import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { TextFieldAttributes } from "../attributes";
import { BaseAction } from "../lib/action";

export class PaddingUiElement extends SingleChildLayout {
    type = DuitElementType.textField as const;
    attributes: TextFieldAttributes;

    constructor(attrs: TextFieldAttributes, id: string, action: BaseAction) {
        super(id, action, true);
        this.attributes = attrs;
    }
}