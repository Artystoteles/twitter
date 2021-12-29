import "./RightBar.css";
import RecUsers from "../RecUsers/RecUsers.js";
import RecTags from "../RecTags/RecTags.js";
import { useEffect, useState } from "react";

const RightBar = () => {
  const [tweets, setTweets] = useState(null);
  useEffect(() => {
    fetch("../../data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTweets(data.tweet);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="right">
      <div className="searchbar-container">
        <input
          type="text"
          placeholder="wyszukiwarka Twittera"
          className="searchbar"
        />
      </div>
      <div className="rec-container">
        <div className="recTagsContainer">
          <RecTags />
        </div>
        <div className="recUsersContainer">
          <RecUsers tweets={tweets} />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
