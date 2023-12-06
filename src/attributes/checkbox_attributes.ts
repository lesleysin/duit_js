import { Color } from "../utils/color";
import { BorderSide } from "./border";
import { MaterialStateProperty } from "./material_state";
import { VisualDensity } from "./visual_density";

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