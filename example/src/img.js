const { ImageUiElement } = require("duit_js");
const { TextUiElement } = require("duit_js");
const { DuitView, DuitElementType, DecoratedBoxUiElement } = require("duit_js");
const { readFile, readFileSync } = require("fs");

function imgViewExample() {
    const builder = DuitView.builder();

    const root = builder.createRootOfExactType(DuitElementType.column, {

    });

    const img = readFileSync('assets/vlad_ten.png')


    root.addChildren([
        new TextUiElement({
            data: "Network image"
        }),
        new ImageUiElement({
            type: "network",
            src: "https://via.assets.so/game.png?id=1&q=95&w=360&h=360&fit=fill",
            width: 350,
            height: 350
        }),
        new TextUiElement({
            data: "Asset image"
        }),
        new ImageUiElement({
            type: "asset",
            src: "assets/betboom.jpg",
            width: 350,
            height: 350
        }),
        new TextUiElement({
            data: "Memory image (from butes)"
        }),
        new ImageUiElement({
            type: "memory",
            src: "",
            byteData: img,
            width: 350,
            height: 350
        }),
    ])

    return builder.build();
}

module.exports = imgViewExample