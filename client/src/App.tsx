import { ConfigProvider } from "antd";
import ukUA from "antd/locale/uk_UA";
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import localeData from 'dayjs/plugin/localeData';
import BookingsCalendarPage from "./pages/bookings-calendar-page/bookings-calendar-page";

dayjs.extend(localeData);
dayjs.locale('uk');

const App: React.FC = () => {
  
  return (
    <ConfigProvider locale={ukUA} theme={{ cssVar: true }}>
      <h1>Привіт з React + TypeScript + Webpack!</h1>
      <BookingsCalendarPage></BookingsCalendarPage>
    </ConfigProvider>
  );
};

export default App;
