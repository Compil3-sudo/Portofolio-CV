import { SocialIcon } from "react-social-icons";
import socials from "./socials";

const SocialIcons = () => {
  return (
    <>
      {socials.map((social) => (
        <SocialIcon
          key={social.network}
          network={social.network}
          url={social.url}
          style={{ marginLeft: "10px", marginRight: "10px" }}
          bgColor="#fefefe"
          fgColor="#121212"
        />
      ))}
    </>
  );
};

export default SocialIcons;
