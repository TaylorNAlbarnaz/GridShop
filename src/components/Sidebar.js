import { useState } from "react";
import SidebarItem from "./SidebarItem";

function Sidebar(props) {
  const [current, setCurrent] = useState(0);

  function changeSelected(id) {
    setCurrent(id)
    const items = document.getElementsByClassName('aside__item');
  }
  return (
    <aside>
      <SidebarItem id={0} onClick={()=>changeSelected(0)} name='Periféricos' selected={current}/>
      <SidebarItem id={1} onClick={()=>changeSelected(1)} name='Processadores' selected={current}/>
      <SidebarItem id={2} onClick={()=>changeSelected(2)} name='Placas de Vídeo' selected={current}/>
      <SidebarItem id={3} onClick={()=>changeSelected(3)} name='Monitores' selected={current}/>
    </aside>
  );
}

export default Sidebar;
