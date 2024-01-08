import DuitElementType from "../lib/element_type";
import { DuitLeafElement } from "./child";

import type { RichTextAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class RichTextUiElement extends DuitLeafElement {
  type = DuitElementType.richText as const;
  attributes: RichTextAttributes;

  constructor(attrs: RichTextAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const RichText = (props: BaseProps<RichTextAttributes>): RichTextUiElement => {
  return new RichTextUiElement(props.attributes, props.id, props.controlled);
}