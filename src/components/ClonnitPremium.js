import React, { useState } from "react";

function ClonnitPremium() {
  const [showMessage, setShowMessage] = useState(false);

  const handleHover = () => {
    setShowMessage(true);
  };

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="clonnit-premium">
      <div className="premium-heading">
        <h3>
          clonnit <span>premium</span>
        </h3>
        <p>
          Get an ad-free experience with special benefits and directly support
          Clonnit
        </p>
      </div>
      <div className="premium-body">
        <h4>The benefits to purchasing Clonnit Premium are endless:</h4>
        <ul>
          <li>
            Unlimited upvotes/downvotes per post!{" "}
            <span>
              Is there a post that you just love? Upvote them as many times as
              you like! Got a post that you've just not vibin' with? Downvote
              them into oblivion!
            </span>
          </li>
          <li>
            No Ads. Ever.{" "}
            <span>
              If we ever decide to incorporate ads onto the site, you can be
              sure you'll never be seeing them!
            </span>
          </li>
          <li>
            You will recieve a custom, animated outline for your username so you
            can show off in front of everyone.{" "}
            <span>Look at Mr(s). Fancy Pants and his/her flashy username.</span>
          </li>
        </ul>
        <h4>
          Only <span>$7999.95</span> $4999.95!
        </h4>
      </div>
      {!showMessage ? (
        <div
          className="premium-payment"
          onMouseEnter={handleHover}
          onClick={handleClick}
        >
          <h4>Enter your Payment info below</h4>
          <div className="payment-container">
            <div className="payment-item">
              <label htmlFor="holder">Card holder</label>
              <input
                type="password"
                name=""
                id="holder"
                placeholder="Enter name"
              />
            </div>
            <div className="payment-item">
              <label htmlFor="cc">Card Info</label>
              <input
                type="password"
                name=""
                id="cc"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
            </div>
            <div className="payment-item-hz">
              <div>
                <label htmlFor="ex">Expiration Date</label>
                <input
                  className="third"
                  type="password"
                  name=""
                  id="ex"
                  placeholder="mm"
                />
                <input
                  className="third"
                  type="password"
                  name=""
                  id="ex"
                  placeholder="yy"
                />
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <input
                  className="third"
                  type="password"
                  name=""
                  id="cc"
                  placeholder="cvv"
                />
              </div>
            </div>
            <button>PURCHASE</button>
          </div>
        </div>
      ) : (
        <div className="billing-unavailable">
          <h4>
            Sorry, our billing system is down for the moment, please try again
            later
          </h4>
        </div>
      )}
    </div>
  );
}

export default ClonnitPremium;
