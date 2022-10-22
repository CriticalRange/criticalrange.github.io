# Custom controls variables

## Available variables

### Screen size variables
- `screen_width`: width of the screen.
- `screen_height`: height of the screen.

#### Control variables
- `width`: width of the control button itself.
- `height`: height of the control button itself.

#### Position variables
- `top`: top of the screen, default is 0.
- `left`: left of the screen, default is 0.
- `right`: right of the screen, calculated as `${screen_width} - ${width} - ${margin}`.
- `bottom`: bottom of the screen, calculated as `${screen_height} - ${height} - ${margin}`.

#### Other variables
- `margin`: margin, default is 2dp.

### How does it work
Currently, variables only apply for Dynamic X and Y, which is in format `${variable}`.
For example
```
"dynamicX": "${screen_width} - ${width} * 2 + ${margin}"
```
With these given properties:
- Screen width is **1280**
- Button width is **100**
- Margin is **2dp**, convert into pixels unit is **4px**

It will be converted into
```
"dynamicX": "1280 - 100 * 2 + 4"
```
Then, the `x` field (stored in the memory when pasted to a control json) is being calculated from `dynamicX` using [exp4j](https://lallafa.objecthunter.net/exp4j).
```
ControlData controlData = ...
controlData.x = new ExpressionBuilder(controlData.dynamicX).build().evaluate();
```