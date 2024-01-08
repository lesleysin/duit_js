import DuitElementType from "../lib/element_type";
import { DuitLeafElement } from "./child";

import type { TextAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class TextUiElement extends DuitLeafElement {
  type = DuitElementType.text as const;
  attributes: TextAttributes;

  constructor(attrs: TextAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const Text = (props: BaseProps<TextAttributes>): TextUiElement => {
  return new TextUiElement(props.attributes, props.id, props.controlled);
}