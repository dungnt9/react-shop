import React, { useState } from "react";
import { Layout, Tabs } from "antd";
import { ShoppingOutlined, ShopOutlined } from "@ant-design/icons";
import ProductList from "../product/ProductList";
import OrderList from "../order/OrderList";

const { Header, Content } = Layout;

const AppLayout = () => {
  const [activeKey, setActiveKey] = useState("products");

  const items = [
    {
      key: "products",
      label: "Products",
      icon: <ShoppingOutlined />,
      children: <ProductList />,
    },
    {
      key: "orders",
      label: "Orders",
      icon: <ShopOutlined />,
      children: <OrderList />,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "#fff",
          padding: "0 24px",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <h1 style={{ margin: 0, lineHeight: "64px" }}>Management System</h1>
      </Header>

      <Content style={{ padding: "24px" }}>
        <Tabs
          activeKey={activeKey}
          onChange={setActiveKey}
          items={items}
          size="large"
        />
      </Content>
    </Layout>
  );
};

export default AppLayout;
