import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import styles from "./login-page.module.scss";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const [form] = Form.useForm<LoginFormData>();
  const [messageApi, contextHolder] = message.useMessage();
  let navigate = useNavigate();

  const login = async (user: LoginFormData) => {
    try {
      await AuthService.login(user.email, user.password);
      navigate("/admin");
    } catch (err: any) {
      messageApi.error(err.message);
    }
  };

  const logout = () => {
    AuthService.logout();
    messageApi.success("Logout successfull");
  };

  return (
    <div className={styles["container"]}>
      {contextHolder}
      <Form
        form={form}
        className={styles["formLayout"]}
        name="login"
        initialValues={{ remember: true }}
        onFinish={login}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="button" onClick={logout}>
            Log out
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
