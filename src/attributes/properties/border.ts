import type { Color } from "../../utils/color";

export enum Border {
    outline = "outline",
    underline = "underline"
}

export enum BorderStyle {
    solid = "solid",
    none = "none",
};

export interface BorderSide {
    color?: Color;
    width?: number;
    style?: keyof typeof BorderStyle;
}