import { CenterUiElement, CheckBoxUiElement, ColoredBoxUiElement, ColumnUiElement, ContainerUiElement, DecoratedBoxUiElement, ExpandedUiElement, PaddingUiElement, PositionedUiElement, RowUiElement, SizedBoxUiElement, StackUiElement, TextFieldUiElement, TextUiElement } from "../widget_models";

export type DuitLayoutElement =
    ColumnUiElement
    | RowUiElement
    | ColoredBoxUiElement
    | SizedBoxUiElement
    | CenterUiElement
    | StackUiElement
    | ExpandedUiElement
    | PaddingUiElement
    | DecoratedBoxUiElement
    | ContainerUiElement
    | PositionedUiElement;

export type DuitElement =
    TextUiElement
    | CheckBoxUiElement
    | TextFieldUiElement
    | DuitLayoutElement;