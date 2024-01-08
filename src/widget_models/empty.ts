import { DuitLeafElement } from "./child";
import DuitElementType from "../lib/element_type";

export class EmptyUiElement extends DuitLeafElement {
  type = DuitElementType.empty as const;

  constructor() {
    super(undefined, undefined, true);
  }
}

export const Empty = () => new EmptyUiElement();