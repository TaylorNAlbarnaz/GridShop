import { useState } from "react";

function PageHandler() {
  const [page, setPage] = useState(1)
  const maxPage = 8;

  return (
    <div className='Page__handler'>
      <button onClick={()=> setPage(page > 1 ? page-1 : page)}>Anterior</button>
      <p className="Page__counter"><span>{page}</span> de {maxPage}</p>
      <button onClick={()=> setPage(page < maxPage ? page+1 : page)}>Próxima</button>
    </div>
  );
}

export default PageHandler;