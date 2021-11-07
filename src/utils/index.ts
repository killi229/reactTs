// 判断value是否是0
import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

// 筛选对象空值
export const cleanObject = (object: object) => {
  const result = { ...object };

  Object.keys(object).forEach((key) => {
    // @ts-ignore
    const v = object[key];
    if (isFalsy(v)) {
      // @ts-ignore
      delete result[key];
    }
  });

  return result;
};

// mount hook
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

// 一定时间内多次操作, 只执行最后一次, 防抖
export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay); // 每次在value变化以后, 设置一个定时器
    return () => clearTimeout(timeout); // 每次在上一个useEffect处理以后再运行
  }, [value, delay]);

  return debounceValue;
};
