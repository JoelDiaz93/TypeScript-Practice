(() => {
  const fullName = (
    firstName: string,
    upper: boolean,
    lastName?: string
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || "no lastname"}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "no lastname"}`;
    }
  };

  const name = fullName("Tony", true);
  console.log({ name });
})();
