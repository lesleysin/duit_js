import { DuitLeafElement, SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import { BaseAction } from "../lib/action";
import { CheckboxAttributes } from "../attributes/checkbox_attributes";

export class CheckBoxUiElement extends DuitLeafElement {
  type = DuitElementType.checkBox as const;
  attributes: CheckboxAttributes;

  constructor(attrs: CheckboxAttributes, id?: string, action?: BaseAction) {
    super(id, action, true);
    this.attributes = attrs;
  }
}