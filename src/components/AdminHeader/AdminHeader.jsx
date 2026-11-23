import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth';

export default function AdminHeader({ titulo }) {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <header className="admin-header">
      <h2>{titulo}</h2>
      <nav id="menu">
        <ul>
          <li><Link to="/">Início</Link></li>
        </ul>
      </nav>
      <button type="button" onClick={handleLogout} className="btn-delete">Sair</button>
    </header>
  );
}
