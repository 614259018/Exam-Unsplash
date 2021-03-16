import React, { useState, useEffect } from "react";
import { ImHeart } from "react-icons/im";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    ProfileUsername();
  }, []);

  const key = (process.env.REACT_APP_ACCESSKEY);

  const ProfileUsername = () => {
    fetch(
      `https://api.unsplash.com/users/` +
        usernameProfile +
        `/photos?client_id=`+key
    )
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
    fetch(
      `https://api.unsplash.com/users/` +
        usernameProfile +
        `?client_id=`+key
    )
      .then((res) => res.json())
      .then((data01) => {
        setUser(data01);
        console.log(data01);
      });
  };

  const usernameProfile = localStorage.getItem("keyUsername");

  return (
    <div className="container">
      {Object.keys(user).length !== 0 ? (
        <div className="container-profile">
          <div className="profile">
            <div className="profile-image">
              <img className="profile_image" src={user.profile_image.medium} />
            </div>
            <div className="profile-user-settings">
              <a className="username"> {user.username} </a>
              <p className="location">{user.location}</p>
            </div>
            <div className="profile-stats">
              <a className="following_count"> {user.following_count} </a>
              <a className="followers_count"> {user.followers_count} </a>
            </div>
            <div className="profile-bio">
              <span className="bio">{user.bio}</span>
            </div>
          </div>
          <a className="total_photos">{user.total_photos}</a>
          <a className="total_likes">{user.total_likes}</a>
          <a className="total_collections">{user.total_collections}</a>
          <div></div>
        </div>
      ) : null}
      {profile.map((item) => {
        return (
          <div className="profile-user">
            <img className="regular" key={item.id} src={item.urls.regular} />
            <div className="like">
              <p className="numLike" key={item.id}>
                <ImHeart /> {item.likes} Likes
              </p>
            </div>
            <div className="comment">
              <p className="namecomment" key={item.id}>
                <span>{item.user.username}</span> {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
