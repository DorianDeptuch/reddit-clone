import React from "react";
import { auth } from "../firebase";

function AccountDetails({ setShowAccountDetails }) {
  return (
    <div className="account-details">
      <strong
        onClick={() => {
          setShowAccountDetails(false);
        }}
      >
        X
      </strong>
      <h4>Account Details</h4>
      <p>
        <span>Username:</span> {auth.currentUser.displayName}
      </p>
      <p>
        <span>Email:</span> {auth.currentUser.email}
      </p>
      <p>
        <span>Account Created:</span> {auth.currentUser.metadata.creationTime}
      </p>
      <p>
        <span>Last Sign In:</span> {auth.currentUser.metadata.lastSignInTime}
      </p>

      <div></div>
    </div>
  );
}

export default AccountDetails;
