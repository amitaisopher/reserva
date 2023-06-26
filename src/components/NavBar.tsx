import { FC, useState } from "react";
import Logo from "@/components/Logo";
import { Menu, X } from "lucide-react";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => { 
    const [showMenu, setShowMenu] = useState(false)
    function toggleMenuHandler() {
        setShowMenu((prevState) => !prevState)    }
    return (
    <div className="bg-white">
      <div className="flex justify-between w-[92%] mx-auto">
        <div className="w-16">
          <Logo />
        </div>
        <div className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5 ${showMenu ? 'top-[9%]' : 'top-[-100%]'}`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500" href="">
                Product
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="">
                Solution
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="">
                Resources
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="">
                Developers
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-slate-600 text-white px-5 py-2 rounded-full hover:bg-slate-800">
            Sign in
          </button>
          {showMenu ? <X onClick={toggleMenuHandler} size={32}/> : <Menu onClick={toggleMenuHandler} className="cursor-pointer md:hidden" size={32}/>}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
