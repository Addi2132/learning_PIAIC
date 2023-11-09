function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length > 0) {
        console.log("- ".concat(items.join('\n- ')));
    }
    else {
        console.log("No items specified for the sandwich.");
    }
    console.log("------------------------");
}
orderSandwich('Turkey', 'Cheese', 'Lettuce', 'Tomato');
orderSandwich('Ham', 'Swiss Cheese');
orderSandwich();
