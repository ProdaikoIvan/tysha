import { Select } from "antd";
import { Dayjs } from "dayjs";

interface CalendarHeaderProps {
  value: Dayjs;
  onChange: (value: Dayjs) => void;
}

const BookingCalendarHeader: React.FC<CalendarHeaderProps> = ({ value, onChange }) => {
  const current = value.clone();
  const localeData = value.localeData();
  const months = Array.from({ length: 12 }, (_, i) => localeData.months(current.month(i)));

  const monthOptions = months.map((name, i) => (
    <Select.Option key={i} value={i} className="month-item">
      {name}
    </Select.Option>
  ));

  const year = value.year();
  const yearOptions = Array.from({ length: 20 }, (_, i) => year - 10 + i).map((y) => (
    <Select.Option key={y} value={y} className="year-item">
      {y}
    </Select.Option>
  ));

  return (
    <div style={{ padding: 8 }}>
      <Select
        size="large"
        value={year}
        onChange={(newYear) => onChange(value.clone().year(newYear))}
      >
        {yearOptions}
      </Select>
      <Select
        size="large"
        value={value.month()}
        onChange={(newMonth) => onChange(value.clone().month(newMonth))}
      >
        {monthOptions}
      </Select>
    </div>
  );
};

export default BookingCalendarHeader;