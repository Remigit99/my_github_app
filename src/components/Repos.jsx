// import { useState } from "react";




const Repos = ({ repos, isloading }) => {

  // const [repos, setRepo] = useState([]);
  // const [isloading, setIsLoading] = useState(false);

  if (isloading) {
    return <h1 className="fetching">Fetching Repositories...</h1>;
  }

  return (
    <div className="repos">
      {repos.map(({ id, name }) => (
        <article key={id} className="repo">
          <div className="repo__header">
          <h4>{name}</h4>
          <div className="repo__visibility">
            {/* Public or Private */}
            <span>Public</span>
          </div>

          </div>

          <div className="repo__desc">
            <p></p>
          </div>

          <div className="repo_detai">
            <p>language</p>
            <p>star</p>
            <p>forks</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Repos;
