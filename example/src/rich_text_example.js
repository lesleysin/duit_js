const { TextUiElement, RichTextUiElement } = require("duit_js");
const { CenterUiElement } = require("duit_js");
const { DuitView, DuitElementType, DecoratedBoxUiElement } = require("duit_js");

function richTextExample() {
    const builder = DuitView.builder();

    const root = builder.createRootOfExactType(DuitElementType.sizedBox, {
        width: 100,
    });

    root.addChild(
        new RichTextUiElement({
            textSpan: {
                children: [
                    {
                        text: "Rich text",
                        style: {
                            fontSize: 20,
                            color: "#4287f5",
                        }
                    },
                    {
                        text: "example",
                        style: {
                            fontSize: 14,
                            color: "#6798e6",
                        }
                    },
                    {
                        text: "from DuitJS",
                        style: {
                            fontSize: 18,
                            color: "#9a67e6",
                            letterSpacing: 2,
                        }
                    },{
                        text: "with love!",
                        style: {
                            fontSize: 22,
                            color: "#443161",
                        }
                    }
                ]
            }
        })
    )

    return builder.build();
}

module.exports = richTextExample