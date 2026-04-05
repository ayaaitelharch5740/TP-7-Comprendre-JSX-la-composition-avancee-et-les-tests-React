function ChargeurDonnees({ afficher, filtre = '' }) {
  const liste = ['Alice', 'Bob', 'Charlie'];

  const listeFiltree = filtre
    ? liste.filter((nom) =>
        nom.toLowerCase().includes(filtre.toLowerCase())
      )
    : liste;

  return <div>{afficher(listeFiltree)}</div>;
}

export default ChargeurDonnees;
