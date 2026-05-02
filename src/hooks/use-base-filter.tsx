import { useCallback, useMemo } from "react";
import dayjs from "dayjs";
import { useNavigate, useSearchParams } from "react-router-dom";
import { defaultSearchParamsSchema } from "../utils/search-util-schema";

import { omitNullish } from "../utils/omit_nullish";

const buildSearch = (params: Record<string, any>) => {
  const sp = new URLSearchParams();

  Object.entries(omitNullish(params)).forEach(([key, value]) => {
    sp.set(key, String(value));
  });

  return `?${sp.toString()}`;
};

export const useBaseFilter = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const sp = useMemo(() => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);

  const parsed = useMemo(() => defaultSearchParamsSchema.parse(sp), [sp]);

  const setSearch = useCallback(
    (value: string) => {
      navigate(
        buildSearch({
          ...sp,
          search: value || undefined,
          page: 1,
        }),
      );
    },
    [navigate, sp],
  );

  const setPage = useCallback(
    (value: number) => {
      navigate(
        buildSearch({
          ...sp,
          page: value,
        }),
      );
    },
    [navigate, sp],
  );

  const setLimit = useCallback(
    (value: number) => {
      navigate(
        buildSearch({
          ...sp,
          limit: value,
        }),
      );
    },
    [navigate, sp],
  );

  const setPagination = useCallback(
    (page: number, limit: number) => {
      navigate(
        buildSearch({
          ...sp,
          page,
          limit,
        }),
      );
    },
    [navigate, sp],
  );

  const setDateRange = useCallback(
    (range: Array<Date | null>) => {
      const start = range[0];
      const end = range[1];

      navigate(
        buildSearch({
          ...sp,
          page: 1,
          start: start ? dayjs(start).toISOString() : undefined,
          end: end ? dayjs(end).endOf("day").toISOString() : undefined,
        }),
      );
    },
    [navigate, sp],
  );

  return {
    searchParams: {
      ...parsed,
      skip: (parsed.page - 1) * parsed.limit,
    },
    setSearch,
    setPage,
    setLimit,
    setPagination,
    setDateRange,
  };
};
