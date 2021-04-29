// eslint-disable-next-line @typescript-eslint/no-explicit-any
const findInObj = (object: any, value: any): any => {
  // @OBSERVAÇÃO: Remove chaves com valores nulos
  // Object.keys(object).forEach(
  //   (key) => object[key] === null && delete object[key],
  // );

  return Object.values(object).some((v) =>
    typeof v === 'object' && !Array.isArray(object)
      ? findInObj(v, value)
      : typeof v === 'string'
      ? v.toLowerCase().includes(value.toLowerCase())
      : typeof v === 'number'
      ? String(v).includes(value) || (isNaN(v) && isNaN(value))
      : v === value,
  );
};

export default findInObj;
