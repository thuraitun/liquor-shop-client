export function useSearch<T>(data: T[], search: string, keys: (keyof T)[]) {
  if (!search) return data;

  return data.filter((item) =>
    keys.some((key) =>
      String(item[key]).toLowerCase().includes(search.toLowerCase()),
    ),
  );
}
