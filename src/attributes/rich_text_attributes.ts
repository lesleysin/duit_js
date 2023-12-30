import { Color } from "../utils/color";
import { StrutStyle } from "./strut_style";
import { TextAlign } from "./text_align";
import { TextDirection } from "./text_direction";
import { TextHeightBehavior } from "./text_height_behavior";
import { TextOverflow } from "./text_overflow";
import { TextScaler } from "./text_scaler";
import { TextSpan } from "./text_span";
import { TextStyle } from "./text_style";
import { TextWidghtBasis } from "./text_wigth_basis";

export interface RichTextAttributes {
    textSpan?: TextSpan;
    style?: TextStyle;
    textAlign?: keyof typeof TextAlign;
    textDirection?: keyof typeof TextDirection;
    softWrap?: boolean;
    textOverflow?: keyof typeof TextOverflow;
    maxLines?: number;
    semanticsLabel?: string;
    selectionColor?: Color;
    textScaler?: TextScaler;
    strutStyle?: StrutStyle;
    textWidthBasis?: TextWidghtBasis;
    TextHeightBehavior?: TextHeightBehavior;
}