import { Color } from "../utils/color";

export type Border = "outline" | "underline";
export type BorderStyle = "solid" | "none";

export interface BorderSide {
    color?: Color;
            width?: number;
            style?: BorderStyle;
}