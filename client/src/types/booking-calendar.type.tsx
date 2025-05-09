import { IBooking } from "./booking.type";

export const BookedDayType = {
    start: 'start',
    between: 'between',
    end: 'end',
    singl: 'singl'
  } as const;

export type BookedDayType = keyof typeof BookedDayType;

export interface IBookingData {
    bookedData: IBooking;
    bookedDayType: BookedDayType;
}