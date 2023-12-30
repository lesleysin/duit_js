import { FontStyle } from "./font_style";
import { FontWeight } from "./font_weight"

export interface StrutStyle {
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    height?: number;
    leading?: number;
    forceStrutHeight?: boolean;
    debugLabel?: string;
}