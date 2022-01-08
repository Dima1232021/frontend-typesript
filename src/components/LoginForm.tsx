import { Button, Form, Input } from "antd";
import Password from "antd/lib/input/Password";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { rules } from "../utils/rules";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submit = () => {
    dispatch(AuthActionCreators.login(username, password));
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
