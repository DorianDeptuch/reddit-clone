import React, { useState, useRef, useContext } from "react";
import { userContext } from "../context/UserContext";
// import { AuthContext } from "../context/AuthContext";
import PostComment from "./PostComment";
import PostShare from "./PostShare";

function Post({
  title,
  author,
  imgSrc,
  urlSrc,
  textContent,
  timeStamp,
  dateStamp,
  titleAnchorURL,
  urlSrcThumbnail,
  setShowSignup,
  dataID,
  commentAuthor,
  commentText,
}) {
  const [showPreview, setShowPreview] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [karma, setKarma] = useState(1);
  const [showComments, setShowComments] = useState(false);
  const [showSharePost, setShowSharePost] = useState(false);
  const [hidePost, setHidePost] = useState(false);
  const upvoteRef = useRef();
  const downvoteRef = useRef();
  // const { user, setUser } = useContext(AuthContext); //currentUser, setCurrentUser?
  const { user, setUser } = useContext(userContext); //currentUser, setCurrentUser?
  const [postID, setPostID] = useState(dataID);

  const handleUpvote = () => {
    if (downvoted && !upvoted) {
      setUpvoted(true);
      setDownvoted(false);
      setKarma((prev) => prev + 2);
    } else if (!upvoted) {
      setUpvoted(true);
      setDownvoted(false);
      setKarma((prev) => prev + 1);
    } else {
      setUpvoted(false);
      setKarma((prev) => prev - 1);
    }
  };

  const handleDownvote = () => {
    if (upvoted && !downvoted) {
      setDownvoted(true);
      setUpvoted(false);
      setKarma((prev) => prev - 2);
    } else if (!downvoted) {
      setDownvoted(true);
      setUpvoted(false);
      setKarma((prev) => prev - 1);
    } else {
      setDownvoted(false);
      setKarma((prev) => prev + 1);
    }
  };

  const handleShowPostPreview = () => {
    setShowPreview(!showPreview);
  };

  const handleShowComments = () => {
    setShowComments((prev) => !prev);
  };

  const handleShowSharePost = () => {
    setShowSharePost((prev) => !prev);
  };

  const handleHidePost = () => {
    setHidePost((prev) => !prev);
    setShowComments(false);
    setShowPreview(false);
    setShowSharePost(false);
  };

  return (
    <div className="post">
      {!hidePost && (
        <div className="post-karma__container">
          <div className="upvote">
            <i
              ref={upvoteRef}
              onClick={user ? handleUpvote : () => setShowSignup(true)}
              className="fas fa-arrow-up"
              style={upvoted ? { color: "#ff4500" } : { color: "#cbccc4" }}
            ></i>
          </div>
          <div className="karma-count">{karma}</div>
          <div className="downvote">
            <i
              ref={downvoteRef}
              onClick={user ? handleDownvote : () => setShowSignup(true)}
              className="fas fa-arrow-down"
              style={downvoted ? { color: "#369" } : { color: "#cbccc4" }}
            ></i>
          </div>
        </div>
      )}
      {!hidePost && (
        <div className="post-image__container">
          {imgSrc ? (
            <img src={imgSrc} alt={title}></img>
          ) : urlSrc ? (
            <img src={urlSrcThumbnail} alt="thumbnail"></img>
          ) : (
            <i className="fas fa-comment-dots fa-4x"></i>
          )}
        </div>
      )}
      {!hidePost && (
        <div className="post-text__container">
          <a href={titleAnchorURL}>
            <h3 className="post-title">{title}</h3>
          </a>
          <div className="post-preview-info__container">
            <div onClick={handleShowPostPreview} className="post-preview-btn">
              {!showPreview ? (
                <i className="fas fa-plus fa-2x"></i>
              ) : (
                <i className="fas fa-times fa-2x"></i>
              )}
            </div>
            <div className="post-info">
              <p className="author-info">
                submitted by <span>{author}</span> to c/all{/*subclonnit*/} at{" "}
                {timeStamp} on {dateStamp}
              </p>
              <ul className="list-buttons">
                <li onClick={handleShowComments}>comments</li>
                <li onClick={handleShowSharePost}>share</li>
                <li>save</li>
                <li onClick={handleHidePost}>hide</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {showPreview ? (
        <div className="post-preview">
          {imgSrc && (
            <img src={imgSrc} alt="preview popup" className="preview-img" />
          )}
          {textContent && <div className="text-preview">{textContent}</div>}
          {urlSrc && (
            <iframe
              width="560"
              height="315"
              src={urlSrc}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </div>
      ) : null}
      {showComments && (
        <PostComment
          commentAuthor={commentAuthor}
          commentText={commentText}
          dataID={dataID}
          user={user}
        />
      )}
      {showSharePost && (
        <PostShare imgSrc={imgSrc} titleAnchorURL={titleAnchorURL} />
      )}
      {hidePost && (
        <div className="hidden">
          <h2>
            Post Hidden. <span onClick={handleHidePost}>UNDO?</span>
          </h2>
        </div>
      )}
    </div>
  );
}

export default Post;
