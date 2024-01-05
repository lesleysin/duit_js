import type { Clip } from "./properties/clip";

export class ElevatedButtonAttributes {
    autofocus?: boolean;
    clipBehavior?: keyof typeof Clip;
}