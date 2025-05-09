import { Dayjs } from "dayjs";
import { BookedDayType, IBookingData } from "../../../types/booking-calendar.type"
import styles from "./booking-calendar-cell.module.scss";

const classMap: Record<BookedDayType, string> = {
    [BookedDayType.start]: styles.start,
    [BookedDayType.between]: styles.between,
    [BookedDayType.end]: styles.end,
    [BookedDayType.singl]: styles.singl,
  };

export const CalendarStyleService = { 
    getCellClassNames(cellData: IBookingData | null, value: Dayjs, selectedDate: Dayjs): string {
        const isSelected = value.isSame(selectedDate, 'day');
        if (!cellData) return `${styles["cellContainer"]} ${isSelected ? styles["selected"] : ''}`;

        const { bookedDayType, bookedData } = cellData;
        const dayTypeClass = classMap[bookedDayType] || '';
        const prepaidClass = bookedData.prepaid ? styles["prepaired"] : styles["prepairedInProgress"];

        return `${styles["cellContainer"]} ${dayTypeClass} ${prepaidClass} ${isSelected ? styles["selected"] : ''}`;
    }
}