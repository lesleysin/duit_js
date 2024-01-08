import DuitElementType from "../lib/element_type";
import { MultiChildLayout } from "./child";

import type { StackAttributes } from "../attributes/stack_attributes";
import type { BaseProps } from "./props";

export class StackUiElement extends MultiChildLayout {
    type = DuitElementType.stack as const;
    attributes: StackAttributes;

    constructor(attrs: StackAttributes, id?: string, controlled?: boolean) {
        super(id, null, controlled);
        this.attributes = attrs;
    }
}

export const Stack = (props: BaseProps<StackAttributes>): StackUiElement => {
    return new StackUiElement(props.attributes, props.id, props.controlled);
}