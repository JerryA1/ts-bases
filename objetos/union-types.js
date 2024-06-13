"use strict";
(() => {
    let myCustomVariable = 'Barry Allen';
    console.log(typeof myCustomVariable);
    myCustomVariable = 10;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Clark Kent',
        age: 60,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
})();
//# sourceMappingURL=union-types.js.map