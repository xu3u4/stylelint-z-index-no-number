const { messages, ruleName } = require("../index.js");

testRule({
  ruleName,
  config: true,

  accept: [
    {
      code: "div { z-index: var(modalLayer) }",
      description: "css variable as z-index"
    }
  ],

  reject: [
    {
      code: "div { z-index: 10 }",
      description: "number as z-index",
      message: messages.expected("10"),
      line: 1,
    }
  ]
});