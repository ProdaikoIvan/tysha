import { Dayjs } from "dayjs";

export interface IBooking {
    id?: string;
    name: string;
    guests: number;
    note: string;
    prepaid: boolean;
    startDate: Dayjs;
    endDate: Dayjs; 
    bookedDays: number;
}

export interface IBookingDpo {
    id?: string;
    name: string;
    guests: number;
    note: string;
    prepaid: boolean;
    startDate: string;
    endDate: string; 
    bookedDays: number;
}