import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import './Login.css';

export default function Login() {
  return (
    <div className="login-screen">
      <header className="login-top">
        <nav id="menu">
          <ul>
            <li><Link to="/">← Voltar para Home</Link></li>
          </ul>
        </nav>
      </header>
      <LoginForm />
    </div>
  );
}
