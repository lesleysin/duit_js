import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { TransformAttributes, TransformType } from "../attributes";
import type { BaseProps } from "./props";

export class TransformUiElement<T extends keyof typeof TransformType = "scale"> extends SingleChildLayout {
  type = DuitElementType.transform as const;
  attributes: TransformAttributes<T>;

  constructor(attrs: TransformAttributes<T>, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const Transform = (props: BaseProps<TransformAttributes>): TransformUiElement => {
  return new TransformUiElement(props.attributes, props.id, props.controlled);
}