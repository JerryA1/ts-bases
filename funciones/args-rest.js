"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const batman = fullName('bruce', 'wayne', 'x');
    console.log({ batman });
})();
//# sourceMappingURL=args-rest.js.map