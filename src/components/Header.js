import React, { useState, useContext } from "react";
// import { userContext } from "../context/UserContext";
// import { useAuth } from "../context/AuthContext";
import { userContext } from "../context/UserContext";
import { auth } from "../firebase";

function Header({ setShowSignup, setShowLogin, user, setUser }) {
  // const { user, setUser } = useContext(AuthContext); //currentUser, setCurrentUser?
  // const { user, setUser } = useContext(userContext); //currentUser, setCurrentUser?
  // const { logout, currentUser } = useAuth();
  // const [user, setUser] = useState(currentUser.email ?? "");
  const [error, setError] = useState("");

  async function handleLogout(e) {
    e.preventDefault();

    setError("");
    try {
      await auth.signOut();
      setUser(null);
    } catch (err) {
      alert(err);
    }
  }

  // const currentUser = useContext(AuthContext);
  // const { currentUser } = useAuth();
  return (
    <div className="header">
      <div className="console-account__container">
        <div className="console">
          <p>MY SUBCLONNITS</p>
          <p>HOME</p>
          <p>POPULAR</p>
          <p>ALL</p>
          <p>RANDOM</p>
        </div>
        <div className="account">
          {user ? (
            <div className="logged-in__account">
              <p>{user}</p>
              <p>(123)</p>
              <i className="fas fa-cog"></i>
              <p
                // onClick={() => {
                //   setUser(null);
                // }}
                onClick={handleLogout}
              >
                Logout
              </p>
            </div>
          ) : (
            <div className="logged-out__account">
              <p
                onClick={() => {
                  setShowSignup((prev) => !prev);
                }}
              >
                Sign Up
              </p>
              <p
                // onClick={() => {
                //   setUser("dor");
                // }}
                onClick={() => {
                  setShowLogin((prev) => !prev);
                }}
              >
                Log In
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="home-sort__container">
        <div>
          <h1 className="home">clonnit</h1>
        </div>
        <div className="sort">
          <div>Best</div>
          <div>Hot</div>
          <div>New</div>
          <div>Rising</div>
          <div>Top</div>
          <div>Controversial</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
