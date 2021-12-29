import "./Home.css";
import LeftBar from "../../components/LeftBar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import TweetInput from "../../components/TweetInput/TweetInput";
import TweetList from "../../components/TweetList/TweetList";

function Home() {
  return (
    <div className="home">
      <div className="left-bar">
        <LeftBar />
      </div>
      <div className="main-container">
        <TweetInput />
        <TweetList />
      </div>
      <div className="right-bar">
        <RightBar />
      </div>
    </div>
  );
}

export default Home;
