import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className=" broder-stone-200  flex items-center justify-between  border-b-2 bg-yellow-400 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
