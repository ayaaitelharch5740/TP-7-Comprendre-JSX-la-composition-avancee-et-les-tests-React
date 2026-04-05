import React from 'react';

function ExplorationJSX() {
  // Syntaxe JSX (lisible par le développeur)
  const viaJSX = <h2 className="titre">Rendu via JSX</h2>;

  // Équivalent compilé par Babel
  const viaJS = React.createElement(
    'h2',
    { className: 'titre' },
    'Rendu via JavaScript pur'
  );

  return (
    <div>
      {viaJSX}
      {viaJS}
      <div style={{ marginTop: '1rem' }}>
        <label htmlFor="prenom">Votre prénom :</label>
        <input id="prenom" type="text" className="champ-texte" />
      </div>
    </div>
  );
}

export default ExplorationJSX;
