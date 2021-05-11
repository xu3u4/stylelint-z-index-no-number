# stylelint-z-index-no-number
A small linter that prevents the use of number as z-index value directly.
To pass this rule, you may use css variable to manage z-index values.

## Install
```
npm install --save-dev plugin/z-index-no-number
```

## Usage

```
// .stylelintrc
{
  "plugins": [
    "plugin/z-index-no-number"
  ],
}
```

## Rule details
```
🟢 { z-index: var(--tooltip-z-index) }
⛔️ { z-index: 1000 }
```
