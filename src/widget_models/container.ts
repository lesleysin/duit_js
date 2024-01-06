import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { ContainerAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class ContainerUiElement extends SingleChildLayout {
  type = DuitElementType.container as const;
  attributes: ContainerAttributes;

  constructor(attrs: ContainerAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const Container = (props: BaseProps<ContainerAttributes>): ContainerUiElement => {
  return new ContainerUiElement(props.attributes, props.id, props.controlled);
}