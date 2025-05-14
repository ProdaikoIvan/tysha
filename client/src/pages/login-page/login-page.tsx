import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import styles from "./login-page.module.scss";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  let navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    navigate("/");
  };

  return (
    <div className={styles['container'] }>
      <Form className={styles['formLayout'] } name="login" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="username"
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
      </Form>
    </div>
  );
};

export default LoginPage;
