import { useState, useEffect } from "react";
import Repos from "./Repos";
import Pagination from "./Pagination";

const MainContentRight = () => {
  const [repos, setRepo] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(6);


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

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
const currentRepos = repos.slice(indexOfFirstRepo - indexOfLastRepo);


const handlePagination = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="main__content-right">
      <div className="content__right-main">
        <h2>Repositories : {repos.length}</h2>

        <div className="repos__main">
          <Repos isloading={isloading} repos={currentRepos} />

          <Pagination
            handlePagination={handlePagination}
            reposPerPage={reposPerPage}
            length={repos.length}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContentRight;
