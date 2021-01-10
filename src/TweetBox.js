import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Meti ",
      username: "metik",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://photos.google.com/album/AF1QipOiejdrDpqaIr1mNclPk8tpyR9LgbulmXR59NL6/photo/AF1QipNpf2aujnt9c1JII53zNa5TnyVxrtHYoFcJB2ps.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://photos.google.com/album/AF1QipOiejdrDpqaIr1mNclPk8tpyR9LgbulmXR59NL6/photo/AF1QipNpf2aujnt9c1JII53zNa5TnyVxrtHYoFcJB2ps.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Hello Twitter World"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
