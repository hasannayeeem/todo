import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import Main from "./components/Main/Main";

// const { Header, Content, Footer } = Layout;
// <Layout className="layout">
//   <Header>
//     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}></Menu>
//   </Header>
//   <Content style={{ padding: "50px" }}></Content>
//   <Footer style={{ textAlign: "center" }}>Your App Name ©2023</Footer>
// </Layout>;
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Main />} />
    </Routes>
  );
};

export default App;
