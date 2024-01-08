import { DuitLeafElement } from "./child";
import DuitElementType from "../lib/element_type";

import type { ImageAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class ImageUiElement extends DuitLeafElement {
  type = DuitElementType.image as const;
  attributes: ImageAttributes;

  constructor(attrs: ImageAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const Image = (props: BaseProps<ImageAttributes>): ImageUiElement => {
  return new ImageUiElement(props.attributes, props.id, props.controlled);
}