import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="container-div">
      <h4>Profile</h4>
      <div className="mb-3">
        <label className="form-label">User Name:</label>
        <label className="form-label fw-bold">{currentUser.username}</label>
      </div>
      <div className="mb-3">
        <label className="form-label">User Email:</label>
        <label className="form-label fw-bold">{currentUser.email}</label>
      </div>
    </div>
  );
};

export default UserProfile;
