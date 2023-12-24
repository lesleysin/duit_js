import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import { BaseAction } from "../lib/action";
import { AlignAttributes } from "../attributes";

export class AlignUiElement extends SingleChildLayout {
  type = DuitElementType.align as const;
  attributes: AlignAttributes;

  constructor(attrs: AlignAttributes, id?: string, action?: BaseAction, controlled?: boolean) {
    super(id, action, controlled);
    this.attributes = attrs;
  }
}