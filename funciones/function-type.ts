(() => {
  const addNumber = (a: number, b: number): number => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => "El mundo se ha salvado, otra vez!!!";

  let myFunction: (y:number, z:number) => number;

  //* myFunction = 10;
  //* console.log(myFunction);

  myFunction = addNumber;
  console.log(myFunction(3,2));
  
  myFunction = greet;
  console.log(myFunction('Joel'));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
