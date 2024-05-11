import { useState, useEffect } from "react";
import Repos from "./Repos";

const MainContentRight = () => {
  const [repos, setRepo] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [reposPerPage, setReposPerPage] = useState(10);

  useEffect(() => {
    const fectchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
         " https://api.github.com/users/Remigit99/repos"
        );
        const data = await res.json();
        // console.log(data)
        setRepo(data);





        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fectchData();
  }, []);

  return (
    <div className="main__content-right">
      <div className="content__right-main">
        <h2>Repositories : {repos.length}</h2>

        <div className="repos__main">

          <Repos isloading={isloading} repos={repos} />
        </div>
      </div>
    </div>
  );
};

export default MainContentRight;
