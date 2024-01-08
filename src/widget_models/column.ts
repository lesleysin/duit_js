import { MultiChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { FlexAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class ColumnUiElement extends MultiChildLayout {
  type = DuitElementType.column as const;
  attributes: FlexAttributes;

  constructor(attrs: FlexAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const Column = (props: BaseProps<FlexAttributes>): ColumnUiElement => {
  return new ColumnUiElement(props.attributes, props.id, props.controlled);
}