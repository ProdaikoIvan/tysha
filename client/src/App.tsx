import { ConfigProvider } from "antd";
import ukUA from "antd/locale/uk_UA";
import dayjs from "dayjs";
import "dayjs/locale/uk";
import localeData from "dayjs/plugin/localeData";
import BookingsCalendarPage from "./pages/bookings-calendar-page/bookings-calendar-page";
import AxiosInterceptor from "./components/AxiosIntercepter";
import LoginPage from "./pages/login-page/login-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";

dayjs.extend(localeData);
dayjs.locale("uk");

const App: React.FC = () => {
  return (
    <ConfigProvider locale={ukUA} theme={{ cssVar: true }}>
      <AxiosInterceptor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/booking" element={<BookingsCalendarPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
