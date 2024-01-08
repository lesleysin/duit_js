import type { Alignment } from "./properties/alignment";

export interface AlignAttributes {
    alignment: keyof typeof Alignment;
    widthFactor?: number;
    heightFactor?: number;
}