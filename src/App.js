import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";
import TweetInput from "./components/TweetInput/TweetInput";
import TweetList from "./components/TweetList/TweetList";
function App() {
  return (
    <div className="App">
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

export default App;
