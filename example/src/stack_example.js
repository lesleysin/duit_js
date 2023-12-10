const { SizedBoxUiElement } = require("duit_js");
const { ColoredBoxUiElement } = require("duit_js");
const { PositionedUiElement, ContainerUiElement, EmptyUiElement } = require("duit_js");
const { DuitView, DuitElementType, DecoratedBoxUiElement } = require("duit_js");

function stackExample() {
    const builder = DuitView.builder();

    const root = builder.createRootOfExactType(DuitElementType.stack, {});

    root.addChildren([
        new PositionedUiElement({top: 25, left: 25}).addChild(
            new ContainerUiElement({
                width: 50,
                height: 50,
                color: "#9e2f2f",
            })
        ),
        new PositionedUiElement({top: 50, left: 50}).addChild(
            new ContainerUiElement({
                width: 75,
                height: 75,
                decoration: {
                    border: {
                        width: 2.5,
                        color: "#FFFFF"
                    },
                    shape: "circle",
                    color: "#32a852"
                }
            })
        ),
        new PositionedUiElement({top: 75, left: 75}).addChild(
            new SizedBoxUiElement({width: 40, height: 60}).addChild(
                new ColoredBoxUiElement({color: "#32a852"})
            )
        ),

    ])

    return builder.build();
}

module.exports = stackExample