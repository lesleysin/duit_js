import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { ColoredBoxAttributes } from "../attributes";
import { BaseAction } from "../lib/action";

export class ColoredBoxUiElement extends SingleChildLayout {
  type = DuitElementType.coloredBox as const;
  attributes: ColoredBoxAttributes;

  constructor(attrs: ColoredBoxAttributes, id?: string, action?: BaseAction, controlled?: boolean) {
    super(id, action, controlled);
    this.attributes = attrs;
  }
}