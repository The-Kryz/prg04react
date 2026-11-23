import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, DEMO_USER } from '../../services/auth';

const emailValido = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(DEMO_USER.email);
  const [password, setPassword] = useState(DEMO_USER.password);
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const novos = {};
    if (!emailValido(email)) novos.email = 'E-mail inválido';
    if (password.length < 6) novos.password = 'Mínimo 6 caracteres';
    if (!novos.email && !novos.password && !login(email, password)) {
      novos.geral = 'E-mail ou senha incorretos';
    }
    setErrors(novos);
    if (Object.keys(novos).length === 0) navigate('/admin');
  }

  return (
    <div className="login-card">
      <h2>Login</h2>
      <form id="loginForm" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {errors.password && <span className="error-msg">{errors.password}</span>}
        </div>
        {errors.geral && <p className="error-msg" role="alert">{errors.geral}</p>}
        <button type="submit" className="btn-primary">Entrar</button>
      </form>
    </div>
  );
}
