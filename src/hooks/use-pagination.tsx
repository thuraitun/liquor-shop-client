import { useState } from "react";

export function usePagination(count: number, pageSize = 5) {
  const [page, setPage] = useState(1);

  const totalCount = Math.ceil(count / pageSize);

  const paginatedIndex = (page - 1) * pageSize;

  return { page, setPage, totalCount, paginatedIndex };
}
