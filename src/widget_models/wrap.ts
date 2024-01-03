import { MultiChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { WrapAttributes } from "../attributes";
import { BaseAction } from "../lib/action";

export class WrapUiElement extends MultiChildLayout {
  type = DuitElementType.wrap as const;
  attributes: WrapAttributes;

  constructor(attrs: WrapAttributes, id?: string, action?: BaseAction, controlled?: boolean) {
    super(id, action, controlled);
    this.attributes = attrs;
  }
}