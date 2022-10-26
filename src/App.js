import {Header, Sidebar, Items, PageHandler} from './components/';
import { Perifericos1, Perifericos2, GPU1} from './components/item_pages';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [content, setContent] = useState(<Perifericos1/>);
  const [pageCount, setPageCount] = useState(0);

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangeCategory = (category) => {
    setContent(category)
    setPageCount(category.length)
  }

  useEffect(()=> {
    const defaultContent = [<Perifericos1/>, <Perifericos2/>]
    setContent(defaultContent);
    setPageCount(defaultContent.length)
  }, [])

  return (
    <div className='App'>
      <Header/>
      <section className='AppBody'>
        <Sidebar OnChangeCategory={handleChangeCategory}/>
        <div className='Content'>
          <Items category={content} page={currentPage}/>
          <PageHandler pageCount={pageCount} OnChangePage={handleChangePage}/>
        </div>
      </section>
    </div>
  );
}

export default App;
