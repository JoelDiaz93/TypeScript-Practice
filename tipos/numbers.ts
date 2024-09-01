(() => {
  let avengers: number = 10;

  console.log(avengers);

  let villians: number = 20;

  if (avengers < villians) {
    console.log("Tenemos problemas");
  } else {
    console.log("Esto va a ser facil");
  }

  avengers = Number('55A');//No va a dar error porque es considerado un numero en TS
  console.log({avengers});
  
})();
