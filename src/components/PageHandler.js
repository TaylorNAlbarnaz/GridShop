function PageHandler(props) {
  return (
    <>
      <div className='Page__handler'>
        <button>Anterior</button>
        <p className="Page__counter"><span>1</span> de 8</p>
        <button>Próxima</button>
      </div>
    </>
  );
}

export default PageHandler;