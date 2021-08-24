import { useEffect, useState } from "react";

/**
 *
 * @param initialArray 初始化数据
 * @returns 返回有状态性的值、添加函数、移除指定索引函数、清空数据函数
 */
export const useArray = <T>(initialArray: T[]) => {
  const [list, setList] = useState(initialArray);

  const add = (item: T) => {
    setList([...list, item]);
  };

  const removeIndex = (index: number) => {
    const temp = [...list];
    temp.splice(index, 1);
    setList(temp);
  };
  const clear = () => {
    setList([]);
  };

  return { list, add, removeIndex, clear };
};

export const useDocumentTitle = (title: string) => {
  const oldTitle = document.title;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      document.title = oldTitle;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
