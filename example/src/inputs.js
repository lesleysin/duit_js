const { SizedBoxUiElement } = require("duit_js");
const { PaddingUiElement } = require("duit_js");
const { CheckBoxUiElement } = require("duit_js");
const { RowUiElement } = require("duit_js");
const { ElevatedButtonUiElement } = require("duit_js");
const { HttpAction } = require("duit_js");
const { TextFieldUiElement } = require("duit_js");
const { TextUiElement } = require("duit_js");
const { DuitView, DuitElementType, } = require("duit_js");

function inputExample() {
    const builder = DuitView.builder();

    const root = builder.createRootOfExactType(DuitElementType.column, {});

    root.addChildren(
        [
            new TextUiElement({data: "Text field 1"}),
            new SizedBoxUiElement({height: 12}),
            new PaddingUiElement({padding: [12, 0, 0, 12]}).addChild(
                new TextFieldUiElement({
                    decoration: {
                        border: {
                            type: 'outline',
                            options: {
                                borderSide: {
                                    width: 3,
                                }
                            }
                        }
                    }
                },"textInput1", new HttpAction("/textInput1change", {method: "GET"}, [{id: "textInput1", target: "value"}]))
            ),
            new SizedBoxUiElement({height: 24}),
            new TextUiElement({data: "Text field 2"}),
            new SizedBoxUiElement({height: 12}),
            new PaddingUiElement({padding: [0, 12]}).addChild(
                new TextFieldUiElement({
                    decoration: {
                        labelText: "TextFieldUiElement",
                        border: {
                            type: 'outline',
                            options: {
                                borderSide: {
                                    width: 3,
                                    color: "#DCDCDC"
                                }
                            }
                        }
                    }
                }, "textInput2", new HttpAction("/textInput2change",{method: "POST"}, [{id: "textInput2", target: "value"}]))
            ),
            new RowUiElement({}).addChildren([
                new CheckBoxUiElement({
                    value: true,
                    fillColor: {
                        selected: "#4287f5",
                    }
                }, "checkBox1"),
                new SizedBoxUiElement({width: 12}),
                new TextUiElement({data: "Checkbox"})
            ]),
            new SizedBoxUiElement({height: 24}),
            new ElevatedButtonUiElement({}, "button1", new HttpAction("/apply", {method: "POST"}, [
                {
                    id: "textInput1",
                    target: "value1"
                },
                {
                    id: "textInput2",
                    target: "value2"
                },
                {
                    id: "checkBox1",
                    target: "checkbox"
                }
            ])).addChild(new TextUiElement({data: "ElevatedButton"})),
            new SizedBoxUiElement({height: 24}),
            new TextUiElement({data: ""}, "text1", null, true),
            new TextUiElement({data: ""}, "text2", null, true),
            new TextUiElement({data: ""}, "text3", null, true),
        ]
    )

    return builder.build();
}

module.exports = inputExample