import axios from "axios";

const API_URL = "http://localhost:6002/api/orders";

export const orderService = {
  getAll: () => axios.get(API_URL),

  getById: (id) => axios.get(`${API_URL}/${id}`),

  create: (data) =>
    axios.post(API_URL, {
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      productId: parseInt(data.productId),
      quantity: parseInt(data.quantity),
    }),

  update: (id, data) =>
    axios.put(`${API_URL}/${id}`, {
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      productId: parseInt(data.productId),
      quantity: parseInt(data.quantity),
    }),

  delete: (id) => axios.delete(`${API_URL}/${id}`),
};
