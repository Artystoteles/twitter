import "./Tweet.css";

const Tweet = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet, index) => (
        <div key={index} className="post-container">
          <div className="post-header">
            <div className="profilePicture-container">
              <img
                alt="profpic"
                src="../images/profpic.png"
                className="profilePicture"
              />
            </div>
            <div className="user-name-container">
              <h2 className="userName">{tweet.name}</h2>
              <p className="nickName">@{tweet.user_name}</p>
            </div>
          </div>

          <div className="post-content-container">
            <p className="post-content">{tweet.content}</p>
          </div>
          <div className="post-buttons-container">
            <span id="comment-Btn" className="material-icons action-btn ">
              chat_bubble
            </span>

            <span id="repost-btn" className="material-icons action-btn">
              autorenew
            </span>

            <span id="like-btn" className="material-icons action-btn">
              favorite
            </span>

            <span id="share-btn" className="material-icons action-btn">
              share
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tweet;
