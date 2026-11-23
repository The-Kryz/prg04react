
export default function TipBox({ titulo, children }) {
  return (
    <aside className="home-tip">
      <h3>{titulo}</h3>
      <p>{children}</p>
    </aside>
  );
}
