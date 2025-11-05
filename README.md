# Quản lý người dùng - React App

Ứng dụng quản lý người dùng được xây dựng bằng React + Vite với đầy đủ chức năng CRUD.

## 🚀 Tính năng

- ✅ **Tìm kiếm** - Tìm kiếm theo name hoặc username
- ✅ **Thêm người dùng** - Form thêm người dùng mới với validation
- ✅ **Sửa thông tin** - Chỉnh sửa thông tin người dùng với deep copy
- ✅ **Xóa người dùng** - Xóa người dùng khỏi danh sách
- ✅ **Hiển thị danh sách** - Fetch dữ liệu từ JSONPlaceholder API

## 🛠️ Công nghệ sử dụng

- **React 19** - UI Library
- **Vite 7** - Build tool
- **React Icons** - Bootstrap Icons
- **JSONPlaceholder API** - Fake REST API

## 📦 Cài đặt

```bash
# Clone repository
git clone https://github.com/HexDino/CNWEB_React.git

# Di chuyển vào thư mục
cd CNWEB_React

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

## 🏗️ Cấu trúc dự án

```
frontend/
├── src/
│   ├── components/
│   │   ├── SearchForm.jsx      # Component tìm kiếm
│   │   ├── AddUser.jsx          # Component thêm người dùng
│   │   └── ResultTable.jsx      # Component hiển thị danh sách
│   ├── App.jsx                  # Component chính
│   ├── main.jsx                 # Entry point
│   └── styles.css               # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 📝 Scripts

```bash
npm run dev      # Chạy development server
npm run build    # Build cho production
npm run preview  # Preview production build
```

## 🎯 Học được gì từ project này?

- Sử dụng **React Hooks** (useState, useEffect)
- Quản lý **state tập trung** và **state lifting**
- Thực hành **CRUD operations**
- Xử lý **nested state** với spread operator
- **Deep copy** để tránh mutate state
- Tổ chức **component-based architecture**
- Sử dụng **React Icons** library

## 📄 License

MIT

