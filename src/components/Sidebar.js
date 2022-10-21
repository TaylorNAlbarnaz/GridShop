import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  return (
    <>
      <aside>
        <div className="aside__item">
          <FontAwesomeIcon icon={faCircle} />
          <span>Periféricos</span>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
