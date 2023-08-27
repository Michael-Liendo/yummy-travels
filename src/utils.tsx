import { FaBus, FaCar, FaPlane } from "react-icons/fa";

type FormatDateFn = (
  date: string,
  options?: {
    date?: boolean;
    time?: boolean;
  }
) => string;

export const formatDate: FormatDateFn = (
  date: string,
  options = { date: true, time: true }
) =>
  new Intl.DateTimeFormat("es-VE", {
    ...(options?.date && { dateStyle: "medium" }),
    ...(options?.time && { timeStyle: "short" }),
  }).format(new Date(date));


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const icons: { [key: string]: any } = {
  bus: <FaBus />,
  car: <FaCar />,
  plane: <FaPlane />,
};
