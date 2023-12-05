import { Color } from "../utils/color";
import { BorderSide } from "./border";
import { BoxShadow } from "./box_shadow";
import { BoxShape } from "./box_shape";
import { LinearGradient } from "./gradient";

/**
 * Partial representatation of Flutter's [BoxDecoration](https://api.flutter.dev/flutter/painting/BoxDecoration-class.html)
 */
export interface BoxDecoration {
    color?: Color;
    border?: BorderSide;
    borderRadius?: number;
    shape?: BoxShape;
    boxShadow?: BoxShadow;
    gradient?: LinearGradient;
}