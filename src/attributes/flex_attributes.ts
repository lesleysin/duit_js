import type { Clip } from "./properties/clip";
import type { CrossAxisAlignment } from "./properties/cross_axis_alignment";
import type { MainAxisAlignment } from "./properties/main_axis_alignment";
import type { MainAxisSize } from "./properties/main_axis_size";
import type { TextDirection } from "./properties/text_direction";
import type { VerticalDirection } from "./properties/vertical_direction";

export interface FlexAttributes {
  mainAxisAlignment?: keyof typeof MainAxisAlignment;
  mainAxisSize?: keyof typeof MainAxisSize;
  crossAxisAlignment?: keyof typeof CrossAxisAlignment;
  textDirection?: keyof typeof TextDirection;
  verticalDirection?: keyof typeof VerticalDirection;
  clipBehavior?: keyof typeof Clip;
}
