import { useState } from 'react';

function Compteur() {
  const [valeur, setValeur] = useState(0);

  return (
    <div>
      <p>Total : {valeur}</p>
      <button type="button" onClick={() => setValeur(valeur + 1)}>
        Incrémenter
      </button>
    </div>
  );
}

export default Compteur;
