# find-map

Combination of Array.find and Array.map.

Find an element but return any truthy result.

## Why

This is handy for nested finds, where you want to retrieve the leaf node, eg.

## Usage

```js
var findMap = require('find-map');

var items = [
    {
        subItems: [
            {
                targetItem: false,
                value: 123,
                foo: 0
            }
        ]
    },
    {
        subItems: [
            {
                targetItem: false,
                value: 456,
                foo: 0
            },
            {
                targetItem: true,
                value: 789,
                foo: 0
            }
        ]
    }
]

var subItem = findMap(items, item => item.find(subItem => subItem.targetItem));
```

## Limitations

Because find relies on a truthy response, you can't return a falsey value from find-map.

You can get around this fairly trivially by wrapping the value for return:

```js

var fooResult = findMap(items, item =>
    item.find(subItem =>
        subItem.targetItem && [subItem.foo] // Wrap the possibly falsey value in an array.
    )
);
var result = fooResult && fooResult[0] // unwrap the value.
```