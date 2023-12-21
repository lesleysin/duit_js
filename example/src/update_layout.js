const { SizedBoxUiElement } = require("duit_js");
const { PaddingUiElement } = require("duit_js");
const { CheckBoxUiElement } = require("duit_js");
const { RowUiElement } = require("duit_js");
const { ElevatedButtonUiElement } = require("duit_js");
const { HttpAction } = require("duit_js");
const { TextFieldUiElement } = require("duit_js");
const { TextUiElement } = require("duit_js");
const { DuitView, DuitElementType, } = require("duit_js");

function layoutUpdate() {
    const builder = DuitView.builder();

    const root = builder.createRootOfExactType(DuitElementType.column, {});

    root.addChildren(
        [
            new TextUiElement({data: "Layout update example"}),
            new ElevatedButtonUiElement({}, "button1", new HttpAction("/updateLayout", {method: "GET"})).addChild(new TextUiElement({data: "ElevatedButton"})),
        ]
    )

    return builder.build();
}

function layoutUpdateEventPayload() {
    const builder = DuitView.builder();

    const root = builder.createRootOfExactType(DuitElementType.column, {});

    root.addChildren(
        [
            new TextUiElement({data: "Force update!"}),
        ]
    )

    return builder.build();
}

module.exports = {layoutUpdate, layoutUpdateEventPayload}