(() => {
  const hero: string = "Flash";

  function returnName(): void {
    console.log(hero);
  }

  const activateBatisignal = (): string => {
    return "Batisenal activada!!!";
  };

  console.log(typeof activateBatisignal);

  const heroName = returnName();

  return true;
})();
