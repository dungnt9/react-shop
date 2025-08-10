# Welcome

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Setup

### Installation

```bash
npm install
```

### API Requirements

Make sure your backend APIs are running:

- Products API: `http://localhost:6001/api/products`
- Orders API: `http://localhost:6002/api/orders`

### Project Structure

```
src/
├── components/
│   ├── layout/AppLayout.js
│   ├── product/ProductList.js, ProductModal.js
│   └── order/OrderList.js, OrderModal.js
├── services/
│   ├── productService.js
│   └── orderService.js
├── App.js
└── index.js
```

## Features

- **Products Management**: Create, read, update, delete products
- **Orders Management**: Create, read, update, delete orders
- **Modern UI**: Built with Ant Design components
- **Responsive Design**: Works on desktop and mobile
- **Form Validation**: Client-side validation for all forms

## Technologies Used

- React 18
- Ant Design 5
- Axios for API calls
- Day.js for date formatting
