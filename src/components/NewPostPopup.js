import React, { useState, useRef, useContext } from "react";
import { userContext } from "../context/UserContext";
import Post from "./Post";

function NewPost({ setShowNewPostPopup, setPostArray }) {
  const [showActiveTab, setShowActiveTab] = useState(true);
  const [displayPreviewImg, setDisplayPreviewImg] = useState(false);
  const [currentFile, setCurrentFile] = useState(null); //might need to be lifted up a level
  const [currentFilePath, setCurrentFilePath] = useState(""); //might need to be lifted up a level
  const [title, setTitle] = useState(""); //might need to be lifted up a level
  const [url, setUrl] = useState(""); //might need to be lifted up a level
  const [titleLength, setTitleLength] = useState(0);
  const [placeHolderArray, setPlaceHolderArray] = useState([]);
  const { user } = useContext(userContext);
  const imgSrcRef = useRef();
  const titleRef = useRef();
  // const authorRef = useRef();
  const urlSrcRef = useRef();
  const textContentRef = useRef();

  // class Post {
  //   constructor(title, author, imgSrc, urlSrc, textContent) {
  //     this.title = title;
  //     this.author = author;
  //     this.imgSrc = imgSrc;
  //     this.urlSrc = urlSrc;
  //     this.textContent = textContent;
  //   }
  // }

  const handleActiveTab = () => {
    setShowActiveTab(!showActiveTab);
  };

  const handleFileUpload = (e) => {
    const filePath = imgSrcRef.current.files[0].name;
    setCurrentFile(URL.createObjectURL(e.target.files[0]));
    setCurrentFilePath(filePath);
    console.log(filePath);
    setDisplayPreviewImg(true);
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

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleLength(e.target.value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let title = titleRef.current.value;
    let imgSrc = imgSrcRef.current ?? "";
    let urlSrc = urlSrcRef.current ?? "";
    let textContent = textContentRef.current ?? "";
    setDisplayPreviewImg(false);
    setShowNewPostPopup(false);
    setPlaceHolderArray((prev) => [title, user, imgSrc, urlSrc, textContent]);
    const test = [];
    test.push([title, user, imgSrc, urlSrc, textContent]);
    // const newPost = new Post(
    //   title,
    //   user,
    //   imgSrc.value,
    //   urlSrc.value,
    //   textContent.value
    // );
    const mapped = test.map(
      (
        item //item is never used???
      ) => (
        <Post
          title={item[0]}
          author={item[1]}
          imgSrc={item[2]}
          urlSrc={item[3]}
          textContent={item[4]}
        />
      )
    );
    console.log("test: ", test);
    console.log("placeholderarray: ", placeHolderArray);
    setPostArray((prev) => [mapped, ...prev]);
    console.log(mapped);
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
              <label htmlFor="url">url</label>
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
              <textarea ref={textContentRef} id="text" type="text" />
            </div>
          )}
          <div className="subclonnit__container">
            <label htmlFor="subclonnit">subclonnit</label>
            <input id="subclonnit" type="text" />
          </div>
          <div className="submit__container">
            <button>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewPost;
