"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'No lastName'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'No lastName'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map