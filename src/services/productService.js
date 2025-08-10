import axios from "axios";

const API_URL = "http://localhost:6001/api/products";

export const productService = {
  getAll: () => axios.get(API_URL),

  getById: (id) => axios.get(`${API_URL}/${id}`),

  create: (data) =>
    axios.post(API_URL, {
      name: data.name,
      brand: data.brand,
      price: parseFloat(data.price),
      description: data.description || "",
      stock: parseInt(data.stock),
    }),

  update: (id, data) =>
    axios.put(`${API_URL}/${id}`, {
      name: data.name,
      brand: data.brand,
      price: parseFloat(data.price),
      description: data.description || "",
      stock: parseInt(data.stock),
    }),

  delete: (id) => axios.delete(`${API_URL}/${id}`),
};
