function orderSandwich(...items) {
    console.log("Sandwich Order:");
    if (items.length > 0) {
        console.log(`- ${items.join('\n- ')}`);
    } else {
        console.log("No items specified for the sandwich.");
    }
    console.log("------------------------");
}

orderSandwich('Turkey', 'Cheese', 'Lettuce', 'Tomato');
orderSandwich('Ham', 'Swiss Cheese');
orderSandwich();