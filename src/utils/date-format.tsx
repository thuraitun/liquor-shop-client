import dayjs from "dayjs";

export const dateFormat = (date: string) => {
  return <div>{dayjs(date).format("DD-MMM-YYYY")}</div>;
};
