"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
        return 1;
    };
    error('This is an error');
    console.log('Esto no se va a ejecutar');
})();
//# sourceMappingURL=never.js.map