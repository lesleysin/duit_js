const { DuitView, DuitElementType, DecoratedBoxUiElement } = require("duit_js");

function decoreatedBoxExample() {
    const builder = DuitView.builder();

    const root = builder.createRootOfExactType(DuitElementType.sizedBox, {
        width: 100,
        height: 100,
    });

    root.addChild(
        new DecoratedBoxUiElement({
            decoration: {
                borderRadius: 12,
                border: {
                    width: 3,
                    color: [181, 201, 38, 0.5]
                },
                gradient: {
                    rotationAngle: 25,
                    colors: ["#4287f5", "#f57b42"],
                    begin: "topLeft",
                    end: "bottomRight",
                }
            }
        })
    )

    return builder.build();
}

module.exports = decoreatedBoxExample