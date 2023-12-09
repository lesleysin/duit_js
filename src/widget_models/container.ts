import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import { BaseAction } from "../lib/action";
import { ContainerAttributes } from "../attributes";

export class ContainerUiElement extends SingleChildLayout {
  type = DuitElementType.container as const;
  attributes: ContainerAttributes;

  constructor(attrs: ContainerAttributes, id?: string, action?: BaseAction, controlled?: boolean) {
    super(id, action, controlled);
    this.attributes = attrs;
  }
}