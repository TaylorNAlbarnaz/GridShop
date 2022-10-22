import {Header, Sidebar, Items, PageHandler} from './components/';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header/>
      <section className='AppBody'>
        <Sidebar />
        <div className='Content'>
          <Items />
          <PageHandler />
        </div>
      </section>
    </div>
  );
}

export default App;
