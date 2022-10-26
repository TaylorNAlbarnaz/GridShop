import {Header, Sidebar, Items, PageHandler} from './components/';
import { Perifericos1, Perifericos2} from './components/item_pages';
import './App.css';

function App() {
  const content = [<Perifericos1/>, <Perifericos2/>]

  return (
    <div className='App'>
      <Header/>
      <section className='AppBody'>
        <Sidebar />
        <div className='Content'>
          <Items category={content} page='0'/>
          <PageHandler />
        </div>
      </section>
    </div>
  );
}

export default App;
