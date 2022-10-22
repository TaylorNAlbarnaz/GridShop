import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarItem(props) {
  return (
    <>
      <div
        className = "aside__item"
        style = {props.selected && {backgroundColor: '#524F4F', color: 'white'}}
      >
        <FontAwesomeIcon icon={faCircle} style={props.selected ? {} : {color: '#595959'}}/>
        <p>{props.name}</p>
        <div className="aside__overlay" />
      </div>
    </>
  );
}

export default SidebarItem;
