import React, { useState, useRef } from "react";
// import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";

function LoginForm({ setShowSignup, setShowLogin, setUser }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();
  // const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setError("");
      setLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
      setUser(auth.currentUser.displayName);
      formRef.current.reset();
      setShowLogin(false);
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

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
        {/* <form> */}
        <form ref={formRef} onSubmit={handleSubmit}>
          <label>Log In</label>
          <h2 style={{ color: "red" }}>{error}</h2>
          <input ref={emailRef} type="email" placeholder="email"></input>
          <input
            ref={passwordRef}
            type="password"
            placeholder="password"
          ></input>
          <button type="submit" className="submit">
            Log In
          </button>
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
