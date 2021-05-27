import React, { useContext } from "react";
// import { userContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";

function Sidebar({
  setShowSignup,
  handleShowNewPostPopup,
  showActiveTab,
  setShowActiveTab,
}) {
  const { user, setUser } = useContext(AuthContext); //currentUser, setCurrentUser?

  return (
    <div className="sidebar">
      <div className="search-create__container">
        <input type="text" className="searchbar" placeholder="search" />
        <div className="arrowBtn">
          {user ? (
            <button
              onClick={() => {
                setShowActiveTab(true);
                handleShowNewPostPopup();
              }}
            >
              Submit a new link
            </button>
          ) : (
            <button onClick={() => setShowSignup(true)}>
              Submit a new link
            </button>
          )}
        </div>
        <div className="arrowBtn">
          {user ? (
            <button
              onClick={() => {
                setShowActiveTab(false);
                handleShowNewPostPopup();
              }}
            >
              Submit a new text post
            </button>
          ) : (
            <button onClick={() => setShowSignup(true)}>
              Submit a new text post
            </button>
          )}
        </div>
        <div
          className="clonnit-premium__container"
          onClick={() => alert("coming soon")}
        >
          <div>
            <h3>
              clonnit <span>premium</span>
            </h3>
            <p>
              Get an ad-free experience with special benefits and directly
              support Clonnit
            </p>
            <button>Get Clonnit Premium</button>
          </div>
        </div>
        <div className="arrowBtn">
          {user ? (
            <button onClick={() => alert("coming soon")}>
              Create your own subclonnit
            </button>
          ) : (
            <button onClick={() => setShowSignup(true)}>
              Create your own subclonnit
            </button>
          )}
        </div>
        <div className="recently-viewed__container">
          <p>RECENTLY VIEWED LINKS</p>
          <div className="recently-viewed">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
