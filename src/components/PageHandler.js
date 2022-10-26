import { useState } from "react";

function PageHandler(props) {
  const [page, setPage] = useState(props.page+1);

  function handlePage(pg) {
    setPage(pg);
    props.OnChangePage(pg-1)
  }

  return (
    <div className='Page__handler'>
      <button onClick={props.onPrevious()}>Anterior</button>
      <p className="Page__counter"><span>{props.page}</span> de {props.pageCount}</p>
      <button onClick={props.onNext()}>Próxima</button>
    </div>
  );
}

export default PageHandler;