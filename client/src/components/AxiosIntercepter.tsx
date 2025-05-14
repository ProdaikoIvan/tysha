import { useEffect } from "react";

import { message } from "antd";
import axiosInstance from "../services/api.service";

const AxiosInterceptor = () => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        const { config, status } = response;
        if (
          (config.method === "put" || config.method === "patch") &&
          status >= 200 &&
          status < 300
        ) {
          messageApi.success("Успішно оновлено");
        }

        if (config.method === "post" && status === 201) {
          messageApi.success("Успішно створено");
        }

        
        if (response.config.method === "delete") {
          messageApi.success("Запис успішно видалено");
        }

        return response;
      },
      (error) => {
        const errMsg = error.response?.data?.message || "Помилка сервера";
        messageApi.error(errMsg);
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [messageApi]);

  return contextHolder;
};

export default AxiosInterceptor;
