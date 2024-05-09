// import Link from "react-router-dom";

import { PiBookBookmark } from "react-icons/pi";
import UserAvatar from "./UserAvatar";

const repoLeft = [
  {
    id: 1,
    repoName: "helby_nextjs_app",
  },
  {
    id: 2,
    repoName: "auth-mern",
  },
  {
    id: 3,
    repoName: "RemShop",
  },
  {
    id: 4,
    repoName: "RemsMoviePlus",
  },
  {
    id: 5,
    repoName: "SERIES_APIs",
  },
  {
    id: 6,
    repoName: "RemBlog",
  },
  {
    id: 7,
    repoName: "MyNote-App",
  },
];

const MainContentLeft = () => {
  return (
    <div className="main__content-left">
      <div className="content__left-header">
        <div className="left__header-title">
          <h4>Top Repositories</h4>

          {/* need to change to link */}
          <button className="left__newrepo-btn">
            <PiBookBookmark className="icon" />
            <h5>New</h5>
          </button>
        </div>

        <div className="find__repo">
          <input
            type="text"
            name="find"
            id="find"
            placeholder="Find a repository"
          />
        </div>
      </div>

      <div className="content__left-repolinks">
        {repoLeft.map(({ id, repoName }) => (
          <article className="repo__links" key={id}>
            <UserAvatar />
            <div className="repo__link">
              <p>Remigit99/{repoName}</p>
            </div>
          </article>
        ))}
      </div>

      {/* should be a link */}
      <div className="show__more">
        <small>Show more</small>
      </div>
    </div>
  );
};

export default MainContentLeft;
