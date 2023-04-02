import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../API_KEYS/API_KEY1";

const VideoPlayer = ({ currentVideo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(async () => {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&id=${currentVideo}`
    );
    setTitle(response.data.items[0].snippet.title);
    console.log(response.data);
    setDescription(response.data.items[0].snippet.description);
  }, [{ currentVideo }]);

  return (
    <div>
      <iframe
        title="default-player"
        id="player"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1&origin=http://example.com`}
        frameBorder="0"
      ></iframe>
      <div>
        <h2>Title: {title}</h2>
      </div>
      <div>
        <h3>Description: {description}</h3>
      </div>
    </div>
  );
};

export default VideoPlayer;
