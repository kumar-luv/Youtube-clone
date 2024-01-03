// import React, { useEffect, useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { IoAppsSharp } from "react-icons/io5";
// import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
// import { TiMicrophone } from "react-icons/ti";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleMenu } from "../utils/appSlice";
// import { YOUTUBE_SEARCH_API, generateSearchURL } from "../utils/constants";
// import { cacheData } from "../utils/searchSlice";
// import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
// import { addDarkTheme, addLightTheme } from "../utils/themeSlice";
// import { addVideos } from "../utils/videoSlice";

// const Head = () => {
//   const dispatch = useDispatch();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showItems, setShowItems] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);
//   const searchCache = useSelector((store) => store.cacheResult);
//   const [transcript, setTranscript] = useState("");
//   const themeMode = useSelector((store)=>store.theme.themeMode);

//   // const searchQueryHandler = async () =>{
//   //     const videoData = await fetch(generateSearchURL(searchQuery));
//   //     const json = await videoData.json();
//   //     dispatch(addVideos(json.items));
//   // }
//   const searchQueryHandler = async () => {
//     try {
//       const videoData = await fetch(generateSearchURL(searchQuery));
//       const json = await videoData.json();
//       dispatch(addVideos(json.items));
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
  
  


//   const themeClickHandler = ()=>{
//     if(themeMode==="light"){
//       dispatch(addDarkTheme());
//     }else{
//       dispatch(addLightTheme());
//     }
//   }
//   const startSpeechRecognition = () => {
//     const recognition = new window.webkitSpeechRecognition();

//     recognition.onresult = (event) => {
//       const currentTranscript = event.results[0][0].transcript;
//       setTranscript(currentTranscript);
//     };

//     recognition.start();
//   };
//   useEffect(() =>{
//     document.querySelector('html').classList.remove("light","dark");
//     document.querySelector('html').classList.add(themeMode);
//   },[themeMode])
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (searchCache[searchQuery]) {
//         setSuggestions(searchCache[searchQuery]);
//       } else {
//         getSearchData();
//       }
//     }, 200);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [searchQuery]);

//   const getSearchData = async () => {
//     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
//     const json = await data.json();
//     setSuggestions(json[1]);
//     dispatch(cacheData({ [searchQuery]: json[1] }));
//   };

//   const toggleMenuHandler = () => {
//     dispatch(toggleMenu());
//   };
//   return (
//     <div className="grid  grid-flow-col m-2 p-2 shadow-md sticky top-0 z-50 bg-white dark:bg-gray-900  dark:text-white">
//       <div className="flex col-span-1 ">
//         <GiHamburgerMenu
//           className="text-2xl mt-2.5 hover:cursor-pointer"
//           onClick={toggleMenuHandler}
//         />
//         <div className="flex gap-1 justify-center items-center">
//           <Link className="flex"to={'/'}><BsYoutube className="text-red-600 text-3xl ml-2 hover:cursor-pointer" />
//           <span className="text-xl ml-1 font-medium hover:cursor-pointer">Youtube</span></Link>
//         </div>
//       </div>
//       <div className="col-span-10 px-10 flex items-center">
//         <div className="w-full">
//           <div className=" w-full flex ">
//             <input
//               value={searchQuery}
//               onChange={(event) => setSearchQuery(event.target.value)}
//               onFocus={() => setShowItems(true)}
//               onBlur={() => setShowItems(false)}
//               type="text"
//               className="w-1/2 border border-gray-400 p-2 pl-5 rounded-l-full dark:bg-gray-900"
//             />
//             <button
//               style={{ height: "41px" }}
//               className="border border-gray-400 rounded-r-full w-10 flex items-center justify-center"
//               onClick={(event) => {
//                 event.preventDefault();
//                 searchQueryHandler();
//               }}
//             >
//               <AiOutlineSearch />
//             </button>
//           </div>
//           {showItems && (
//             <div className="fixed rounded-lg">
//               <ul
//                 style={{ width: "440px" }}
//                 className={
//                   suggestions.length &&
//                   "bg-white py-2 px-5 dark:py-0 dark:px-0 rounded-lg shadow-sm"
//                 }
//               >
//                 {suggestions.map((value,index) => {
//                   return (
//                     <li key={index} className="flex px-2 py-2 items-center gap-2 hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700"
//                     >
//                       <AiOutlineSearch  />
//                       {value}
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           )}
//         </div>
//         <div
//           className="text-xl bg-zinc-700 p-3  text-white rounded-full hover:cursor-pointer hover:bg-zinc-500"
//           onClick={startSpeechRecognition}
//         >
//           <TiMicrophone />
//         </div>
//       </div>

