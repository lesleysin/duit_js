import type { BaseAction } from "../lib/action";

export interface BaseProps<T> {
    id?: string;
    controlled?: boolean;
    attributes: T;
}

export interface PropsWithAction<T> extends BaseProps<T> {
    action?: BaseAction
    controlled?: true;
}