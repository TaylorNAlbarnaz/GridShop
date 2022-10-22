function Items(props) {
  return (
    <>
      <div className='Items__container'>
        {props.children}
      </div>
    </>
  );
}

export default Items;