import { useEffect, useState } from "react";
import { CalendarCell, ICalendarMonth, IMonat } from "./calendar.type";
import { calendarService } from "./calendar.utils"; // твоя функція
import { Card, Col, List, Row, Select, Switch } from "antd";

const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

const Calendar: React.FC = () => {
  const [calendar, setCalendar] = useState<ICalendarMonth | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(0);
  const [monthList, setMonthsList] = useState<IMonat[]>([]);
  useEffect(() => {
    const months: IMonat[] = calendarService.generateMonthList();
    const calendar: ICalendarMonth = calendarService.generateCalendarMonth(
      2025,
      0
    );

    setMonthsList(months);
    setCalendar(calendar);
  }, []);

  const handleProvinceChange = (monthIndex: number): void => {
    console.log(monthIndex);
    const calendar: ICalendarMonth = calendarService.generateCalendarMonth(
      2025,
      monthIndex
    );
    console.log(calendar);
    setCalendar(calendar);
  };

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setIsChecked(checked);
  };

  const getDays = (calendar: ICalendarMonth | null): CalendarCell[] => {
    console.log(
      calendar
        ? calendar.weeks.flatMap((week) => week.days).filter((day) => !!day)
        : []
    );
    return calendar
      ? calendar.weeks.flatMap((week) => week.days).filter((day) => !!day)
      : [];
  };

  return (
    <div>
      <Row style={{ padding: 16 }}>
        <Col span={12}>
          <Select
            defaultValue={selectedMonthIndex}
            size={"large"}
            style={{ width: "100%" }}
            onChange={handleProvinceChange}
            options={monthList.map((month) => ({
              label: month.monthName,
              value: month.index,
            }))}
          />
        </Col>
        <Col span={12}>
          <Switch defaultChecked onChange={onChange} />
        </Col>
      </Row>
      <div style={{ padding: 16 }}>
        {isChecked ? (
          <>
            <Row gutter={[8, 8]}>
              {daysOfWeek.map((day) => (
                <Col
                  xs={{ flex: `${100}%` }}
                  sm={{ flex: `${100 / 7}%` }}
                  key={day}
                >
                  <Card
                    size="small"
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {day}
                  </Card>
                </Col>
              ))}
            </Row>
            {calendar &&
              calendar.weeks.map((week, i) => (
                <Row key={i} gutter={[8, 8]} style={{ paddingBottom: 8 }}>
                  {week.days.map((cell: CalendarCell, idx: number) => (
                    <Col
                      key={idx}
                      xs={{ flex: `${100}%` }}
                      sm={{ flex: `${100 / 7}%` }}
                    >
                      <Card
                        size="small"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: cell?.isToday
                            ? "#e6f7ff"
                            : cell?.isBooked
                            ? "#fff1f0"
                            : "#ffffff",
                          border: cell ? "1px solid #d9d9d9" : "none",
                        }}
                      >
                        {cell?.day || ""}
                      </Card>
                    </Col>
                  ))}
                </Row>
              ))}
          </>
        ) : (
          <List
            bordered
            dataSource={getDays(calendar)}
            renderItem={(item) => <List.Item>{item?.day}</List.Item>}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
