import { MultiChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { FlexAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class RowUiElement extends MultiChildLayout {
  type = DuitElementType.row as const;
  attributes: FlexAttributes;

  constructor(attrs: FlexAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const Row = (props: BaseProps<FlexAttributes>): RowUiElement => {
  return new RowUiElement(props.attributes, props.id, props.controlled);
}