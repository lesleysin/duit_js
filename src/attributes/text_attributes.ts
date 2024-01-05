import type { TextAlign } from "./properties/text_align";
import type { TextDirection } from "./properties/text_direction";
import type { TextOverflow } from "./properties/text_overflow";
import type { TextStyle } from "./properties/text_style";

export interface TextAttributes {
    data: string;
    textAlign?: keyof typeof TextAlign;
    textDirection?: keyof typeof TextDirection;
    softWrap?: boolean;
    overflow?: keyof typeof TextOverflow;
    maxLines?: number;
    semanticsLabel?: string;
    style?: TextStyle;
}