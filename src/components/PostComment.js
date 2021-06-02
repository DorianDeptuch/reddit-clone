import React, { useState, useRef, useEffect } from "react";
import { db } from "../firebase";
import uniqid from "uniqid";

function PostComment({ user, dataID, commentAuthor, commentText }) {
  const [commentValue, setCommentValue] = useState("");
  const [containsComments, setContainsComments] = useState(false);
  const [commentsArray, setCommentsArray] = useState([]);
  const [comments, setComments] = useState("");
  const formRef = useRef();

  const handleChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setContainsComments(true);
    formRef.current.reset();

    const mapped = (
      <div className="comment" key={uniqid()}>
        <h6 className="comment-author">
          Submitted by <span>{user}</span>
        </h6>
        <div className="comment-value">{commentValue}</div>
      </div>
    );
    handleFirestoreCommentUpload(user, commentValue);
    setCommentsArray((prev) => [mapped, ...prev]);
    setComments(mapped);
  };

  const handleFirestoreCommentUpload = (commentAuthor, commentText) => {
    db.collection("posts")
      // db.collection("comments")
      .doc(dataID)
      .update({
        // .add({
        dataID,
        commentAuthor,
        commentText,
      })
      // })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) => {
  //     mapFirestoreData(snapshot.docs);
  //   });

  //   const mapFirestoreData = (data) => {
  //     console.log(data);
  //     data.forEach((doc) => {
  //       let { commentAuthor, commentText } = doc.data();
  //       const mapped = (
  //         <div className="comment" data-id={dataID} key={uniqid()}>
  //           <h6 className="comment-author">
  //             Submitted by <span>{commentAuthor}</span>
  //           </h6>
  //           <div className="comment-value">{commentText}</div>
  //         </div>
  //       );

  //       setCommentsArray((prev) => [mapped, ...prev]);
  //     });
  //   };
  // }, []);

  useEffect(() => {
    if (!commentAuthor && !commentText) {
      return;
    } else {
      const commentData = (
        <div className="comment" key={uniqid()}>
          <h6 className="comment-author">
            Submitted by <span>{commentAuthor}</span>
          </h6>
          <div className="comment-value">{commentText}</div>
        </div>
      );

      setCommentsArray((prev) => [commentData, ...prev]);
    }
  }, []);
  return (
    <div className="post-comment">
      <h4>
        Commenting as: <span>{user}</span>
      </h4>
      <form ref={formRef} onSubmit={handleSubmit}>
        <textarea onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
      <hr />
      {/* <div className="comment"></div> */}
      {commentsArray}
    </div>
  );
}

export default PostComment;
