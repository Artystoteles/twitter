import "./RecUsers.css";
// import img from ".../images/profpic.png";

const RecUsers = ({ tweets }) => {
  return (
    <div>
      <div className="recomended-user-container">
        <div className="recomended-user-header">
          <h2 className="">Warci obserwowania </h2>
        </div>

        <div className="recContainer">
          <div className="recUserPic">
            <img
              width="50"
              height="50"
              alt="profpic"
              src="../images/profpic.png"
              className="profilePicture"
            />
          </div>
          <div className="recUserName">
            <h3>Eliza</h3>
          </div>
          <div className="followBtnContainer">
            <span>Obserwuj</span>
          </div>
        </div>
        <div className="recContainer">
          <div className="recUserPic">
            <img
              width="50"
              height="50"
              alt="profpic"
              src="../images/profpic.png"
              className="profilePicture"
            />
          </div>
          <div className="recUserName">
            <h3>Eliza</h3>
          </div>
          <div className="followBtnContainer">
            <span>Obserwuj</span>
          </div>
        </div>
        <div className="recContainer">
          <div className="recUserPic">
            <img
              width="50"
              height="50"
              alt="profpic"
              src="../images/profpic.png"
              className="profilePicture"
            />
          </div>
          <div className="recUserName">
            <h3>Eliza</h3>
          </div>
          <div className="followBtnContainer">
            <span>Obserwuj</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecUsers;
