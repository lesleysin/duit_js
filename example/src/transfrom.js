const { TransformUiElement, ContainerUiElement } = require("duit_js");
const { TextUiElement } = require("duit_js");
const { DuitView, DuitElementType, } = require("duit_js");

function transfromExample() {
    const builder = DuitView.builder();

    const root = builder.createRootOfExactType(DuitElementType.column, {});

    root.addChildren(
        [
            new TextUiElement({data: "Rotate"}),
            new TransformUiElement({
                type: "rotate",
                data: {
                    angle: 45,
                }
            }).addChild(new ContainerUiElement({width: 50, height: 50, color: "#9e2f2f"})),
            new TextUiElement({data: "Translate"}),
            new TransformUiElement({
                type: "translate",
                data: {
                    offset: {
                        dx: 100,
                        dy: -25
                    },
                }
            }).addChild(new ContainerUiElement({width: 50, height: 50, color: "#9e2f2f"})),
            new TextUiElement({data: "Scale"}),
            new TransformUiElement({
                type: "scale",
                data: {
                    scale: 2,
                }
            }).addChild(new ContainerUiElement({width: 50, height: 50, color: "#9e2f2f"})),
        ]
    )

    return builder.build();
}

module.exports = transfromExample;