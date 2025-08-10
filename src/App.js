import React from "react";
import { ConfigProvider } from "antd";
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <ConfigProvider>
      <AppLayout />
    </ConfigProvider>
  );
}

export default App;
