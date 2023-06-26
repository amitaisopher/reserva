import { FC } from "react";
import waitress from "@/assets/waitress.png";

const Logo: FC = () => {
  return (
    <>
      <img src={waitress} alt="waitress-icon" />
    </>
  );
};

export default Logo;
