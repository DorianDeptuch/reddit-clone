import React, { useState, useEffect } from "react";
import "./css/main.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Post from "./components/Post";
import ClonnitPremium from "./components/ClonnitPremium";
import NewPostPopup from "./components/NewPostPopup";
import AccountDetails from "./components/AccountDetails";
import { userContext } from "./context/UserContext";
import { auth, db } from "./firebase";
import uniqid from "uniqid";
// import { AuthProvider } from "./context/AuthContext";

// export const userContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showNewPostPopup, setShowNewPostPopup] = useState(false);
  const [postArray, setPostArray] = useState([]);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [urlSrc, setUrlSrc] = useState("");
  const [textContent, setTextContent] = useState("");
  const [showActiveTab, setShowActiveTab] = useState(true);
  const [showClonnitPremium, setShowClonnitPremium] = useState(false);
  const [showAccountDetails, setShowAccountDetails] = useState(false);

  useEffect(() => {
    db.collection("posts")
      .get()
      .then((snapshot) => {
        //.snapshot instead of .get().then causes a bug where double posts appear
        mapFirestoreData(snapshot.docs);
      });

    const mapFirestoreData = (data) => {
      data.forEach((doc) => {
        let {
          title,
          author,
          imgSrc,
          urlSrc,
          textContent,
          timeStamp,
          dateStamp,
          titleAnchorUrl,
          urlSrcThumbnail,
          commentAuthor,
          commentText,
        } = doc.data();
        const mapped = (
          <Post
            dataID={doc.id}
            key={uniqid()}
            title={title}
            author={author}
            imgSrc={imgSrc}
            urlSrc={urlSrc}
            textContent={textContent}
            timeStamp={timeStamp}
            dateStamp={dateStamp}
            titleAnchorURL={titleAnchorUrl}
            urlSrcThumbnail={urlSrcThumbnail}
            setShowSignup={setShowSignup}
            commentAuthor={commentAuthor}
            commentText={commentText}
          />
        );

        setPostArray((prev) => [mapped, ...prev]);
      });
    };
  }, []);

  const handleShowNewPostPopup = () => {
    setShowNewPostPopup(!showNewPostPopup);
  };

  const handleShowClonnitPremium = () => {
    setShowClonnitPremium((prev) => !prev);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user logged in: ", user);
        setUser(user.displayName);
      } else {
        console.log("user logged out");
        setUser(null);
      }
    });

    return () => unsubscribe;
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {/* <AuthProvider> */}
      <div>
        <Header
          setShowSignup={setShowSignup}
          setShowLogin={setShowLogin}
          setShowAccountDetails={setShowAccountDetails}
          user={user}
          setUser={setUser}
        />
        <Sidebar
          setShowSignup={setShowSignup}
          handleShowNewPostPopup={handleShowNewPostPopup}
          showActiveTab={showActiveTab}
          setShowActiveTab={setShowActiveTab}
          handleShowClonnitPremium={handleShowClonnitPremium}
        />
        <MainPage />
        {postArray}
        {showSignup && (
          <SignupForm
            setShowSignup={setShowSignup}
            setShowLogin={setShowLogin}
            user={user}
            setUser={setUser}
          />
        )}
        {showLogin && (
          <LoginForm
            setShowSignup={setShowSignup}
            setShowLogin={setShowLogin}
            setUser={setUser}
          />
        )}
        {showNewPostPopup && (
          <NewPostPopup
            setPostArray={setPostArray}
            setShowNewPostPopup={setShowNewPostPopup}
            posts={posts}
            title={title}
            author={author}
            imgSrc={imgSrc}
            urlSrc={urlSrc}
            textContent={textContent}
            setPosts={setPosts}
            setTitle={setTitle}
            setAuthor={setAuthor}
            setImgSrc={setImgSrc}
            setUrlSrc={setUrlSrc}
            setTextContent={setTextContent}
            showActiveTab={showActiveTab}
            setShowActiveTab={setShowActiveTab}
            setShowSignup={setShowSignup}
          />
        )}
        {showAccountDetails && (
          <AccountDetails setShowAccountDetails={setShowAccountDetails} />
        )}

        {showClonnitPremium && (
          <ClonnitPremium setShowClonnitPremium={setShowClonnitPremium} />
        )}
      </div>
      {/* </AuthProvider> */}
    </userContext.Provider>
  );
}

export default App;
