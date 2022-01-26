import { Layout, Menu, Row } from "antd";
import React from "react";
import { useHistory } from "react-router";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";

const Navbar: React.FC = () => {
  const router = useHistory();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();
  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>{" "}
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item onClick={() => router.push(RouteNames.EVENT)} key="1">
                Event
              </Menu.Item>
              <Menu.Item onClick={() => router.push(RouteNames.MAIN)} key="2">
                Main
              </Menu.Item>
              <Menu.Item
                onClick={() => router.push(RouteNames.CREATE_GAME)}
                key="3"
              >
                Create Game
              </Menu.Item>
              <Menu.Item onClick={logout} key="4">
                Exit
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item onClick={() => router.push(RouteNames.AUTH)} key="1">
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
