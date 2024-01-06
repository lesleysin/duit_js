import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { AlignAttributes } from "../attributes";
import type { BaseProps } from "./props";


export class AlignUiElement extends SingleChildLayout {
  type = DuitElementType.align as const;
  attributes: AlignAttributes;

  constructor(attrs: AlignAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const Align = (props: BaseProps<AlignAttributes>): AlignUiElement => {
  return new AlignUiElement(props.attributes, props.id, props.controlled);
}