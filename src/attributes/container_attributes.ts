import type { Color } from "../utils/color"
import type { EdgeInsets } from "../utils/insets"
import type { Alignment } from "./properties/alignment"
import type { BoxConstraints } from "./properties/box_constraits"
import type { Clip } from "./properties/clip"
import type { BoxDecoration } from "./properties/decoration"

export interface ContainerAttributes {
    constraints?: BoxConstraints
    padding?: EdgeInsets
    margin?: EdgeInsets
    alignment?: Alignment
    transformAlignment?: Alignment
    color?: Color
    decoration?: BoxDecoration
    foregroundDecoration?: BoxDecoration
    width?: number
    height?: number
    clipBehavior?: keyof typeof Clip;
}