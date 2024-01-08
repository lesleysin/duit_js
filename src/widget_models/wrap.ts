import { MultiChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { WrapAttributes } from "../attributes";
import type { BaseProps } from "./props";


export class WrapUiElement extends MultiChildLayout {
  type = DuitElementType.wrap as const;
  attributes: WrapAttributes;

  constructor(attrs: WrapAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const Wrap = (props: BaseProps<WrapAttributes>): WrapUiElement => {
  return new WrapUiElement(props.attributes, props.id, props.controlled);
}