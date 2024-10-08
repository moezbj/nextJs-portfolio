import NavLinks from "../ui/NavLinks";
import logo from "../../../public/sa.gif";
import Image from 'next/image'
const Header = () => {
  return (
    <header className="p-8 text-text flex justify-between items-center">
      <Image className="w-24 h-20" src={logo} alt="logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
