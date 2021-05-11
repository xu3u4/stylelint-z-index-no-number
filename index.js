const stylelint = require("stylelint");

const ruleName = "plugin/z-index-no-number";
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: (value) => `Expected ${value} not to be a number, use css variable instead.`
});

module.exports = stylelint.createPlugin(
  ruleName,
  function () {
    return function (postcssRoot, postcssResult) {
      postcssRoot.walkDecls('z-index', decl => {

        if (!isNaN(decl.value)) {
          stylelint.utils.report({
            ruleName,
            result: postcssResult,
            message: messages.expected(decl.value),
            node: decl,
            word: decl.value,
          });
        }
      })

    };
  }
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;
