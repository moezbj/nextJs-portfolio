import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      display:"flex",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="flex">
      <Link
        className="icon"
        style={styles.icon}
        href="https://github.com/mdyeates"
      >
        <IoLogoGithub size={30}  className="hover:bg-green" />
      </Link>
      <Link
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/mdyeates/"
      >
        <FaLinkedin size={30} className="hover:bg-green" />
      </Link>
    </div>
  );
};

export default SocialIcons;
