import React, { useState, useRef } from "react";

function PostShare({ imgSrc, titleAnchorURL }) {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  const [textCopied, setTextCopied] = useState(false);

  const handleCopy = () => {
    inputRef.current.select();
    document.execCommand("copy");
    setTextCopied(true);
    setTimeout(() => {
      setTextCopied(false);
    }, 2000);
  };
  // const handleSetValue = () => {
  // if (imgSrc) {
  //   setValue(imgSrc);
  // } else if (titleAnchorURL) {
  //   setValue(titleAnchorURL);
  // }
  // };

  return (
    <div className="post-share">
      <h4>
        Share to all your friends: {textCopied && <span>Text copied!</span>}
      </h4>

      <input
        ref={inputRef}
        type="text"
        value={
          imgSrc
            ? imgSrc
            : titleAnchorURL
            ? titleAnchorURL
            : "Nothing to share :("
        }
      />
      <button onClick={handleCopy} className="copy-button">
        Copy
      </button>
    </div>
  );
}

export default PostShare;
