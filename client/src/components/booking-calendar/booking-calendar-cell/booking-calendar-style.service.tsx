import { Dayjs } from "dayjs";
import {  IBookingData } from "../../../types/booking-calendar.type"
import styles from "./booking-calendar-cell.module.scss";


export const CalendarStyleService = { 
    getCellClassNames(cellData: IBookingData | null, value: Dayjs, selectedDate: Dayjs): string {
        const isSelected = value.isSame(selectedDate, 'day');
        if (!cellData) return `${styles["cellContainer"]} ${isSelected ? styles["selected"] : ''}`;

        const { bookedDayType, bookedData } = cellData;
        const prepaidClass = bookedData.prepaid ? styles["prepaired"] : styles["prepairedInProgress"];

        return `${styles["cellContainer"]} ${prepaidClass} ${isSelected ? styles["selected"] : ''}`;
    }
}