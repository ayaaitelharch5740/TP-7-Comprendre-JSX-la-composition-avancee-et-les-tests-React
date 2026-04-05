import { useState } from 'react';
import ExplorationJSX from './ExplorationJSX';
import BoutonTrace from './BoutonTrace';
import ChargeurDonnees from './ChargeurDonnees';
import Salutation from './Salutation';
import avecHorodatage from './avecHorodatage';
import FormulaireContact from './FormulaireContact';

const SalutationHorodatee = avecHorodatage(Salutation);

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:          #F7F6F2;
    --surface:     #FFFFFF;
    --surface2:    #F0EEE8;
    --border:      #E4E1D8;
    --text:        #1A1916;
    --muted:       #7A7870;
    --accent:      #2563EB;
    --accent-soft: #EFF4FF;
    --green:       #16A34A;
    --green-soft:  #F0FDF4;
    --amber:       #D97706;
    --amber-soft:  #FFFBEB;
    --purple:      #9333EA;
    --purple-soft: #FAF5FF;
    --red:         #DC2626;
    --red-soft:    #FEF2F2;
    --radius:      14px;
    --radius-sm:   8px;
  }

  body {
    background: var(--bg);
    font-family: 'Outfit', sans-serif;
    color: var(--text);
    min-height: 100vh;
  }

  .app-shell {
    display: grid;
    grid-template-columns: 248px 1fr;
    min-height: 100vh;
  }

  /* ── Sidebar ── */
  .sidebar {
    background: var(--surface);
    border-right: 1px solid var(--border);
    padding: 1.75rem 1.25rem;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .sidebar-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1.75rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid var(--border);
  }

  .logo-icon {
    width: 32px; height: 32px;
    background: var(--text);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    color: var(--bg);
    font-size: 13px; font-weight: 700;
  }

  .logo-name { font-size: 13.5px; font-weight: 600; }
  .logo-sub  { font-size: 11px; color: var(--muted); }

  .nav-group { margin-bottom: 1.25rem; }
  .nav-group-label {
    font-size: 10px; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--muted); padding: 0 6px; margin-bottom: 3px;
  }

  .nav-btn {
    display: flex; align-items: center; gap: 7px;
    width: 100%; padding: 6px 8px;
    border-radius: var(--radius-sm);
    font-family: 'Outfit', sans-serif;
    font-size: 13px; font-weight: 400;
    color: var(--muted);
    background: none; border: none; cursor: pointer;
    text-align: left; transition: all 0.12s;
  }
  .nav-btn:hover  { background: var(--surface2); color: var(--text); }
  .nav-btn.active { background: var(--accent-soft); color: var(--accent); font-weight: 500; }

  .nav-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: currentColor; opacity: 0.5; flex-shrink: 0;
  }

  .sidebar-footer {
    margin-top: auto;
    padding-top: 1.25rem;
    border-top: 1px solid var(--border);
  }

  .prog-row {
    display: flex; justify-content: space-between;
    font-size: 11.5px; color: var(--muted); margin-bottom: 6px;
  }

  .prog-track {
    height: 3px; background: var(--border);
    border-radius: 2px; overflow: hidden;
  }

  .prog-fill {
    height: 100%; width: 70%;
    background: var(--text); border-radius: 2px;
  }

  /* ── Main ── */
  .main {
    padding: 2.25rem 2.75rem;
    max-width: 800px;
  }

  .page-eyebrow {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 11px; font-weight: 600;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--accent); background: var(--accent-soft);
    border: 1px solid #DBEAFE;
    border-radius: 20px; padding: 3px 11px; margin-bottom: 0.8rem;
  }

  .page-title {
    font-size: 28px; font-weight: 700;
    letter-spacing: -0.4px; line-height: 1.2;
    margin-bottom: 0.45rem;
  }

  .page-desc {
    font-size: 14.5px; color: var(--muted);
    font-weight: 300; line-height: 1.65;
    margin-bottom: 2rem;
  }

  /* ── Cards ── */
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    margin-bottom: 1.25rem;
    overflow: hidden;
    animation: rise 0.28s ease both;
  }

  @keyframes rise {
    from { opacity:0; transform: translateY(10px); }
    to   { opacity:1; transform: translateY(0); }
  }

  .card:nth-child(1)  { animation-delay: 0.04s; }
  .card:nth-child(2)  { animation-delay: 0.09s; }
  .card:nth-child(3)  { animation-delay: 0.14s; }
  .card:nth-child(4)  { animation-delay: 0.19s; }
  .card:nth-child(5)  { animation-delay: 0.24s; }
  .card:nth-child(6)  { animation-delay: 0.29s; }
  .card:nth-child(7)  { animation-delay: 0.34s; }

  .card-head {
    display: flex; align-items: center;
    justify-content: space-between;
    padding: 0.9rem 1.2rem;
    border-bottom: 1px solid var(--border);
    cursor: pointer; user-select: none;
  }

  .card-head:hover { background: var(--surface2); }

  .card-head-left { display: flex; align-items: center; gap: 10px; }

  .badge {
    width: 26px; height: 26px; border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; flex-shrink: 0;
  }

  .b-blue   { background: var(--accent-soft);  color: var(--accent);  }
  .b-green  { background: var(--green-soft);   color: var(--green);   }
  .b-amber  { background: var(--amber-soft);   color: var(--amber);   }
  .b-purple { background: var(--purple-soft);  color: var(--purple);  }
  .b-red    { background: var(--red-soft);     color: var(--red);     }

  .card-title { font-size: 13.5px; font-weight: 600; }
  .card-sub   { font-size: 11.5px; color: var(--muted); margin-top: 1px; }

  .chevron { font-size: 10px; color: var(--muted); transition: transform 0.18s; }
  .chevron.open { transform: rotate(180deg); }

  .card-body { padding: 1.2rem; display: none; }
  .card-body.open { display: block; }

  /* ── Demo box ── */
  .demo {
    background: var(--bg);
    border: 1px dashed var(--border);
    border-radius: var(--radius-sm);
    padding: 1.1rem 1.2rem;
    margin-bottom: 0.9rem;
  }

  .demo-lbl {
    font-size: 10px; font-weight: 600;
    letter-spacing: 0.09em; text-transform: uppercase;
    color: var(--muted); margin-bottom: 0.65rem;
  }

  /* ── Component overrides inside demo ── */
  .demo h1, .demo h2 {
    font-family: 'Outfit', sans-serif; font-weight: 600;
    color: var(--text); margin-bottom: 6px;
  }
  .demo h1 { font-size: 18px; }
  .demo h2 { font-size: 15px; }

  .demo label {
    display: block; font-size: 12.5px; font-weight: 500;
    color: var(--muted); margin-bottom: 5px; margin-top: 10px;
  }

  .demo input[type="text"] {
    padding: 7px 11px;
    border: 1px solid var(--border); border-radius: var(--radius-sm);
    font-family: 'Outfit', sans-serif; font-size: 13px;
    color: var(--text); background: var(--surface); outline: none;
    transition: border-color 0.15s; width: 100%; max-width: 260px;
  }

  .demo input[type="text"]:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(37,99,235,0.07);
  }

  .demo button {
    padding: 7px 16px;
    background: var(--text); color: var(--bg);
    border: none; border-radius: var(--radius-sm);
    font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500;
    cursor: pointer; transition: opacity 0.12s, transform 0.1s;
  }

  .demo button:hover  { opacity: 0.82; }
  .demo button:active { transform: scale(0.97); }

  .demo ul { list-style: none; display: flex; flex-wrap: wrap; gap: 6px; }
  .demo li {
    background: var(--surface2); border: 1px solid var(--border);
    border-radius: 20px; padding: 3px 11px;
    font-size: 12.5px; font-weight: 500;
  }

  .demo small {
    display: inline-block; margin-top: 6px;
    background: var(--amber-soft); color: var(--amber);
    border: 1px solid #FDE68A; border-radius: 20px;
    padding: 2px 10px; font-size: 11px; font-weight: 500;
  }

  .demo form { display: flex; flex-direction: column; gap: 9px; max-width: 300px; }
  .demo p[role="alert"] {
    font-size: 12.5px; color: var(--red);
    background: var(--red-soft); border: 1px solid #FECACA;
    border-radius: var(--radius-sm); padding: 6px 11px; font-weight: 500;
  }

  /* ── Counter widget ── */
  .counter-num {
    font-size: 44px; font-weight: 700; letter-spacing: -2px;
    color: var(--text); margin-bottom: 12px;
    font-variant-numeric: tabular-nums;
  }

  .counter-row { display: flex; align-items: center; gap: 8px; }

  .btn-ghost {
    padding: 7px 14px;
    background: transparent; color: var(--muted);
    border: 1px solid var(--border); border-radius: var(--radius-sm);
    font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500;
    cursor: pointer; transition: all 0.12s;
  }
  .btn-ghost:hover { background: var(--surface2); color: var(--text); }

  /* ── Chips ── */
  .chips { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 0.8rem; }

  .chip {
    font-size: 11px; font-weight: 500;
    padding: 2px 9px; border-radius: 20px; border: 1px solid;
  }

  .c-blue   { background: var(--accent-soft);  color: var(--accent);  border-color: #BFDBFE; }
  .c-green  { background: var(--green-soft);   color: var(--green);   border-color: #BBF7D0; }
  .c-amber  { background: var(--amber-soft);   color: var(--amber);   border-color: #FDE68A; }
  .c-purple { background: var(--purple-soft);  color: var(--purple);  border-color: #E9D5FF; }
  .c-red    { background: var(--red-soft);     color: var(--red);     border-color: #FECACA; }

  /* ── Code block ── */
  .code-block {
    background: #1E1E2E; border-radius: var(--radius-sm); overflow: hidden;
  }

  .code-bar {
    display: flex; align-items: center; justify-content: space-between;
    padding: 7px 14px; background: #181825;
  }

  .code-dots-row { display: flex; gap: 5px; }
  .cd { width: 8px; height: 8px; border-radius: 50%; }

  .code-fname {
    font-family: 'Fira Code', monospace;
    font-size: 11px; color: #A6ADC8;
  }

  pre {
    font-family: 'Fira Code', monospace;
    font-size: 12px; line-height: 1.75;
    color: #CDD6F4; padding: 0.9rem 1.2rem 1rem;
    overflow-x: auto; margin: 0;
  }

  @media (max-width: 700px) {
    .app-shell { grid-template-columns: 1fr; }
    .sidebar   { display: none; }
    .main      { padding: 1.25rem; }
  }
`;

/* ── Collapsible card ── */
function Card({ num, title, sub, color = 'blue', children, open: initOpen = false }) {
  const [open, setOpen] = useState(initOpen);
  return (
    <div className="card">
      <div className="card-head" onClick={() => setOpen(o => !o)}>
        <div className="card-head-left">
          <div className={`badge b-${color}`}>{num}</div>
          <div>
            <div className="card-title">{title}</div>
            <div className="card-sub">{sub}</div>
          </div>
        </div>
        <span className={`chevron${open ? ' open' : ''}`}>▼</span>
      </div>
      <div className={`card-body${open ? ' open' : ''}`}>{children}</div>
    </div>
  );
}

/* ── Code viewer ── */
function Code({ filename, children }) {
  return (
    <div className="code-block">
      <div className="code-bar">
        <div className="code-dots-row">
          <div className="cd" style={{ background: '#F38BA8' }} />
          <div className="cd" style={{ background: '#FAB387' }} />
          <div className="cd" style={{ background: '#A6E3A1' }} />
        </div>
        <span className="code-fname">{filename}</span>
        <span />
      </div>
      <pre>{children}</pre>
    </div>
  );
}

/* ── Compteur amélioré ── */
function CompteurUI() {
  const [v, setV] = useState(0);
  return (
    <>
      <div className="counter-num">{v}</div>
      <div className="counter-row">
        <button type="button" onClick={() => setV(x => x + 1)}>+ Incrémenter</button>
        {v > 0 && (
          <button type="button" className="btn-ghost" onClick={() => setV(0)}>
            Réinitialiser
          </button>
        )}
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <style>{styles}</style>
      <div className="app-shell">

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <div className="logo-icon">Rx</div>
            <div>
              <div className="logo-name">TP React</div>
              <div className="logo-sub">JSX &amp; Composition</div>
            </div>
          </div>

          <nav>
            <div className="nav-group">
              <div className="nav-group-label">Partie 1 — JSX</div>
              <button className="nav-btn active"><span className="nav-dot"/>Exploration JSX</button>
              <button className="nav-btn"><span className="nav-dot"/>Conventions</button>
            </div>
            <div className="nav-group">
              <div className="nav-group-label">Partie 2 — Composition</div>
              <button className="nav-btn"><span className="nav-dot"/>HOC avecTrace</button>
              <button className="nav-btn"><span className="nav-dot"/>Render Props</button>
            </div>
            <div className="nav-group">
              <div className="nav-group-label">Partie 3 — Tests</div>
              <button className="nav-btn"><span className="nav-dot"/>Test unitaire</button>
              <button className="nav-btn"><span className="nav-dot"/>Test intégration</button>
            </div>
            <div className="nav-group">
              <div className="nav-group-label">Exercices avancés</div>
              <button className="nav-btn"><span className="nav-dot"/>HOC horodatage</button>
              <button className="nav-btn"><span className="nav-dot"/>Render Props filtre</button>
              <button className="nav-btn"><span className="nav-dot"/>Formulaire validé</button>
            </div>
          </nav>

          <div className="sidebar-footer">
            <div className="prog-row"><span>Progression</span><span>7 / 10</span></div>
            <div className="prog-track"><div className="prog-fill" /></div>
          </div>
        </aside>

        {/* Main */}
        <main className="main">
          <div className="page-eyebrow">✦ Travail Pratique</div>
          <h1 className="page-title">JSX, Composition &amp; Tests</h1>
          <p className="page-desc">
            Maîtriser la syntaxe JSX, les patterns HOC et Render Props,
            puis écrire des tests automatisés avec React Testing Library.
          </p>

          {/* 01 JSX */}
          <Card num="01" title="Exploration JSX" sub="JSX vs React.createElement" color="blue" open={true}>
            <div className="demo">
              <div className="demo-lbl">Aperçu</div>
              <ExplorationJSX />
            </div>
            <div className="chips">
              <span className="chip c-blue">JSX</span>
              <span className="chip c-blue">Babel</span>
              <span className="chip c-blue">React.createElement</span>
            </div>
            <Code filename="ExplorationJSX.js">{`function ExplorationJSX() {
  const viaJSX = <h2 className="titre">Rendu via JSX</h2>;
  const viaJS  = React.createElement('h2',
    { className: 'titre' }, 'Rendu via JS pur');
  return <div>{viaJSX}{viaJS}</div>;
}`}</Code>
          </Card>

          {/* 02 HOC */}
          <Card num="02" title="HOC — avecTrace" sub="Higher-Order Component avec log console" color="green">
            <div className="demo">
              <div className="demo-lbl">Aperçu — ouvrir la console navigateur</div>
              <BoutonTrace libelle="Cliquer ici" />
            </div>
            <div className="chips">
              <span className="chip c-green">HOC</span>
              <span className="chip c-green">Composition</span>
              <span className="chip c-green">Props spread</span>
            </div>
            <Code filename="avecTrace.js">{`function avecTrace(Composant) {
  return function ComposantEtendu(props) {
    console.log('[Trace] Props reçues :', props);
    return <Composant {...props} />;
  };
}`}</Code>
          </Card>

          {/* 03 Render Props */}
          <Card num="03" title="Render Props — ChargeurDonnees" sub="Flexibilité via fonction prop" color="amber">
            <div className="demo">
              <div className="demo-lbl">Aperçu</div>
              <ChargeurDonnees
                afficher={(liste) => (
                  <ul>{liste.map((nom) => <li key={nom}>{nom}</li>)}</ul>
                )}
              />
            </div>
            <div className="chips">
              <span className="chip c-amber">Render Props</span>
              <span className="chip c-amber">Délégation affichage</span>
            </div>
            <Code filename="ChargeurDonnees.js">{`function ChargeurDonnees({ afficher, filtre = '' }) {
  const liste = ['Alice', 'Bob', 'Charlie'];
  const listeFiltree = filtre
    ? liste.filter(n =>
        n.toLowerCase().includes(filtre.toLowerCase()))
    : liste;
  return <div>{afficher(listeFiltree)}</div>;
}`}</Code>
          </Card>

          {/* 04 Test unitaire */}
          <Card num="04" title="Test unitaire — Salutation" sub="Vérifier l'affichage d'une prop" color="purple">
            <div className="demo">
              <div className="demo-lbl">Composant testé</div>
              <Salutation prenom="Marie" />
            </div>
            <div className="chips">
              <span className="chip c-purple">Jest</span>
              <span className="chip c-purple">Testing Library</span>
              <span className="chip c-purple">getByText</span>
            </div>
            <Code filename="Salutation.test.js">{`test('affiche le prénom passé en prop', () => {
  render(<Salutation prenom="Marie" />);
  expect(
    screen.getByText('Bienvenue, Marie !')
  ).toBeInTheDocument();
});`}</Code>
          </Card>

          {/* 05 Test intégration */}
          <Card num="05" title="Test intégration — Compteur" sub="Simuler un clic, vérifier l'état" color="red">
            <div className="demo">
              <div className="demo-lbl">Composant interactif</div>
              <CompteurUI />
            </div>
            <div className="chips">
              <span className="chip c-blue">useState</span>
              <span className="chip c-purple">fireEvent</span>
              <span className="chip c-red">Intégration</span>
            </div>
            <Code filename="Compteur.test.js">{`test('la valeur augmente après un clic', () => {
  render(<Compteur />);
  fireEvent.click(screen.getByText('Incrémenter'));
  expect(
    screen.getByText('Total : 1')
  ).toBeInTheDocument();
});`}</Code>
          </Card>

          {/* Exercice A */}
          <Card num="A" title="HOC Horodatage" sub="Exercice — afficher l'heure du dernier rendu" color="amber">
            <div className="demo">
              <div className="demo-lbl">Aperçu</div>
              <SalutationHorodatee prenom="Lucas" />
            </div>
            <Code filename="avecHorodatage.js">{`function avecHorodatage(Composant) {
  return function ComposantHorodatage(props) {
    const heure = new Date().toLocaleTimeString();
    return (
      <div>
        <Composant {...props} />
        <small>Dernier rendu : {heure}</small>
      </div>
    );
  };
}`}</Code>
          </Card>

          {/* Exercice C */}
          <Card num="C" title="Formulaire avec validation" sub="Exercice — message d'erreur si champ vide" color="red">
            <div className="demo">
              <div className="demo-lbl">Soumettre sans remplir le champ</div>
              <FormulaireContact />
            </div>
            <div className="chips">
              <span className="chip c-purple">fireEvent</span>
              <span className="chip c-red">role="alert"</span>
              <span className="chip c-blue">useState</span>
            </div>
            <Code filename="FormulaireContact.test.js">{`test("erreur si le champ est vide", () => {
  render(<FormulaireContact />);
  fireEvent.click(screen.getByText('Envoyer'));
  expect(
    screen.getByText('Le champ nom est obligatoire.')
  ).toBeInTheDocument();
});`}</Code>
          </Card>

        </main>
      </div>
    </>
  );
}
