import React, { useState, useEffect, createContext } from "react";
import "./css/main.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Post from "./components/Post";
import NewPostPopup from "./components/NewPostPopup";
import { userContext } from "./context/UserContext";

// export const userContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showNewPostPopup, setShowNewPostPopup] = useState(false);
  const [postArray, setPostArray] = useState([]);
  const [posts, setPosts] = useState([]);
  const handleShowNewPostPopup = () => {
    setShowNewPostPopup(!showNewPostPopup);
  };
  // const handleUpdatePosts = (title, author, imgSrc, urlSrc, textContent) => {
  //   return postArray.map((item) => (
  //     <Post
  //       title={title}
  //       author={author}
  //       imgSrc={imgSrc}
  //       urlSrc={urlSrc}
  //       textContent={textContent}
  //     />
  //   ));
  // };

  useEffect(() => {
    if (postArray.length > 0) {
      // handleUpdatePosts(
      //   postArray[0].title,
      //   postArray[0].author,
      //   postArray[0].imgSrc,
      //   postArray[0].urlSrc,
      //   postArray[0].textContent
      // );
      console.log("post Array is: ", postArray);
      // const mapped = postArray.map(
      //   (
      //     item //item is never used???
      //   ) => (
      //     <Post
      //       title={postArray[0].title}
      //       author={postArray[0].author}
      //       imgSrc={postArray[0].imgSrc}
      //       urlSrc={postArray[0].urlSrc}
      //       textContent={postArray[0].textContent}
      //     />
      //   )
      // );
      // setPosts((prev) => [mapped, ...prev]);
    }
    console.log("re-rendering");
  }, [postArray]);
  return (
    <userContext.Provider value={{ user, setUser }}>
      <div>
        <Header />
        <Sidebar
          setShowSignup={setShowSignup}
          handleShowNewPostPopup={handleShowNewPostPopup}
        />
        <MainPage />
        <Post
          // karma={555}
          title={"This is a test post"}
          author={"meanbearpig"}
          subclonnit={"c/all"}
        />
        <Post
          // karma={4576}
          title={"me lol"}
          author={"cooldude4000"}
          subclonnit={"c/all"}
          img={
            "https://preview.redd.it/ddoemjx1vdz61.jpg?width=625&auto=webp&s=e3197816f5487f7174a0da932a3804a186b4247f"
          }
        />
        <Post
          // karma={9452}
          title={"So sad :'("}
          author={"meanbearpig"}
          subclonnit={"c/all"}
          img={
            "https://preview.redd.it/te8p1gtwdez61.jpg?width=500&auto=webp&s=22342de725e3c428c78afcdac57162584565f171"
          }
        />
        <Post
          // karma={1037}
          title={
            "TIL that in 2006, a woman farted on a plane and tried to cover up the smell by lighting matches, causing an emergency landing and an FBI investigation. Although she was not charged in the incident, she was also not allowed back on the plane."
          }
          author={"FunFactsGuy"}
          subclonnit={"c/all"}
        />
        {postArray}
        {showSignup && (
          <SignupForm
            setShowSignup={setShowSignup}
            setShowLogin={setShowLogin}
          />
        )}
        {showLogin && (
          <LoginForm
            setShowSignup={setShowSignup}
            setShowLogin={setShowLogin}
          />
        )}
        {showNewPostPopup && (
          <NewPostPopup
            setPostArray={setPostArray}
            setShowNewPostPopup={setShowNewPostPopup}
          />
        )}
      </div>
    </userContext.Provider>
  );
}

export default App;
