import { useState } from 'react';

function FormulaireContact() {
  const [nom, setNom] = useState('');
  const [erreur, setErreur] = useState('');

  function handleSoumettre(e) {
    e.preventDefault();
    if (!nom.trim()) {
      setErreur('Le champ nom est obligatoire.');
    } else {
      setErreur('');
      alert(`Formulaire envoyé pour : ${nom}`);
    }
  }

  return (
    <form onSubmit={handleSoumettre}>
      <div>
        <label htmlFor="nom">Nom :</label>
        <input
          id="nom"
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      {erreur && <p role="alert" style={{ color: 'red' }}>{erreur}</p>}
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormulaireContact;
