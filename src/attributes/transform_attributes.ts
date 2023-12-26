import { Alignment } from "./alignment";
import { FilterQuality } from "./filter_quality";
import { Offset } from "./offset";

export type TransformType = "scale" | "translate" | "rotate" | "flip";

class TransfromBase {
    origin?: Offset;
    alignment?: keyof typeof Alignment;
    transformHitTests?: boolean;
    filterQuality?: keyof typeof FilterQuality;
}

class ScaleTransform extends TransfromBase {
    scale?: number
    scaleX?: number
    scaleY?: number
}

class TranslateTransform extends TransfromBase {
    offset?: Offset;
}

class FlipTransform extends TransfromBase {
    flipX?: boolean;
    flipY?: boolean;
}

class RotateTransform extends TransfromBase {
    angle?: number;
}

type Transfroms = {
    "scale": ScaleTransform,
    "translate": TranslateTransform,
    "rotate": RotateTransform,
    "flip": FlipTransform
}

type InferTransfrom<T extends TransformType> = Transfroms[T]

export interface TransformAttributes<T extends TransformType = "scale"> {
    type: T;
    data: InferTransfrom<T>
}