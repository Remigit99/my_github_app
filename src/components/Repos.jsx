// import { useState } from "react";

import { GoRepoForked } from "react-icons/go";
import { FaRegStar } from "react-icons/fa6";

const Repos = ({ repos, isloading }) => {
  // const [repos, setRepo] = useState([]);
  // const [isloading, setIsLoading] = useState(false);

  if (isloading) {
    return <h1 className="fetching">Fetching Repositories...</h1>;
  }

  return (
    <div className="repos">
      {repos.map(
        ({
          id,
          name,
          html_url,
          private: newPrivate,
          description,
          language,
          stargazers_count,
          forks_count,
        }) => (
          <article key={id} className="repo">
            <div className="repo__header">
              <h4>
                <a href={html_url}>{name}</a>
              </h4>
              <div className="repo__visibility">
                {/* Public or Private */}
                <span>{newPrivate ? <h6>PRIVATE</h6> : <h6>PUBLIC</h6>}</span>
              </div>
            </div>

            <div className="repo__desc">
              <p>
                {description
                  ? description
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sint."}
              </p>
            </div>

            <div className="repo_more-info">
              <p>{language}</p>
              <p>
                <FaRegStar />

                {stargazers_count}
              </p>

              <p>
                <GoRepoForked />

                {forks_count}
              </p>
            </div>
          </article>
        )
      )}
    </div>
  );
};

export default Repos;
