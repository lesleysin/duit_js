import { Color } from "../utils/color";
import { Alignment } from "./alignment";
import { BlendMode } from "./blend_mode";
import { BoxFit } from "./box_fit";
import { FilterQuality } from "./filter_quality";
import { ImageRepeat } from "./image_repeat";
import { ImageType } from "./image_type";

export interface ImageAttributes {
    width?: number;
    height?: number;
    cacheWidth?: number;
    cacheHeight?: number;
    color?: Color;
    isAntiAlias?: boolean;
    matchTextDirection?: boolean;
    gaplessPlayback?: boolean;
    excludeFromSemantics?: boolean;
    colorBlendMode?: keyof typeof BlendMode;
    fit?: keyof typeof BoxFit;
    alignment?: Alignment;
    repeat?: keyof typeof ImageRepeat;
    filterQuality?: keyof typeof FilterQuality;
    byteData?: Buffer;
    src: string;
    type: keyof typeof ImageType;
}