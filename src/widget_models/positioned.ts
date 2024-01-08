import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { PositionedAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class PositionedUiElement extends SingleChildLayout {
    type = DuitElementType.positioned as const;
    attributes: PositionedAttributes;

    constructor(attrs: PositionedAttributes, id?: string, controlled?: boolean) {
        super(id, null, controlled);
        this.attributes = attrs;
    }
}

export const Positioned = (props: BaseProps<PositionedAttributes>): PositionedUiElement => {
    return new PositionedUiElement(props.attributes, props.id, props.controlled);
}