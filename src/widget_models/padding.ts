import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { PaddingAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class PaddingUiElement extends SingleChildLayout {
    type = DuitElementType.padding as const;
    attributes: PaddingAttributes;

    constructor(attrs: PaddingAttributes, id?: string, controlled?: boolean) {
        super(id, null, controlled);
        this.attributes = attrs;
    }
}

export const Padding = (props: BaseProps<PaddingAttributes>): PaddingUiElement => {
    return new PaddingUiElement(props.attributes, props.id, props.controlled);
}