import { useState } from "react";

export function useSorting<T>(initialKey: keyof T) {
  const [sortKey, setSortKey] = useState<keyof T>(initialKey);
  const [direction, setDirection] = useState<"asc" | "desc">("asc");

  const toggleSort = (key: keyof T) => {
    if (key === sortKey) {
      setDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setDirection("asc");
    }
  };

  const sortData = (data: T[]) => {
    return [...data].sort((a: any, b: any) => {
      if (a[sortKey] < b[sortKey]) return direction === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return direction === "asc" ? 1 : -1;
      return 0;
    });
  };

  return { sortKey, direction, toggleSort, sortData };
}
