import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { rules } from "../utils/rules";

const LoginForm: React.FC = () => {
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const { login } = useActions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    login(username, password);
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="Ім'я користувача"
        name="username"
        rules={[rules.required("Будь ласка введіть ім'я користувача!")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required("Будь ласка введіть пароль!")]}
      >
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Увійти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
