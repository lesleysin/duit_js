import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { ColoredBoxAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class ColoredBoxUiElement extends SingleChildLayout {
  type = DuitElementType.coloredBox as const;
  attributes: ColoredBoxAttributes;

  constructor(attrs: ColoredBoxAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const ColoredBox = (props: BaseProps<ColoredBoxAttributes>): ColoredBoxUiElement => {
  return new ColoredBoxUiElement(props.attributes, props.id, props.controlled);
}