import React, { useState, useRef } from "react";

function Post({ img, title, author, subclonnit, comments }) {
  const [showPreview, setShowPreview] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [karma, setKarma] = useState(1);
  const upvoteRef = useRef();
  const downvoteRef = useRef();

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
  return (
    <div className="post">
      <div className="post-karma__container">
        <div className="upvote">
          <i
            ref={upvoteRef}
            onClick={handleUpvote}
            className="fas fa-arrow-up"
            style={upvoted ? { color: "#ff4500" } : { color: "#cbccc4" }}
          ></i>
        </div>
        <div className="karma-count">{karma}</div>
        <div className="downvote">
          <i
            ref={downvoteRef}
            onClick={handleDownvote}
            className="fas fa-arrow-down"
            style={downvoted ? { color: "#369" } : { color: "#cbccc4" }}
          ></i>
        </div>
      </div>
      <div className="post-image__container">
        {img ? (
          <img src={img} alt={title}></img>
        ) : (
          <i className="fas fa-comment-dots fa-4x"></i>
        )}
      </div>
      <div className="post-text__container">
        <h3 className="post-title">{title}</h3>
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
              submitted by {author} to {subclonnit}
            </p>
            <ul className="list-buttons">
              <li>comments</li>
              <li>share</li>
              <li>save</li>
              <li>hide</li>
            </ul>
          </div>
        </div>
      </div>
      {showPreview ? (
        <div className="post-preview">
          {img && <img src={img} alt="preview popup" className="preview-img" />}
          {/* text && <p>Lorem ipsum dolor sit amet.</p> */}
          {/* linkURL && <iframe width="560" 
                              height="315" 
                              src={linkURL} 
                              title="YouTube video player" 
                              frameborder="0" 
                              allow="accelerometer; 
                                autoplay; 
                                clipboard-write; 
                                encrypted-media; 
                                gyroscope;
                                picture-in-picture" 
                              allowfullscreen></iframe> */}
        </div>
      ) : null}
    </div>
  );
}

export default Post;
