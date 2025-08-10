import React, { useState, useEffect } from "react";
import { Table, Button, Space, Tag, message } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { orderService } from "../../services/orderService";
import OrderModal from "./OrderModal";
import dayjs from "dayjs";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await orderService.getAll();
      setOrders(response.data);
    } catch (error) {
      message.error("Failed to fetch orders");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleCreate = () => {
    setEditingOrder(null);
    setModalVisible(true);
  };

  const handleEdit = (order) => {
    setEditingOrder(order);
    setModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await orderService.delete(id);
      message.success("Order deleted successfully");
      fetchOrders();
    } catch (error) {
      message.error("Failed to delete order");
    }
  };

  const handleModalSuccess = () => {
    setModalVisible(false);
    fetchOrders();
  };

  const columns = [
    {
      title: "Customer",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Product",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (amount) => `$${amount.toFixed(2)}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color="blue">{status}</Tag>,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => dayjs(date).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleCreate}>
          Add Order
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={orders}
        rowKey="id"
        loading={loading}
      />

      <OrderModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSuccess={handleModalSuccess}
        order={editingOrder}
      />
    </div>
  );
};

export default OrderList;
