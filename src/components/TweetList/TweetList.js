import { useEffect, useState } from "react";
import Tweet from "../Tweet/Tweet.js";

const TweetList = () => {
  const [tweets, setTweets] = useState(null);
  useEffect(() => {
    fetch("../../data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTweets(data.tweet);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>{tweets && <Tweet tweets={tweets} />}</div>;
};

export default TweetList;
