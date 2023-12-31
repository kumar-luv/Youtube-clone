import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_KEY } from "../constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        if (video && video?.id) {
          return (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard  info={video} />
            </Link>
          );
        }
        return null; 
      })}
    </div>
  );
};

export default VideoContainer;
