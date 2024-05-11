import { useState, useEffect } from "react";

import { CiLocationOn } from "react-icons/ci";
import { RiShareBoxLine } from "react-icons/ri";
import { IoMdFolderOpen } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";



const MyGithubBio = () => {
  const [bio, setBio] = useState({});
  //   const bioArray = Object.entries(bio);
  //   console.log( bioArray);

  const bioEmptyArray = [];
  // console.log(bioEmptyArray);
  bioEmptyArray.push(bio);

  //   console.log(bioArray)

  //   const keysTorender = [
  //         "id, avatar_url", "html_url", "name", "location", "public_repo", "repos_url"
  //   ]

  //   const filteredBioArray = bioArray.filter(([key, value]) => keysTorender.includes(key))

  useEffect(() => {
    const fetchBio = async () => {
      const bioApi = await fetch("https://api.github.com/users/Remigit99");

      const bioData = await bioApi.json();
      // console.log(bioData);
      setBio(bioData);
    };

    fetchBio();
  }, []);
  return (
    <div className="content__left-main">
      {
        // id, avatar_url, html_url, name, location, public_repo, repos_url
        bioEmptyArray.map((info) => (
          <div key={info.id} className= "user__detail">
            <div className="avatar__img">
              <img src={info.avatar_url} alt="avatar_pic" />
            </div>
            <h2>{info.name}</h2>

            <p> Full Stack Developer | CyberSecurity Enthusiast</p>

            <div className="location">
              <CiLocationOn />
              <p>{info.location}</p>
            </div>

            <div className="github__link">
              <a href={info.html_url} target="_blank">
                <RiShareBoxLine />
                Github
              </a>
            </div>

            <div className="portfolio">
              <a href="https://remi-portfolio-js.netlify.app/" target="_blank">
                <IoMdFolderOpen />
                remi-portfolio-js.netlify.app
              </a>
            </div>

            <div className="resume">
              <a href={info.html_url} download>
                <CiFileOn />
                My Resume
              </a>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default MyGithubBio;
