import { FC, useState } from "react";
import Logo from "@/components/Logo";
import { Menu, X } from "lucide-react";
import NavBarOptions from "./NavBarOptions";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenuHandler() {
    setShowMenu((prevState) => !prevState);
  }
  return (
    <div className="bg-white nav-bar relative h-[65px]">
      <div className="flex justify-between w-[92%] mx-auto">
        <div className="w-16">
          <Logo />
        </div>
        <div
          className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5 ${
            showMenu ? "top-[65px]" : "top-[-425px]"
          }`}
        >
          <NavBarOptions options={['Product', 'Solution', 'Resources', 'Developers']}/>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-slate-600 text-white px-5 py-2 rounded-full hover:bg-slate-800">
            Sign in
          </button>
          {showMenu ? (
            <X onClick={toggleMenuHandler} size={32} />
          ) : (
            <Menu
              onClick={toggleMenuHandler}
              className="cursor-pointer md:hidden"
              size={32}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
