import type { Color } from "../utils/color";
import type { BorderSide } from "./properties/border";
import type { MaterialStateProperty } from "./properties/material_state";
import type { VisualDensity } from "./properties/visual_density";

export interface CheckboxAttributes {
    value: boolean;
    autofocus?: boolean;
    isError?: boolean;
    tristate?: boolean;
    checkColor?: Color;
    splashColor?: Color;
    activeColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    fillColor?: MaterialStateProperty<Color>;
    overlayColor?: MaterialStateProperty<Color>;
    side?: BorderSide;
    splashRadius?: number;
    semanticLabel?: string;
    visualDensity?: VisualDensity;
}