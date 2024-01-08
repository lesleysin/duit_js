import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { DecoratedBoxAttributes } from "../attributes/decorated_box_attributes";
import type { BaseProps } from "./props";

export class DecoratedBoxUiElement extends SingleChildLayout {
  type = DuitElementType.decoratedBox as const;
  attributes: DecoratedBoxAttributes;

  constructor(attrs: DecoratedBoxAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const DecoratedBox = (props: BaseProps<DecoratedBoxAttributes>): DecoratedBoxUiElement => {
  return new DecoratedBoxUiElement(props.attributes, props.id, props.controlled);
}
