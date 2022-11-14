import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
function NavBarSmallContentLink(props) {
  return (
    <Link
      to={props.link}
      //   className="w-full"
      onClick={props.navStateSmallChanger}
    >
      <div className="flex items-center justify-evenly">
        <div className="text-4xl overflow-hidden w-12 h-12 rounded-full">
          <AiOutlineHome />
        </div>
        <h1 className="text-4xl">{props.content}</h1>
      </div>
    </Link>
  );
}
export default NavBarSmallContentLink;