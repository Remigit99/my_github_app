import { CiMenuFries } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";

import AvatarImg from '../assets/avatar_img.jpg'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__container-left">
          <div className="nav__menu-icon">
            <CiMenuFries className = "nav__icon" />
          </div>
          <div className="nav__github-logo">
            <IoLogoGithub className = "nav__icon github__logo" />
          </div>

          <h3>Dashboard</h3>
        </div>

        <div className="nav__container-right">
          <div className="search__box">
            <IoSearchOutline className = "nav__icon" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Type / to search"
             />
          </div>

          <div className="create_new-repo">
            <BiPlus className = "nav__icon" />
            <IoIosArrowDown className = "nav__icon  arrow__down" />
          </div>

          <div className="notification">
            <FaRegBell className = "nav__icon" />
          </div>

          <div className="profile__avatar">
            <img src={AvatarImg} alt="Avatar_image" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
