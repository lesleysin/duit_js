const { HttpAction } = require("duit_js");
const { TextUiElement } = require("duit_js");
const { DuitView, DuitElementType, } = require("duit_js");
const { GestureDetectorUiElement } = require("../../dist/widget_models/gesture_detector");

function gestureExample() {
    const builder = DuitView.builder();

    const root = builder.createRootOfExactType(DuitElementType.column, {});

    root.addChildren(
        [
            new GestureDetectorUiElement({
                onTap: new HttpAction("/tap", {method: "GET"}),
                onLongPress: new HttpAction("/longPress", {method: "GET"}),
            }).addChild(new TextUiElement({data: "Tap/LongTap me to fire gesture callback"}))
        ]
    )

    return builder.build();
}

module.exports = gestureExample