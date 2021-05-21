import React from "react";

function LoginForm({ showSignup, showLogin, setShowSignup, setShowLogin }) {
  const handleShowSignupForm = () => {
    setShowLogin(false);
    setShowSignup(true);
  };
  return (
    <div className="login-form__container">
      <strong
        onClick={() => {
          setShowLogin(false);
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
      <div>
        <form>
          <label>Log In</label>
          <input type="text" placeholder="username"></input>
          <input type="password" placeholder="password"></input>
          <button className="submit">Log In</button>
        </form>
        <p>
          Don't have an account?{" "}
          <span onClick={handleShowSignupForm}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
