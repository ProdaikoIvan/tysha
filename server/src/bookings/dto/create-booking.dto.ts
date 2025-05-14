export class CreateBookingDto {
    id?: string;
    name: string = '';
    guests: number = 0;
    note?: string;
    prepaid: boolean = false;
    startDate: string = '';
    endDate: string = '';
    bookedDays: number = 1;
    createdDate: string = '';
    updatedDate: string = '';
    isDeleted?: boolean = false;
}
