export interface IBooking extends INewBooking{
    id: string;
    startDate: Date;
    endDate: Date; 
}

export interface INewBooking {
    id?: string;
    name: string;
    guests: number;
    note?: string;
    prepaid: boolean;
    startDate?: Date;
    endDate?: Date; 
    bookedDays: number;
}