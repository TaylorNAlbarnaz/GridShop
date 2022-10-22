function Items(props) {
  return (
    <>
      <div className='Items_container'>
        {props.children}
      </div>
    </>
  );
}

export default Items;