import { Badge, BadgeProps } from 'antd';
import type { Dayjs } from 'dayjs';

export const bookingCalendarService = {
  dateCellRender(value: Dayjs) {
    const listData = bookingCalendarService.getListData(value);
    return listData.length > 0 ? (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps["status"]} text={item.content} />
          </li>
        ))}
      </ul>
    ) : null;
  },

  getListData(value: Dayjs) {
    let listData: { type: string; content: string }[] = []; // Specify the type of listData
    return listData || [];
  },
};