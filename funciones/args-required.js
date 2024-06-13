"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName || !lastName) {
            throw Error('Parameters missing');
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
//# sourceMappingURL=args-required.js.map