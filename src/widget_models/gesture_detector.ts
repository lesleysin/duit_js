import { GestureDetectorAttributes } from "../attributes";
import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "./child";

export class GestureDetectorUiElement extends SingleChildLayout {
    type = DuitElementType.gestureDetector as const
    attributes: GestureDetectorAttributes
    constructor(attrs: GestureDetectorAttributes, id?: string,) {
        super(id, undefined, true);
        this.attributes = attrs;
    }
}