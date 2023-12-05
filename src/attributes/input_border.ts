import { Border, BorderSide } from "./border";

export interface InputBorder {
    type: Border;
    options?: {
        borderSide?: BorderSide;
        gapPadding: number;
        borderRadius: number;
    }
}