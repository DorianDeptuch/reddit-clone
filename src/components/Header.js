import React, { useState, useContext } from "react";
// import { userContext } from "../App";
import { userContext } from "../context/UserContext";

function Header() {
  const { user, setUser } = useContext(userContext);
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
                onClick={() => {
                  setUser(null);
                }}
              >
                Logout
              </p>
            </div>
          ) : (
            <div className="logged-out__account">
              <p>Sign In</p>
              <p
                onClick={() => {
                  setUser("dor");
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
