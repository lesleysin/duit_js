import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "./child";

import type { SizedBoxAttributes } from "../attributes/sized_box_attributes";
import type { BaseProps } from "./props";


export class SizedBoxUiElement extends SingleChildLayout {
  type = DuitElementType.sizedBox as const;
  attributes: SizedBoxAttributes;

  constructor(attrs: SizedBoxAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const SizedBox = (props: BaseProps<SizedBoxAttributes>): SizedBoxUiElement => {
  return new SizedBoxUiElement(props.attributes, props.id, props.controlled);
}