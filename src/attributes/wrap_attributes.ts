import { Axis } from "./alix";
import { Clip } from "./clip";
import { TextDirection } from "./text_direction";
import { VerticalDirection } from "./vertical_direction";
import { WrapAlignment, WrapCrossAlignment } from "./wrap_alignment";

export interface WrapAttributes {
    clipBehavior?: keyof typeof Clip;
    textDirection?: keyof typeof TextDirection;
    verticalDirection?: keyof typeof VerticalDirection;
    spacing?: number;
    runSpacing?: number;
    alignment?: keyof typeof WrapAlignment;
    runAlignment?: keyof typeof WrapAlignment;
    crossAxisAlignment?: keyof typeof WrapCrossAlignment;
    direction?: keyof typeof Axis;
}