import { ConfigProvider } from "antd";
import ukUA from "antd/locale/uk_UA";
import dayjs from "dayjs";
import "dayjs/locale/uk";
import localeData from "dayjs/plugin/localeData";
import AxiosInterceptor from "./components/AxiosIntercepter";
import LoginPage from "./pages/login-page/login-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import { useEffect } from "react";
import AuthService from "./services/auth.service";
import ProtectedRoute from "./components/protected-route";
import LayoutComponent from "./components/layout/layout";
import BookingsCalendarPage from "./pages/bookings-calendar/bookings-calendar";

dayjs.extend(localeData);
dayjs.locale("uk");

const App: React.FC = () => {
  useEffect(() => {
    AuthService.initAuthListener();
  }, []);

  return (
    <ConfigProvider locale={ukUA} theme={{ cssVar: true }}>
      <AxiosInterceptor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin"
            element={
              <ProtectedRoute>
                <LayoutComponent />
              </ProtectedRoute>
            }
          >
            <Route path="bookings" element={<BookingsCalendarPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
