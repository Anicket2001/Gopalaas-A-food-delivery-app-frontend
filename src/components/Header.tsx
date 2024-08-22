import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import Logo  from "../assets/Gopalaas_logo1.png"

const Header = () => {
   return (
    <>
     <div className="border-b-2 border-b-yellow-500 py-6">
    <div className="container mx-auto flex justify-between items-center">
      <Link
        to="/"
        // className="text-3xl font-bold tracking-tight text-yellow-500"
      >
        <img src={Logo} className="h-12 m-0 p-0 tracking-tight md:h-20"/>
      </Link>
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <MainNav />
      </div>
    </div>
  </div>
    </>
   );
};

export default Header;