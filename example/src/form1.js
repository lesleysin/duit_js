const { DuitView, DuitElementType, ColoredBoxUiElement, UpdateEvent, CustomTreeElement, StackUiElement, PositionedUiElement, ContainerUiElement, SizedBoxUiElement, CheckBoxUiElement } = require("duit_js");

function form1() {
    const builder = DuitView.builder();

    const root = builder.createRootOfExactType(DuitElementType.column, {});

    root.addChildren(
        [
            new StackUiElement({})
                .addChild(
                    new ContainerUiElement(
                        {
                            width: 350,
                            height: 350,
                            color: "#4287f5"
                        }
                    )
                )
                .addChild(
                    new ContainerUiElement(
                        {
                            width: 300,
                            height: 600,
                            color: "#f57b42"
                        }
                    )
                )
                .addChild(
                    new ContainerUiElement(
                        {
                            width: 50,
                            height: 200,
                            color: "#DCDCDC"
                        }
                    )
                )
        ]
    )

    console.log(root)

    // root.addChildren([
    //     new StackUiElement({}).addChildren(
    //             [
    //                 new PositionedUiElement({
    //                     top: 10,
    //                     left: 10
    //                 }).addChild(new ContainerUiElement(
    //                     {
    //                         width: 200,
    //                         height: 200,
    //                         color: "#4287f5"
    //                     }
    //                 )),
    //                 new PositionedUiElement({
    //                     top: 20,
    //                     left: 30
    //                 }).addChild(new ContainerUiElement(
    //                     {
    //                         width: 200,
    //                         height: 200,
    //                         color: "#a7f542"
    //                     }
    //                 )),
    //                 new PositionedUiElement({
    //                     top: 30,
    //                     left: 50
    //                 }).addChild(new ContainerUiElement(
    //                     {
    //                         width: 200,
    //                         height: 200,
    //                         color: "#f542b9"
    //                     }
    //                 ))
    //             ]),
    //             new SizedBoxUiElement({height: 50}),
    //             // new CheckBoxUiElement({
    //             //     side: {
    //             //         color: "#f542b9",
    //             //         width: 5.0,
    //             //     }
    //             // })

    // ]);

    return builder.build();
}

module.exports = form1