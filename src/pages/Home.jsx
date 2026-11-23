import HomeHeader from '../components/HomeHeader/HomeHeader';
import HomeFooter from '../components/HomeFooter/HomeFooter';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import TipBox from '../components/TipBox/TipBox';
import { features } from '../data/users';
import './Home.css';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <section id="visao-geral" className="home-section">
          <h2>O que você controla por aqui</h2>
          <p>Cada real que entra e sai fica registrado num só lugar, sem planilha perdida nem conta de cabeça.</p>
          <div className="cards-grid" id="recursos">
            {features.map((f) => (
              <FeatureCard key={f.titulo} titulo={f.titulo} texto={f.texto} />
            ))}
          </div>
        </section>
        <TipBox titulo="Por que registrar tudo?">
          Quem anota gastos pequenos costuma perceber, em poucas semanas, para onde o dinheiro realmente vai — e isso já muda decisões.
        </TipBox>
      </main>
      <HomeFooter />
    </>
  );
}
