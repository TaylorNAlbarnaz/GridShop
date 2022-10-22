import SidebarItem from "./SidebarItem";

function Sidebar(props) {
  return (
    <aside>
      <SidebarItem onClick={() => console.log("Pika")} name='Periféricos' selected/>
      <SidebarItem name='Processadores'/>
      <SidebarItem name='Placas de Vídeo'/>
      <SidebarItem name='Monitores'/>
    </aside>
  );
}

export default Sidebar;
