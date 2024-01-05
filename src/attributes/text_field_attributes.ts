import type { InputBorder } from "./properties/input_border";
import type { InputDecoration } from "./properties/input_decoration";
import type { TextAlign } from "./properties/text_align";
import type { TextDirection } from "./properties/text_direction";
import type { TextStyle } from "./properties/text_style";

export interface TextFieldAttributes {
    style?: TextStyle;
    decoration?: InputDecoration;
    textAlign?: keyof typeof TextAlign;
    textDirection?: keyof typeof TextDirection;
    autocorrect?: boolean;
    enableSuggestions?: boolean;
    expands?: boolean;
    readOnly?: boolean;
    showCursor?: boolean;
    enabled?: boolean;
    obscureText?: boolean;
    autofocus?: boolean;
    obscuringCharacter?: string;
    maxLines?: number;
    minLines?: number;
    maxLength?: number;
    border?: InputBorder;
    errorBorder?: InputBorder;
    enabledBorder?: InputBorder;
    focusedBorder?: InputBorder;
    focusedErrorBorder?: InputBorder;
}