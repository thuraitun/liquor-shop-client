import { useState } from "react";

export function usePagination<T>(data: T[], pageSize = 5) {
  const [page, setPage] = useState(1);

  const total = Math.ceil(data.length / pageSize);

  const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);

  return { page, setPage, total, paginatedData };
}
