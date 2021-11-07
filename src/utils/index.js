// 判断value是否是0
import { useEffect, useState } from "react";

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

// mount hook
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

// 一定时间内多次操作, 只执行最后一次, 防抖
// eslint-disable-line react-hooks/exhaustive-deps
export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
