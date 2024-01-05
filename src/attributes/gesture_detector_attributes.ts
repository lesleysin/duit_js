import type { BaseAction } from "../lib/action";
import type { DragStartBehavior } from "./properties/drag_start_behavior";
import type { HitTestBehavior } from "./properties/hit_test_behavior";

export interface GestureDetectorAttributes {
    onTap?: BaseAction;
    onTapDown?: BaseAction;
    onTapUp?: BaseAction;
    onTapCancel?: BaseAction;
    onDoubleTap?: BaseAction;
    onDoubleTapDown?: BaseAction;
    onDoubleTapCancel?: BaseAction;
    onLongPressDown?: BaseAction;
    onLongPressCancel?: BaseAction;
    onLongPress?: BaseAction
    onLongPressStart?: BaseAction;
    onLongPressMoveUpdate?: BaseAction;
    onLongPressUp?: BaseAction;
    onLongPressEnd?: BaseAction;
    onPanStart?: BaseAction;
    onPanDown?: BaseAction;
    onPanUpdate?: BaseAction;
    onPanEnd?: BaseAction;
    onPanCancel?: BaseAction;
    excludeFromSemantics?: boolean;
    dragStartBehavior?: keyof typeof DragStartBehavior;
    behavior?: keyof typeof HitTestBehavior;
}