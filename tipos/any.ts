(()=> {
  //EVITAR USAR ANY
  let avenger:any = 123;
  let exists;
  let power;

  avenger = 'Dr Strange';
  console.log(avenger.charAt(0)); //La funcion charAt se ingreso sin ayuda del editor por que la variable es de tipo any

  console.log((avenger as string).charAt(1)); //Aqui tenemos ayuda del editor para obtener las funciones del tipo String
  

  avenger =1233.892357201;
  console.log(avenger.toFixed(2));
  console.log((<number>avenger).toFixed(4));

  console.log(exists);
  console.log(power);  
})()