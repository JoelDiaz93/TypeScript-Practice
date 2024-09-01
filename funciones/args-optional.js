"use strict";
(() => {
    const fullName = (firstName, upper, lastName) => {
        if (upper) {
            return `${firstName} ${lastName || "no lastname"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "no lastname"}`;
        }
    };
    const name = fullName("Tony", true);
    console.log({ name });
})();
//# sourceMappingURL=args-optional.js.map