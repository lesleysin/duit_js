import { Color } from "../utils/color";
import { Alignment } from "./alignment";

/**
 * @see https://api.flutter.dev/flutter/painting/LinearGradient-class.html
 */
export interface LinearGradient {
    colors: Color[],
    stops?: number[],
    rotationAngle?: number;
    begin?: keyof typeof Alignment;
    end?: keyof typeof Alignment;
}