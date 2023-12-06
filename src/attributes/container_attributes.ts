import { Color } from "../utils/color"
import { EdgeInsets } from "../utils/insets"
import { Alignment } from "./alignment"
import { BoxConstraints } from "./box_constraits"
import { Clip } from "./clip"
import { BoxDecoration } from "./decoration"

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