import { Select, Typography } from "antd";
import { Dayjs } from "dayjs";
import styles from './booking-calendar-header.module.scss';

interface CalendarHeaderProps {
  selectedDate: Dayjs;
  value: Dayjs;
  onChange: (value: Dayjs) => void;
}

const BookingCalendarHeader: React.FC<CalendarHeaderProps> = ({
  selectedDate,
  value,
  onChange,
}) => {
  const current = value.clone();
  const localeData = value.localeData();
  const months = Array.from({ length: 12 }, (_, i) =>
    localeData.months(current.month(i))
  );

  const monthOptions = months.map((name, i) => (
    <Select.Option key={i} value={i} className="month-item">
      {name}
    </Select.Option>
  ));

  const year = value.year();
  const yearOptions = Array.from({ length: 20 }, (_, i) => year - 10 + i).map(
    (y) => (
      <Select.Option key={y} value={y} className="year-item">
        {y}
      </Select.Option>
    )
  );

  return (
    <div className={styles['calendar-header']}>
      <div className={styles['calendar-header--selected-date']}>
        {selectedDate?.format("D MMMM YYYY")}
      </div>
      <div>
        <Select
          style={{ margin: 8 }}
          size="small"
          value={year}
          onChange={(newYear) => onChange(value.clone().year(newYear))}
        >
          {yearOptions}
        </Select>
        <Select
          style={{ margin: 8 }}
          size="small"
          value={value.month()}
          onChange={(newMonth) => onChange(value.clone().month(newMonth))}
        >
          {monthOptions}
        </Select>
      </div>
    </div>
  );
};

export default BookingCalendarHeader;
