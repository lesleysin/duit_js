import { Alignment } from "./alignment";

export interface AlignAttributes {
    alignment: keyof typeof Alignment;
    widthFactor?: number;
    heightFactor?: number;
}