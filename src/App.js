import {Header, Sidebar, SidebarItem, Item, Items, PageHandler} from './components/';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header/>
      <section className='AppBody'>
        <Sidebar>
          <SidebarItem name='Periféricos' selected/>
          <SidebarItem name='Processadores'/>
          <SidebarItem name='Placas de Vídeo'/>
          <SidebarItem name='Monitores'/>
        </Sidebar>
        <div className='Content'>
          <Items>
            <Item img="https://www.pngmart.com/files/16/Neon-Gaming-Keyboard-PNG-Photos.png" price="600,00"/>
            <Item img="https://www.pngmart.com/files/16/Neon-Gaming-Keyboard-PNG-Photos.png" price="600,00"/>
            <Item img="https://www.pngmart.com/files/16/Neon-Gaming-Keyboard-PNG-Photos.png" price="600,00"/>
          </Items>

          <PageHandler/>
        </div>
      </section>
    </div>
  );
}

export default App;
