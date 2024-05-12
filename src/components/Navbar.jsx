import { useState, useEffect } from "react";

import { CiMenuFries } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";

import UserAvatar from "./UserAvatar";


const Navbar = () => {

  // const [repos, setRepo] = useState([]);
  const [searchinput, setSearchInput] = useState("");


  // useEffect(() => {
  //   const fectchData = async () => {
  //     // setIsLoading(true);
  //     try {
  //       const res = await fetch(
  //         " https://api.github.com/users/Remigit99/repos"
  //       );
  //       const data = await res.json();
  //       // console.log(data)
  //       setRepo(data);

  //       // setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fectchData();
  // }, []);

  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__container-left">
          <div className="nav__menu-icon">
            <CiMenuFries className="nav__icon" />
          </div>
          <div className="nav__github-logo">
            <IoLogoGithub className="nav__icon github__logo" />
          </div>

          <h3>Dashboard</h3>
        </div>

        <div className="nav__container-right">
          <div className="search__box">
            <IoSearchOutline className="nav__icon" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Type to search"
              value={searchinput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>

          <div className="create_new-repo">
            <BiPlus className="nav__icon" />
            <IoIosArrowDown className="nav__icon  arrow__down" />
          </div>

          <div className="notification">
            <FaRegBell className="nav__icon" />
          </div>

          <UserAvatar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
