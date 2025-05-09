export interface IBooking extends INewBooking{
    id: string;
    month: number;
    year: number;
    startDate: Date;
    endDate: Date; 
}

export interface INewBooking {
    name: string;
    guests: number;
    note?: string;
    prepaid: boolean;
    startDate?: Date;
    endDate?: Date; 
    bookedDays: number;
}