//       <div className="flex gap-5 items-center text-xl">
//         <BsCameraVideo />
//         <IoAppsSharp />
//         <div className="relative">
//           <BsBell />
//           <span className="absolute bottom-2 left-2 bg-red-600 rounded-full px-1 text-xs">
//             9+
//           </span>
//         </div>
//         <div className="hover:cursor-pointer" onClick={themeClickHandler}>
//         {themeMode==="light"?(<MdOutlineLightMode />):(<MdLightMode />)}
//         </div>
//         <img
//           src="https://avatars.githubusercontent.com/u/85893636?v=4"
//           className="h-9 w-9 rounded-full"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default Head;
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoAppsSharp } from "react-icons/io5";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, generateSearchURL } from "../utils/constants";
import { cacheData } from "../utils/searchSlice";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { addDarkTheme, addLightTheme } from "../utils/themeSlice";
import { addVideos } from "../utils/videoSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [showItems, setShowItems] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.cacheResult);
  const [transcript, setTranscript] = useState("");
  const themeMode = useSelector((store)=>store.theme.themeMode);

  const themeClickHandler = () => {
    if (themeMode === "light") {
      dispatch(addDarkTheme());
    } else {
      dispatch(addLightTheme());
    }
  };

  const startSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (event) => {
      const currentTranscript = event.results[0][0].transcript;
      setTranscript(currentTranscript);
    };
    recognition.start();
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
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
    dispatch(cacheData({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid  grid-flow-col m-2 p-2 shadow-md sticky top-0 z-50 bg-white dark:bg-gray-900  dark:text-white">
      <div className="flex col-span-1">
        <GiHamburgerMenu
          className="text-2xl mt-2.5 hover:cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <div className="flex gap-1 justify-center items-center">
          <Link className="flex" to={"/"}>
            <BsYoutube className="text-red-600 text-3xl ml-2 hover:cursor-pointer" />
            <span className="text-xl ml-1 font-medium hover:cursor-pointer">
              Youtube
            </span>
          </Link>
        </div>
      </div>
      <div className="col-span-10 px-10 flex items-center">
        <div className="w-full">
          <div className=" w-full flex ">
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onFocus={() => setShowItems(true)}
              onBlur={() => setShowItems(false)}
              type="text"
              className="w-1/2 border border-gray-400 p-2 pl-5 rounded-l-full dark:bg-gray-900"
            />
            <Link to={"/search?q="+searchQuery}>
              <button
                style={{ height: "41px" }}
                className="border border-gray-400 rounded-r-full w-10 flex items-center justify-center"
              >
                <AiOutlineSearch />
              </button>
            </Link>
          </div>
          {showItems && (
            <div className="fixed rounded-lg">
              <ul
                style={{ width: "440px" }}
                className={
                  suggestions.length &&
                  "bg-white py-2 px-5 dark:py-0 dark:px-0 rounded-lg shadow-sm"
                }
              >
                {suggestions.map((value, index) => {
                  return (
                    <li
                      key={index}
                      className="flex px-2 py-2 items-center gap-2 hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <AiOutlineSearch />
                      {value}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div
          className="text-xl bg-zinc-700 p-3  text-white rounded-full hover:cursor-pointer hover:bg-zinc-500"
          onClick={startSpeechRecognition}
        >
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
        <div className="hover:cursor-pointer" onClick={themeClickHandler}>
          {themeMode === "light" ? (
            <MdOutlineLightMode />
          ) : (
            <MdLightMode />
          )}
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

