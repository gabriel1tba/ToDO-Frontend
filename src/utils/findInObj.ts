// eslint-disable-next-line @typescript-eslint/no-explicit-any
const findInObj = (objectToFilter: any, wordToFilter: any): any => {
  // @OBSERVAÇÃO: Remove chaves com valores nulos
  // Object.keys(object).forEach(
  //   (key) => object[key] === null && delete object[key],
  // );

  return Object.values(objectToFilter).some((object) =>
    typeof object === 'object'
      ? findInObj(object, wordToFilter)
      : typeof object === 'string'
      ? object.toLowerCase().includes(wordToFilter.toLowerCase()) &&
        object === objectToFilter['title']
      : typeof object === 'number'
      ? String(object).includes(wordToFilter) ||
        (isNaN(object) &&
          isNaN(wordToFilter) &&
          object === objectToFilter['title'])
      : object === wordToFilter,
  );
};

export default findInObj;
