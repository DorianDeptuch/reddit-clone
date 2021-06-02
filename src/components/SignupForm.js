import React, { useState, useRef } from "react";
import { auth } from "../firebase";
// import { useAuth } from "../context/AuthContext";

function SignupForm({
  showSignup,
  showLogin,
  setShowSignup,
  setShowLogin,
  user,
  setUser,
}) {
  const [showNextpage, setShowNextpage] = useState(false);
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const formRef = useRef();
  // const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;

    try {
      setError("");
      setLoading(true);
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          return auth.currentUser.updateProfile({
            displayName: username,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      setUser(auth.currentUser.displayName);
      formRef.current.reset();
      setShowSignup(false);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

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
          {/* {JSON.stringify(currentUser)} */}
          {/* {currentUser.email} */}
          <form>
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
          <h2 style={{ color: "red" }}>{error}</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            {/* <form> */}
            <label>Enter Email</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter Email"
              required
            ></input>
            <label>Choose username</label>
            <input
              ref={usernameRef}
              type="text"
              placeholder="username"
              required
            ></input>
            <label>set password</label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="password"
              required
            ></input>
            <label>confirm password</label>
            <input
              ref={passwordConfirmRef}
              type="password"
              placeholder="confirm password"
              required
            ></input>
            <div className="modal-button__container">
              <button
                onClick={() => {
                  setShowNextpage(false);
                }}
              >
                Back
              </button>
              <button type="submit" disabled={loading}>
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
    // </div>
  );
}

export default SignupForm;
