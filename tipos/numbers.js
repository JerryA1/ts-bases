"use strict";
(() => {
    let avengers = 10;
    console.log({ avengers });
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos salvados');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
//# sourceMappingURL=numbers.js.map