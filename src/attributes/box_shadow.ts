import { Color } from "../utils/color";
import { BlurStyle } from "./blur_style";
import { Offset } from "./offset";

/**
 * @see https://api.flutter.dev/flutter/painting/BoxShadow-class.html
 */
export interface BoxShadow {
    color?: Color;
    offset?: Offset;
    blurRadius?: number;
    spreadRadius?: number;
    blurStyle?: BlurStyle;
}