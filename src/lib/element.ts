import { CenterUiElement, ColoredBoxUiElement, ColumnUiElement, ExpandedUiElement, PaddingUiElement, PositionedUiElement, RowUiElement, SizedBoxUiElement, StackUiElement, TextFieldUiElement, TextUiElement } from "../widget_models";

export type DuitLayoutElement =
    ColumnUiElement
    | RowUiElement
    | ColoredBoxUiElement
    | SizedBoxUiElement
    | CenterUiElement
    | StackUiElement
    | ExpandedUiElement
    | PaddingUiElement
    | PositionedUiElement;

export type DuitElement =
    TextUiElement
    | TextFieldUiElement
    | DuitLayoutElement;