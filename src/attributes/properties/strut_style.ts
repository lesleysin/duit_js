import type { FontStyle } from "./font_style";
import type { FontWeight } from "./font_weight"

export interface StrutStyle {
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: FontWeight;
    fontStyle?: keyof typeof FontStyle;
    height?: number;
    leading?: number;
    forceStrutHeight?: boolean;
    debugLabel?: string;
}