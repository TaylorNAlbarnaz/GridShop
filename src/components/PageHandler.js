import { useState } from "react";

function PageHandler(props) {
  const [page, setPage] = useState(1);
  const maxPage = props.pageCount;

  function handlePage(pg) {
    setPage(pg);
    props.OnChangePage(pg-1)
  }

  return (
    <div className='Page__handler'>
      <button onClick={()=> handlePage(page > 1 ? page-1 : page)}>Anterior</button>
      <p className="Page__counter"><span>{page}</span> de {maxPage}</p>
      <button onClick={()=> handlePage(page < maxPage ? page+1 : page)}>Próxima</button>
    </div>
  );
}

export default PageHandler;