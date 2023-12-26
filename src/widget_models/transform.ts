import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import { BaseAction } from "../lib/action";
import { AlignAttributes, TransformAttributes, TransformType } from "../attributes";

export class TransformUiElement<T extends TransformType = "scale"> extends SingleChildLayout {
  type = DuitElementType.transform as const;
  attributes: TransformAttributes<T>;

  constructor(attrs: TransformAttributes<T>, id?: string, action?: BaseAction, controlled?: boolean) {
    super(id, action, controlled);
    this.attributes = attrs;
  }
}