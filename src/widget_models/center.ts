import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { CenterAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class CenterUiElement extends SingleChildLayout {
  type = DuitElementType.center as const;
  attributes: CenterAttributes;

  constructor(attrs: CenterAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const Center = (props: BaseProps<CenterAttributes>): CenterUiElement => {
  return new CenterUiElement(props.attributes, props.id, props.controlled);
}