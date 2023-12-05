import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import { BaseAction } from "../lib/action";
import { DecoratedBoxAttributes } from "../attributes/decorated_box_attributes";

export class DecoratedBoxUiElement extends SingleChildLayout {
  type = DuitElementType.decoratedBox as const;
  attributes: DecoratedBoxAttributes;

  constructor(attrs: DecoratedBoxAttributes, id?: string, action?: BaseAction, controlled?: boolean) {
    super(id, action, controlled);
    this.attributes = attrs;
  }
}