import { FC } from "react";

interface NavBarOptionsProps {
  options: string[];
}

const NavBarOptions: FC<NavBarOptionsProps> = ({ options }) => {
  return (
    <>
      <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
        {options.map((option) => {
          return (
            <li key={option}>
              <a className="hover:text-gray-500" href="">
                {option}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavBarOptions;
