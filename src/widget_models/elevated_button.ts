import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { ElevatedButtonAttributes } from "../attributes";
import type { BaseAction } from "../lib/action";
import type { PropsWithAction } from "./props";

export class ElevatedButtonUiElement extends SingleChildLayout {
    type = DuitElementType.elevatedButton as const;
    attributes: ElevatedButtonAttributes;

    constructor(attrs: ElevatedButtonAttributes, id?: string, action?: BaseAction) {
        super(id, action, true);
        this.attributes = attrs;
    }
}

export const ElevatedButton = (props: PropsWithAction<ElevatedButtonAttributes>): ElevatedButtonUiElement => {
    return new ElevatedButtonUiElement(props.attributes, props.id, props.action);
}