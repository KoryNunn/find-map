var test = require('tape');
var findMap = require('../');

var testData = [
    {
        subItems: [
            {
                targetItem: false,
                value: 123
            }
        ]
    },
    {
        subItems: [
            {
                targetItem: false,
                value: 456
            },
            {
                targetItem: true,
                value: 789
            }
        ]
    },
    {
        subItems: [
            {
                targetItem: false,
                value: 101112
            }
        ]
    }
];

test('Deep find-map', function(t){
    t.plan(1);

    var result = findMap(testData, item => item.subItems.find(subItem => subItem.targetItem));

    t.equal(result.value, 789);
});

test('Deep miss', function(t){
    t.plan(1);

    var result = findMap(testData, item => item.subItems.find(subItem => subItem.targetItem === 'nope'));

    t.equal(result, undefined);
});