import {Header, Sidebar, Items, PageHandler} from './components/';
import { Perifericos1, Perifericos2} from './components/item_pages';
import './App.css';
import { useState } from 'react';

function App() {
  let content = [<Perifericos1/>, <Perifericos2/>]
  let pageCount = content.length;
  const [currentPage, setCurrentPage] = useState(0);

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className='App'>
      <Header/>
      <section className='AppBody'>
        <Sidebar />
        <div className='Content'>
          <Items category={content} page={currentPage}/>
          <PageHandler pageCount={pageCount} OnChangePage={handleChangePage}/>
        </div>
      </section>
    </div>
  );
}

export default App;
