import { DuitLeafElement, SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import { BaseAction } from "../lib/action";
import { ImageAttributes } from "../attributes";

export class ImageUiElement extends DuitLeafElement {
  type = DuitElementType.checkBox as const;
  attributes: ImageAttributes;

  constructor(attrs: ImageAttributes, id?: string, action?: BaseAction, controlled?: boolean) {
    super(id, action, controlled);
    this.attributes = attrs;
  }
}