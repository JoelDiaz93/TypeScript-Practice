"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => "El mundo se ha salvado, otra vez!!!";
    let myFunction;
    myFunction = addNumber;
    console.log(myFunction(3, 2));
    myFunction = greet;
    console.log(myFunction('Joel'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
//# sourceMappingURL=function-type.js.map