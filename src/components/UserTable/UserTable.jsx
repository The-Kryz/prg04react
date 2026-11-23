import { useState } from 'react';

function UserRow({ user, onDelete, onSave }) {
  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState(user.nome);
  const [email, setEmail] = useState(user.email);

  function salvar() {
    onSave({ ...user, nome, email });
    setEditando(false);
  }

  function cancelar() {
    setNome(user.nome);
    setEmail(user.email);
    setEditando(false);
  }

  return (
    <tr>
      <td>{user.id}</td>
      {editando ? (
        <>
          <td><input value={nome} onChange={(e) => setNome(e.target.value)} aria-label="Nome" /></td>
          <td><input value={email} onChange={(e) => setEmail(e.target.value)} aria-label="E-mail" /></td>
          <td>
            <button className="btn-edit" onClick={salvar}>Salvar</button>
            <button className="btn-delete" onClick={cancelar}>Cancelar</button>
          </td>
        </>
      ) : (
        <>
          <td>{user.nome}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn-edit" onClick={() => setEditando(true)}>Editar</button>
            <button className="btn-delete" onClick={() => window.confirm('Deseja excluir este registro?') && onDelete(user.id)}>Excluir</button>
          </td>
        </>
      )}
    </tr>
  );
}

export default function UserTable({ users, onDelete, onSave }) {
  return (
    <div className="table-responsive">
      <table className="user-table">
        <thead>
          <tr><th>ID</th><th>Nome</th><th>E-mail</th><th>Ações</th></tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <UserRow key={u.id} user={u} onDelete={onDelete} onSave={onSave} />
          ))}
          {users.length === 0 && (
            <tr><td colSpan="4">Nenhum usuário cadastrado.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
