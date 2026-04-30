type FilterConfig<T> = {
  key: keyof T;
  value: any;
};

export function useFilters<T>(data: T[], filters: FilterConfig<T>[]) {
  if (!filters.length) return data;

  return data.filter((item) =>
    filters.every((f) => (f.value ? item[f.key] === f.value : true)),
  );
}
