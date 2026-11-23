import { useState } from 'react';
import AdminHeader from '../components/AdminHeader/AdminHeader';
import UserTable from '../components/UserTable/UserTable';
import { initialUsers } from '../data/users';
import './Admin.css';

export default function Admin() {
  const [users, setUsers] = useState(initialUsers);

  const excluir = (id) => setUsers((lista) => lista.filter((u) => u.id !== id));
  const salvar = (atualizado) =>
    setUsers((lista) => lista.map((u) => (u.id === atualizado.id ? atualizado : u)));

  return (
    <div className="admin-layout">
      <AdminHeader titulo="Gestão de Usuários" />
      <UserTable users={users} onDelete={excluir} onSave={salvar} />
    </div>
  );
}
