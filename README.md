# Duit - drived UI tooklit.

***Duit*** is a server side UI framework for Flutter. It is used for creating widgets and server-side state management.

The framework consists of several parts:

- [Flutter package](https://github.com/lesleysin/flutter_duit)
- [Go backend adapter](https://github.com/lesleysin/duit_go)
- Node JS backend adapter (this repository)

The framework ensures that the layout model is received from the server, interacts with the backend via the Action API, and embeds custom components into the widget hierarchy processing pipeline. Duit is flexible and extensible, which allows it to create rich UI dynamically.

## Core features
- Structured mappings out of the box. UI property structures and constants.
- A simple contract for building a hierarchy of widgets.
- Ready-made widget functions
- Easily create custom actions and their dependencies

## Usage example

1. Create widget composition and build json from it
```javascript
function Example() {
   //create UIBuilder instance
   const builder = DuitView.builder();

   //create child elements tree
   const text = new TextUiElement({data: "Hello World"})

   //create view root and assing child/children to him
   builder.createRootOfExactType(DuitElementType.column, {}).addChild(sizedBoxWithCentredText)

   //return json string
   return builder.build();
}
```
2. Run function and return result to client side
```javascript
router.get("/layout1", function (req, res) {
   const layout = Example();
   res.status(200).send(layout);
});
```

## Future plans
- Widget library expansion
- Troubleshooting, updating documentation

## License
MIT


