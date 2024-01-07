import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { ExpandedAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class ExpandedUiElement extends SingleChildLayout {
    type = DuitElementType.expanded as const
    attributes: ExpandedAttributes
    constructor(attrs: ExpandedAttributes, id?: string, controlled?: boolean) {
        super(id, null, controlled);
        this.attributes = attrs;
    }
}

export const Expanded = (props: BaseProps<ExpandedAttributes>): ExpandedUiElement => {
    return new ExpandedUiElement(props.attributes, props.id, props.controlled);
}