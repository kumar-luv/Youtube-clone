import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    dispatch(addVideos(json.items));
    setVideos(json.items);
  };


  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => {
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
