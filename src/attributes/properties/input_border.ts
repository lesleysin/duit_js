import type { Border, BorderSide } from "./border";

export interface InputBorder {
    type: keyof typeof Border;
    options?: {
        borderSide?: BorderSide;
        gapPadding: number;
        borderRadius: number;
    }
}