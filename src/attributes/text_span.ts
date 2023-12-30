import type { TextStyle } from "./text_style";

export interface TextSpan {
    text?: string;
    style?: TextStyle;
    children?: TextSpan[];
    spellOut?: boolean;
}