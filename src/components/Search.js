import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addVideos } from "../utils/videoSlice";
import { generateSearchURL } from "../utils/constants";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import SearchCard from "./SearchCard";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const dispatch = useDispatch();
  const renderVideos = useSelector((store) => store.video.videos);
  const [videos,setVideos] = useState([]);
  const searchQueryHandler = async () => {
    try {
      const videoData = await fetch(generateSearchURL(query));
      const json = await videoData.json();
      setVideos(json.items);
      console.log(json.items);
      dispatch(addVideos(json.items));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 console.log(videos.length);
  useEffect(() => {
    searchQueryHandler();
  }, []);
  return (
    <div className="flex flex-wrap w-10/12 dark:bg-gray-900 ml-24">
    {videos.slice(1).map((video) => {
      if (video && video?.id) {
        return (
          <Link key={video?.id} to={"/watch?v=" + video?.id?.videoId}>
            <SearchCard info={video} />
          </Link>
        );
      }
      return null; 
    })}
    
  </div>
  );
};

export default Search;
