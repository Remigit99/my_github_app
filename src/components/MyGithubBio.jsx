import { useState, useEffect } from "react";

const MyGithubBio = () => {
  const [bio, setBio] = useState({});
  const bioArray = Object.entries(bio);
  console.log( bioArray);

  const keysTorender = [
        "id, avatar_url", "html_url", "name", "location", "public_repo", "repos_url"
  ]

  const filteredBioArray = bioArray.filter(([key, value]) => keysTorender.includes(key))

  useEffect(() => {
    const fetchBio = async () => {
      const bioApi = await fetch("https://api.github.com/users/Remigit99");

      const bioData = await bioApi.json();
      console.log(bioData);
      setBio(bioData);
    };

    fetchBio();
  }, []);
  return (
    <div>
      {
        // id, avatar_url, html_url, name, location, public_repo, repos_url
        filteredBioArray.map(([key, value]) => (
          <div key={key}>
            <h2 key={key}>{value}</h2>
            {/* <p>{location}</p> */}
          </div>
        ))
      }
    </div>
  );
};

export default MyGithubBio;
