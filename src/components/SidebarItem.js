import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarItem(props) {
  return (
    <>
      <div className="aside__item">
        <FontAwesomeIcon icon={faCircle} />
        <p>{props.name}</p>
      </div>
    </>
  );
}

export default SidebarItem;
