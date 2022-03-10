const sum = (params) => {
  let total = 0;

  function childrenFn(babyParams) {
    if (typeof babyParams === "number") {
      total += babyParams;
      return childrenFn;
    }
    return babyParams(total);
  }

  return childrenFn(params);
};

module.exports = {
  sum,
};
