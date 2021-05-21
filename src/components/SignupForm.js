import React, { useState } from "react";

function SignupForm({ showSignup, showLogin, setShowSignup, setShowLogin }) {
  const [showNextpage, setShowNextpage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleShowLoginForm = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  return (
    // <div className="formBackground">
    <div className="signup-form__container">
      <strong
        onClick={() => {
          setShowSignup(false);
        }}
      >
        X
      </strong>
      <div>
        <h3>Sign up to get your own personalized Clonnit experience!</h3>
        <p>
          By having a Clonnit account, you can join, vote, and comment on all
          your favorite Clonnit content. Sign up in just seconds.
        </p>
      </div>
      {!showNextpage ? (
        <div>
          <form>
            <label>Enter Email</label>
            <input type="email" placeholder="Enter Email"></input>
            <button
              onClick={() => {
                setShowNextpage(true);
              }}
            >
              Next
            </button>
          </form>
          <p>
            Already a User? <span onClick={handleShowLoginForm}>Log In</span>
          </p>
        </div>
      ) : (
        <div>
          <form>
            <label>Choose username</label>
            <input type="text" placeholder="username"></input>
            <label>set password</label>
            <input type="password" placeholder="password"></input>
            <label>confirm password</label>
            <input type="password" placeholder="confirm password"></input>
            <div className="modal-button__container">
              <button
                onClick={() => {
                  setShowNextpage(false);
                }}
              >
                Back
              </button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
    // </div>
  );
}

export default SignupForm;
