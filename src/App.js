import React from "react";
import { ConfigProvider } from "antd";
import { Toaster } from "react-hot-toast";
import { SocketProvider } from "./contexts/SocketContext";
import NotificationHandler from "./components/notifications/NotificationHandler";
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <ConfigProvider>
      <SocketProvider>
        <AppLayout />
        <NotificationHandler />
        <Toaster />
      </SocketProvider>
    </ConfigProvider>
  );
}

export default App;
