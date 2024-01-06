import { DuitLeafElement } from "./child";
import DuitElementType from "../lib/element_type";

import type { BaseAction } from "../lib/action";
import type { CheckboxAttributes } from "../attributes/checkbox_attributes";
import type { PropsWithAction } from "./props";

export class CheckBoxUiElement extends DuitLeafElement {
  type = DuitElementType.checkBox as const;
  attributes: CheckboxAttributes;

  constructor(attrs: CheckboxAttributes, id?: string, action?: BaseAction) {
    super(id, action, true);
    this.attributes = attrs;
  }
}

export const CheckBox = (props: PropsWithAction<CheckboxAttributes>): CheckBoxUiElement => {
  return new CheckBoxUiElement(props.attributes, props.id, props.action);
}