"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    const test = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error("Auxilio!");
    console.log(test("Help me!"));
})();
//# sourceMappingURL=never.js.map