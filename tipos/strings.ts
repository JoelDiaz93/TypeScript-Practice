(() => {
  const batman: string = 'batman';
  const linternaVerde: string = "Linterna Verde";
  const superman: string = `Heroe: superman`;

  console.log(` I'm ${superman}`);

  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || "No esta presente");
})();
