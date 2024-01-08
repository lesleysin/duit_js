import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "./child";

import type { GestureDetectorAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class GestureDetectorUiElement extends SingleChildLayout {
    type = DuitElementType.gestureDetector as const
    attributes: GestureDetectorAttributes
    constructor(attrs: GestureDetectorAttributes, id?: string,) {
        super(id, null, true);
        this.attributes = attrs;
    }
}

export const GestureDetector = (props: BaseProps<GestureDetectorAttributes>): GestureDetectorUiElement => {
    return new GestureDetectorUiElement(props.attributes, props.id);
}
