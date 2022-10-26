import {Header, Sidebar, Items, PageHandler} from './components/';
import { Perifericos1, Perifericos2, GPU1} from './components/item_pages';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  //let content = [<Perifericos1/>, <Perifericos2/>]
  let pageCount = 2;
  const [currentPage, setCurrentPage] = useState(0);
  const [content, setContent] = useState(<Perifericos1/>);

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangeCategory = (category) => {
    const newCategory = [...category]
    setContent(newCategory)
  }

  useEffect(()=> {
    setContent([<Perifericos1/>, <Perifericos2/>]);
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
