import {Header, Sidebar, SidebarItem} from './components/';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar>
        <SidebarItem name='Periféricos' selected/>
        <SidebarItem name='Processadores'/>
        <SidebarItem name='Placas de Vídeo'/>
        <SidebarItem name='Monitores'/>
      </Sidebar>
    </div>
  );
}

export default App;
