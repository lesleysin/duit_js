import { DuitLeafElement } from "./child";
import DuitElementType from "../lib/element_type";

import type { TextFieldAttributes } from "../attributes";
import type { BaseAction } from "../lib/action";
import type { PropsWithAction } from "./props";

export class TextFieldUiElement extends DuitLeafElement {
    type = DuitElementType.textField as const;
    attributes: TextFieldAttributes;

    constructor(attrs: TextFieldAttributes, id?: string, action?: BaseAction) {
        super(id, action, true);
        this.attributes = attrs;
    }
}

export const TextField = (props: PropsWithAction<TextFieldAttributes>): TextFieldUiElement => {
    return new TextFieldUiElement(props.attributes, props.id, props.action);
}