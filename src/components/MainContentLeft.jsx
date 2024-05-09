// import Link from "react-router-dom";

import { PiBookBookmark } from "react-icons/pi";

const MainContentLeft = () => {
  return (
    <div className="main__content-left">
      <div className="content__left-header">
        <div className="left__header-title">
          <h4>Top Repositories</h4>

          {/* need to change to link */}
          <button className="left__newrepo-btn">
            <PiBookBookmark  className="icon"/>
            <h5>New</h5>
          </button>
        </div>

        <div className="find__repo">
            <input type="text" name="find" id="find" placeholder="Find a repository" />
          </div>
      </div>
    </div>
  );
};

export default MainContentLeft;
