function avecTrace(Composant) {
  return function ComposantEtendu(props) {
    console.log('[Trace] Props reçues :', props);
    return <Composant {...props} />;
  };
}

export default avecTrace;
