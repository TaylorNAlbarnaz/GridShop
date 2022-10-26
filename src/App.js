import {Header, Sidebar, Items, PageHandler} from './components/';
import { Perifericos1, Perifericos2} from './components/item_pages';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [content, setContent] = useState(<Perifericos1/>);
  const [pageCount, setPageCount] = useState(0);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  }

  const handleChangeCategory = (category) => {
    setContent(category);
    setPageCount(category.length);
    setCurrentPage(0);
  }

  useEffect(()=> {
    const defaultContent = [<Perifericos1/>, <Perifericos2/>]
    setContent(defaultContent);
    setCurrentPage(0);
    setPageCount(defaultContent.length);
  }, [])

  function nextPage() {
    setCurrentPage(currentPage < pageCount-1 ? currentPage+1 : currentPage)
  }

  function previousPage() {
    setCurrentPage(currentPage > 0 ? currentPage-1 : currentPage)
  }

  return (
    <div className='App'>
      <Header/>
      <section className='AppBody'>
        <Sidebar OnChangeCategory={handleChangeCategory}/>
        <div className='Content'>
          <Items category={content} page={currentPage}/>
          <PageHandler onNext={()=>nextPage} onPrevious={()=>previousPage} OnChangePage={handleChangePage} page={currentPage+1} pageCount={pageCount}/>
        </div>
      </section>
    </div>
  );
}

export default App;
