const http = require("http");
const express = require("express");
const WebSocket = require("ws");
const { DuitView, DuitElementType, ColoredBoxUiElement, UpdateEvent, CustomTreeElement, LayoutUpdateEvent } = require("duit_js");
const { WebSocketAction } = require("duit_js");
const { SizedBoxUiElement } = require("duit_js");
const { TextUiElement } = require("duit_js");
const { CenterUiElement } = require("duit_js");
const { RowUiElement } = require("duit_js");
const { ElevatedButtonUiElement } = require("duit_js");
const bodyParser = require("body-parser");
const decoreatedBoxExample = require("./src/dec_box_ex");
const inputs = require("./src/inputs");
const imgViewExample = require("./src/img");
const stackExample = require("./src/stack_example");
const { layoutUpdate, layoutUpdateEventPayload } = require("./src/update_layout");
const gestureExample = require("./src/gesture");
const transfromExample = require("./src/transfrom");
const richTextExample = require("./src/rich_text_example");

const app = express();

class ExampleCustomWidget extends CustomTreeElement {

   constructor(attrs, tag, id, action, controlled) {
      super(attrs, tag, id, action, controlled);
   }
}

app.use(bodyParser.json())

const router = new express.Router();

router.get("/decoratedbox", function (req, res) {
   console.log("request decoratedbox")
   const layout = decoreatedBoxExample();
   res.status(200).send(layout);
});

router.get("/inputs", function (req, res) {
   console.log("request inputs")
   const layout = inputs();
   res.status(200).send(layout);
});
router.get("/textInput1change", function (req, res) {
   console.log(req.url);
   res.status(200).send({});
});
router.post("/textInput2change", function (req, res) {
   console.log(req.body);
   res.status(200).send({});
});
router.post("/apply", function (req, res) {
   console.log(req.body);
   const {value1, value2, checkbox} = req.body;
   const update = new UpdateEvent(
      {
         "text1": {
            data: value1
         },
         "text2": {
            data: value2
         },
         "text3": {
            data: checkbox ? "checked" : "unchecked"
         },
      }
   )
   res.status(200).send(JSON.stringify(update));
});

router.get("/img", function (req, res) {
   console.log("request img")
   const layout = imgViewExample();
   res.status(200).send(layout);
});

router.get("/stack", function (req, res) {
   console.log("request stack")
   const layout = stackExample();
   res.status(200).send(layout);
});

router.get("/updateExample", function (req, res) {
   const layout = layoutUpdate();
   res.status(200).send(layout);
});

router.get("/updateLayout", function (req, res) {
   const layout = layoutUpdateEventPayload();
   const upd = new LayoutUpdateEvent(layout);
   console.log(upd)
   res.status(200).send(upd);
});

router.get("/gesture", function (req, res) {
   const layout = gestureExample();
   res.status(200).send(layout);
});

router.get("/tap", function (req, res) {
   console.log("tap")
});

router.get("/longPress", function (req, res) {
   console.log("longPress")
});

router.get("/transform", function (req, res) {
   const layout = transfromExample();
   res.status(200).send(layout);
});

router.get("/rich", function (req, res) {
   const layout = richTextExample();
   res.status(200).send(layout);
});

app.use(router);

const server = http.createServer(app);

const webSocketServer = new WebSocket.Server({ server });

function createDynamicDuitView() {
   //create UIBuilder instance
   const builder = DuitView.builder();

   //create child elements tree
   const sizedBoxWithCentredText = new RowUiElement({ mainAxisAlignment: "spaceEvenly" }).addChild(new SizedBoxUiElement({ width: 100, height: 400 }).addChild(new ColoredBoxUiElement({ color: "#DCDCDC" }).addChild(new CenterUiElement({}).addChild(new TextUiElement({ data: "1123" }))))).addChild(new SizedBoxUiElement({ width: 120, height: 300 }).addChild(new ColoredBoxUiElement({ color: "#9e2f2f" }).addChild(new CenterUiElement({}).addChild(new ElevatedButtonUiElement({}, "button1", new WebSocketAction("event1", [])).addChild(new TextUiElement({ data: "button" }))))))

   //create view root and assing child/children to him
   builder.createRootOfExactType(DuitElementType.column, {}).addChild(sizedBoxWithCentredText)

   //return json string
   return builder.build();
}


webSocketServer.on('connection', ws => {
   ws.on('message', m => {
      console.log(JSON.parse(m));
   });

   ws.on("error", e => ws.send(e));

   console.log("connected");
   ws.send(createDynamicDuitView());
});

server.listen(8999, () => console.log("Server started"))
