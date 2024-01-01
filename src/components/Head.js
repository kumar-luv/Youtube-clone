import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoAppsSharp } from "react-icons/io5";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../constants";
import { cacheData } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const[showItems,setShowItems]=useState(false);
  const[suggestions,setSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.cacheResult);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchData();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheData({[searchQuery]:json[1]}));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid  grid-flow-col m-2 p-2 shadow-md sticky top-0 z-50 bg-white">
      <div className="flex col-span-1">
        <GiHamburgerMenu
          className="text-2xl mt-2.5 hover:cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <div className="flex gap-1 justify-center items-center">
          <BsYoutube className="text-red-600 text-3xl ml-2" />
          <span className="text-xl font-medium">Youtube</span>
        </div>
      </div>
      <div className="col-span-10 px-10 flex items-center">
        <div className="w-full">
          <div className="w-full flex">
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onFocus={() => setShowItems(true)}
              onBlur={() => setShowItems(false)}
              type="text"
              className="w-1/2 border border-gray-400 p-2 pl-5 rounded-l-full"
            />
            <button
              style={{ height: "41px" }}
              className="border border-gray-400 rounded-r-full w-10 flex items-center justify-center"
            >
              <AiOutlineSearch />
            </button>
          </div>
          {showItems && <div className="fixed">
            <ul style={{ width: '440px' }} className={suggestions.length && "bg-white py-2 px-5 rounded-lg shadow-sm"}>
              {suggestions.map((value) => {
                  return <li className="flex px-2 items-center gap-2 hover:bg-gray-100"><AiOutlineSearch/>{value}</li>
              })}
            </ul>
          </div>}
        </div>
        <div className="text-xl bg-zinc-700 p-3 ml-4 text-white rounded-full hover:cursor-pointer hover:bg-zinc-500">
          <TiMicrophone />
        </div>
      </div>

      <div className="flex gap-5 items-center text-xl">
        <BsCameraVideo />
        <IoAppsSharp />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 bg-red-600 rounded-full px-1 text-xs">
            9+
          </span>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/85893636?v=4"
          className="h-9 w-9 rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
