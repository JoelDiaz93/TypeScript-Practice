(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Joel";

  console.log(typeof myCustomVariable);
  myCustomVariable = 30;
  console.log(typeof myCustomVariable);
  myCustomVariable = {
    name:'Bruce Wayne',
    age:32,
    powers:['Millonario'],
  };
  console.log(typeof myCustomVariable);
  console.log(myCustomVariable);
})();
