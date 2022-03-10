module.exports = function (object, searchKey) {
  let resMap = new Map();

  function childrenFn(childObj, root = "") {
    for (const key in childObj) {
      if (key === searchKey) {
        resMap.set(root, childObj[key]);
      }

      if (typeof childObj[key] === "object") {
        const tempPath = root.length !== 0 ? root.concat("/", key) : key;
        childrenFn(childObj[key], tempPath);
      }
    }
  }

  childrenFn(object);
  return resMap;
};
