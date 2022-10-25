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
      <SidebarItem id={0} onClick={()=>changeSelected(0)} name='Processador' selected={current}/>
      <SidebarItem id={1} onClick={()=>changeSelected(1)} name='Placa de Vídeo' selected={current}/>
      <SidebarItem id={2} onClick={()=>changeSelected(2)} name='Placa Mãe' selected={current}/>
      <SidebarItem id={3} onClick={()=>changeSelected(3)} name='Memória' selected={current}/>
      <SidebarItem id={4} onClick={()=>changeSelected(4)} name='Disco Rígido' selected={current}/>
      <SidebarItem id={5} onClick={()=>changeSelected(5)} name='Fonte' selected={current}/>
      <SidebarItem id={6} onClick={()=>changeSelected(6)} name='Monitor' selected={current}/>
      <SidebarItem id={7} onClick={()=>changeSelected(7)} name='Periféricos' selected={current}/>
    </aside>
  );
}

export default Sidebar;
