import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomeHeader() {
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);

  return (
    <header className={`home-header ${aberto ? 'menu-open' : ''}`}>
      <div className="home-header-top">
        <div className="home-brand">
          <h1>Controle Financeiro</h1>
          <p>Um lugar só para organizar receitas, despesas e o que sobra no fim do mês.</p>
        </div>
        <button
          type="button"
          className="menu-toggle-label"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          onClick={() => setAberto((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="home-header-nav">
        <nav id="menu">
          <ul>
            <li><a href="#visao-geral" onClick={fechar}>Visão geral</a></li>
            <li><a href="#recursos" onClick={fechar}>Recursos</a></li>
            <li><Link to="/login" onClick={fechar}>Acessar sistema</Link></li>
          </ul>
        </nav>

        <Link to="/login" className="btn-primary" onClick={fechar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>
          Entrar
        </Link>
      </div>
    </header>
  );
}
