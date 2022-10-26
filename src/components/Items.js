function Items(props) {

  function getComponent() {
      return props.category[props.page];
  }

  return (
    <>
      {getComponent()}
    </>
  );
}

export default Items;