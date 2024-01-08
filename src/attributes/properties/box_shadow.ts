import type { Color } from "../../utils/color";
import type { BlurStyle } from "./blur_style";
import type { Offset } from "./offset";

/**
 * @see https://api.flutter.dev/flutter/painting/BoxShadow-class.html
 */
export interface BoxShadow {
    color?: Color;
    offset?: Offset;
    blurRadius?: number;
    spreadRadius?: number;
    blurStyle?: keyof typeof BlurStyle;
}