import React, { useState, useRef, useContext } from "react";
import { userContext } from "../context/UserContext";
// import { AuthContext } from "../context/AuthContext";
import Post from "./Post";
import { db } from "../firebase";
import uniqid from "uniqid";
// import useStorage from "../hooks/useStorage";
import { storage } from "../firebase";

function NewPost({
  setShowNewPostPopup,
  setPostArray,
  posts,
  title,
  author,
  imgSrc,
  urlSrc,
  textContent,
  setPosts,
  setTitle,
  setAuthor,
  setImgSrc,
  setUrlSrc,
  setTextContent,
  showActiveTab,
  setShowActiveTab,
  setShowSignup,
}) {
  const [displayPreviewImg, setDisplayPreviewImg] = useState(false);
  const [currentFile, setCurrentFile] = useState(null); //might need to be lifted up a level
  const [uploadedIMG, setUploadedIMG] = useState("");
  const [currentFilePath, setCurrentFilePath] = useState(""); //might need to be lifted up a level
  // const [title, setTitle] = useState(""); //might need to be lifted up a level
  const [url, setUrl] = useState(""); //might need to be lifted up a level
  const [urlThumbnail, setUrlThumbnail] = useState("");
  const [titleAnchorURL, setTitleAnchorURL] = useState("");
  const [titleLength, setTitleLength] = useState(0);
  const [placeHolderArray, setPlaceHolderArray] = useState([]); //do I really need this array? and the test array?
  const [timeStamp, setTimeStamp] = useState(new Date().toLocaleTimeString());
  const [dateStamp, setDateStamp] = useState(new Date().toLocaleDateString());
  // const { user } = useContext(AuthContext); //currentUser, setCurrentUser?
  const [error, setError] = useState("");
  const { user, setUser } = useContext(userContext); //currentUser, setCurrentUser?
  const imgSrcRef = useRef();
  const titleRef = useRef();
  const urlSrcRef = useRef();
  const textContentRef = useRef();

  // const [testlink, setTestlink] = useState(null);

  const handleActiveTab = () => {
    setShowActiveTab(!showActiveTab);
  };

  const handleFileUpload = (e) => {
    //files under 2MB accepted
    if (e.target.files[0].size > 2097152) {
      alert("File is too big!");
      e.target.files = [];
    } else {
      const filePath = imgSrcRef.current.files[0].name;
      setCurrentFile(URL.createObjectURL(e.target.files[0]));
      setCurrentFilePath(filePath);
      // console.log(filePath);
      setDisplayPreviewImg(true);
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    imgSrcRef.current.click();
  };

  const handleDeleteFileSelection = () => {
    setCurrentFilePath("");
    setCurrentFile(null);
    setDisplayPreviewImg(false);
  };

  const handleUrlChange = async (e) => {
    setTitleAnchorURL(e.target.value);
    const sliced = e.target.value.slice(-11);
    const updatedURL = `https://www.youtube.com/embed/${sliced}`;
    const thumbnail = `https://img.youtube.com/vi/${sliced}/0.jpg`;
    setUrl(updatedURL);
    setUrlThumbnail(thumbnail);
    // const blob = await new Blob([url]);
    // await console.log(blob);
    // await setTestlink(URL.createObjectURL(blob));
    // await console.log(testlink);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleLength(e.target.value.length);
  };

  const handleTextContentChange = (e) => {
    setTextContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let titleValue = titleRef.current.value;
    let imgSrcValue = imgSrcRef.current ?? "";
    let urlSrcValue = urlSrcRef.current ?? "";
    let textContentValue = textContentRef.current ?? "";
    setTitle(titleValue);
    setImgSrc(imgSrcValue);
    setUrlSrc(urlSrcValue);
    setTextContent(textContentValue);
    setDisplayPreviewImg(false);
    setShowNewPostPopup(false);
    setPlaceHolderArray((prev) => [
      titleValue,
      user,
      imgSrcValue,
      urlSrcValue,
      textContentValue,
    ]);

    const test = [];
    test.push([titleValue, user, imgSrcValue, urlSrcValue, textContentValue]);

    const storageRef = storage.ref();
    const fileRef = storageRef.child(currentFile.name);
    fileRef.put(currentFile).then((file) => {
      console.log("file uploaded ", file.name);
    });

    // //upload img to storage and get back url to then upload to firestore
    // // const { url } = useStorage(currentFile)
    // const storageRef = storage.ref().child(currentFile.name);

    // storageRef.put(currentFile).on(
    //   "state_changed",
    //   // (snap) => {
    //   //   let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    //   //   setProgress(percentage);
    //   // },
    //   (err) => {
    //     setError(err);
    //   },
    //   async () => {
    //     const url = await storageRef.getDownloadURL();
    //     setUploadedIMG(url);
    //   }
    // );

    //upload the post data to firestore
    handleFirestoreDataUpload(
      titleValue,
      user,
      uploadedIMG,
      url,
      textContent,
      timeStamp,
      dateStamp,
      titleAnchorURL,
      urlThumbnail
    );

    //post the same data to the screen
    const mapped = test.map((item) => (
      <Post
        key={uniqid()}
        title={item[0]}
        author={item[1]}
        // imgSrc={uploadedIMG}
        imgSrc={currentFile}
        urlSrc={url}
        textContent={textContent}
        timeStamp={timeStamp}
        dateStamp={dateStamp}
        titleAnchorURL={titleAnchorURL}
        urlSrcThumbnail={urlThumbnail}
        setShowSignup={setShowSignup}
      />
    ));
    setPostArray((prev) => [mapped, ...prev]);
  };

  const handleFirestoreDataUpload = (
    title,
    author,
    imgSrc,
    urlSrc,
    textContent,
    timeStamp,
    dateStamp,
    titleAnchorUrl,
    urlSrcThumbnail
  ) => {
    db.collection("posts")
      .add({
        title,
        author,
        imgSrc,
        urlSrc,
        textContent,
        timeStamp,
        dateStamp,
        titleAnchorUrl,
        urlSrcThumbnail,
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  return (
    <div className="new-post__container">
      <h3>submit to clonnit</h3>
      <strong
        className="exit-btn"
        onClick={() => {
          setShowNewPostPopup(false);
        }}
      >
        X
      </strong>
      <div>
        <div className="link-text__container">
          <div
            onClick={handleActiveTab}
            style={
              showActiveTab
                ? {
                    color: "#edf6ff",
                    background: "#369",
                    transform: "scale(1.2)",
                  }
                : {
                    color: "#369",
                    background: "#edf6ff",
                    transform: "scale(.9)",
                  }
            }
          >
            Link
          </div>
          <div
            onClick={handleActiveTab}
            style={
              !showActiveTab
                ? {
                    color: "#edf6ff",
                    background: "#369",
                    transform: "scale(1.2)",
                  }
                : {
                    color: "#369",
                    background: "#edf6ff",
                    transform: "scale(.9)",
                  }
            }
          >
            Text
          </div>
        </div>
        <div className="post-hint">
          {showActiveTab ? (
            <p>
              You are submitting a link. The key to a successful submission is
              interesting content and a descriptive title.
            </p>
          ) : (
            <p>
              You are submitting a text-based post. Speak your mind. A title is
              required, but expanding further in the text field is not.
              Beginning your title with "vote up if" is violation of
              intergalactic law.
            </p>
          )}
        </div>
        <form action="" className="newPost__form" onSubmit={handleSubmit}>
          {showActiveTab && !currentFile && (
            <div className="url__container">
              <label htmlFor="url">YouTube Video</label>
              <input
                ref={urlSrcRef}
                id="url"
                type="url"
                onChange={handleUrlChange}
              />
            </div>
          )}
          {showActiveTab && !url && (
            <div className="image-video__container">
              <label htmlFor="fileUpload">image</label>
              <div className="drag-n-drop">
                <input
                  id="fileUpload"
                  type="file"
                  ref={imgSrcRef}
                  hidden="hidden"
                  // accept="image/*,video/quicktime,video/mp4"
                  // ^^^ maybe work on accepting videos in the future
                  accept="image/*"
                  onChange={handleFileUpload}
                />
                <button onClick={handleButtonClick}>CHOOSE FILE</button>

                {displayPreviewImg && (
                  <div>
                    <div>
                      <p>{currentFilePath}</p>
                      <p onClick={handleDeleteFileSelection}>X</p>
                    </div>
                    <img
                      className="imgPreview"
                      src={currentFile}
                      alt="Preview"
                    ></img>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="title__container">
            <label className="required" htmlFor="title">
              title{" "}
              <span
                style={
                  titleLength === 300 ? { color: "red" } : { color: "#828473" }
                }
              >
                {titleLength}/300
              </span>
            </label>
            <textarea
              ref={titleRef}
              id="title"
              type="text"
              maxLength="300"
              onChange={handleTitleChange}
            />
          </div>
          {!showActiveTab && (
            <div className="text__container">
              <label htmlFor="text">
                text <span>(optional)</span>
              </label>
              <textarea
                ref={textContentRef}
                id="text"
                type="text"
                onChange={handleTextContentChange}
              />
            </div>
          )}
          {/* <div className="subclonnit__container">
            <label htmlFor="subclonnit">subclonnit</label>    IMPLEMENT REACT ROUTER AND PAGES IN THE FUTURE
            <input id="subclonnit" type="text" />
          </div> */}
          <div className="submit__container">
            <button>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewPost;
