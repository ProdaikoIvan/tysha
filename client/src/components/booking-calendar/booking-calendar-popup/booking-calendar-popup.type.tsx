export interface ICreateBooking {
    name: string;
    guests: number;
    note?: string;
    numbersOfDays: number
    prepaid: boolean;
    startDate?: string;
    bookedDays: number;
}