import "./TweetInput.css";
// import img from "./images/profpic.png";
import { useState } from "react";

const TweetInput = () => {
  const [inputValue, setInputValue] = useState();
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <div className="tweetInput-container">
        <div className="tweetInput-header">
          <div className="profilePicture-container">
            <img
              width="50"
              height="50"
              alt="profpic"
              src="../images/profpic.png"
              className="profilePicture"
            />
          </div>
          <div className="tweetValue-input">
            <textarea
              onChange={handleInput}
              type="text"
              className="input-value"
              value={inputValue}
              placeholder="co słychać?"
            />
          </div>
        </div>

        <div className="postButtons-container">
          <span id="commentBtn" className="material-icons">
            image
          </span>

          <span id="commentBtn" className="material-icons">
            gif_box
          </span>
          <span id="commentBtn" className="material-icons">
            sentiment_satisfied
          </span>
          <span className="tweet-btn">Tweetnij</span>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
