import DuitElementType from "../lib/element_type";
import { DuitLeafElement } from "./child";

import type { RichTextAttributes } from "../attributes";
import { BaseAction } from "../lib/action";

export class RichTextUiElement extends DuitLeafElement {
  type = DuitElementType.richText as const;
  attributes: RichTextAttributes;

  constructor(attrs: RichTextAttributes, id?: string, action?: BaseAction, controlled?: boolean) {
    super(id, action, controlled);
    this.attributes = attrs;
  }
}