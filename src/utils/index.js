// 判断value是否是0
export const isFalsy = (value) => (value === 0 ? false : !value);

// 筛选对象空值
export const cleanObject = (object) => {
  const result = { ...object };

  Object.keys(object).forEach((key) => {
    const v = object[key];
    if (isFalsy(v)) {
      delete result[key];
    }
  });

  return result;
};
