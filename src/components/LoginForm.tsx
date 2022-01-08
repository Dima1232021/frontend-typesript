import { Button, Form, Input } from "antd";

import React from "react";
import { rules } from "../utils/rules";

const LoginForm: React.FC = () => {
  return (
    <Form>
      <Form.Item
        label="Ім'я користувача"
        name="username"
        rules={[rules.required("Будь ласка введіть ім'я користувача!")]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required("Будь ласка введіть пароль!")]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
