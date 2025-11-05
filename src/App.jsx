import React, { useState } from 'react';
import { BsPersonLinesFill } from 'react-icons/bs';
import SearchForm from './components/SearchForm';
import AddUser from './components/AddUser';
import ResultTable from './components/ResultTable';
import './styles.css';

// Component App - Quản lý state tập trung
export default function App() {
  const [kw, setKeyword] = useState("");
  const [newUser, setNewUser] = useState(null);

  return (
    <div className="container">
      <h1>
        <BsPersonLinesFill size={32} />
        <span>Quản lý người dùng</span>
      </h1>
      <div className="search-bar-container">
        <SearchForm onChangeValue={setKeyword} />
        <AddUser onAdd={setNewUser} />
      </div>
      <ResultTable
        keyword={kw}
        user={newUser}
        onAdded={() => setNewUser(null)}
      />
    </div>
  );
}
