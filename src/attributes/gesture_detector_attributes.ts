import { BaseAction } from "../lib/action";
import { DragStartBehavior } from "./drag_start_behavior";
import { HitTestBehavior } from "./hit_test_behavior";

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
    dragStartBehavior?: DragStartBehavior;
    behavior?: HitTestBehavior;
}