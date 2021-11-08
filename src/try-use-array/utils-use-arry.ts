// mount hook
import { useEffect, useState } from "react";

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export const useArray = <T>(info: T[]) => {
  const [value, setValue] = useState(info);

  return {
    value,
    setValue,
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...info];
      copy.splice(index, 1);
      setValue(copy);
    },
    add: (item: T) => setValue([...value, item]),
  };
};
