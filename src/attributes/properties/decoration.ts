import type { Color } from "../../utils/color";
import type { BorderSide } from "./border";
import type { BoxShadow } from "./box_shadow";
import type { BoxShape } from "./box_shape";
import type { LinearGradient } from "./gradient";

/**
 * Partial representatation of Flutter's [BoxDecoration](https://api.flutter.dev/flutter/painting/BoxDecoration-class.html)
 */
export interface BoxDecoration {
    color?: Color;
    border?: BorderSide;
    borderRadius?: number;
    shape?: keyof typeof BoxShape;
    boxShadow?: BoxShadow[];
    gradient?: LinearGradient;
}