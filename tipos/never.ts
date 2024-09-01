(() => {
  const error = (message: string): never => {
    throw new Error(message);
  };

  const test = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }
    return 1;
  };

  // error("Auxilio!");
  // console.log(test("Help me!"));
})();
