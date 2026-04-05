function avecHorodatage(Composant) {
  return function ComposantHorodatage(props) {
    const heure = new Date().toLocaleTimeString();
    return (
      <div>
        <Composant {...props} />
        <small style={{ color: '#888', fontSize: '0.75rem' }}>
          Dernier rendu : {heure}
        </small>
      </div>
    );
  };
}

export default avecHorodatage;
