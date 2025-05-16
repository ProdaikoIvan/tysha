import { Dayjs } from "dayjs";
import { IBookedDay } from "../dto/create-booking.dto";

export function expandBookingPeriodToDays(
  startDate: Dayjs,
  endDate: Dayjs,
  prepaid: boolean
): IBookedDay[] {
  const days: IBookedDay[] = [];
  let current = startDate.startOf("day");

  while (current.isBefore(endDate) || current.isSame(endDate, "day")) {
    days.push({ prepaid, date: current.format('YYYY-MM-DD') });
    current = current.add(1, "day");
  }

  return days;
}