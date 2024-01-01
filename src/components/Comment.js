import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { useState } from "react";

const Comment = ({ data }) => {
  const { name, Comment, replies } = data;
  const [replyText, setReplyText] = useState("");
  const [value, setValue] = useState(0);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const handleReply = () => {
    setShowReplyBox(!showReplyBox);
  };
  return (
    <div className="flex bg-gray-100 rounded-lg p-2 my-2">
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa&pid=Api&P=0&h=180"
        alt="user-icon"
        className="h-12 w-12"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{Comment}</p>
        <div className="flex m-1 items-center hover:cursor-pointer">
          <FaRegThumbsUp
            onClick={() => {
              setValue(value + 1);
            }}
          />
          <p className="ml-1">{value}</p>
          <FaRegThumbsDown className="ml-3 hover:cursor-pointer " />
          <p
            className="font-bold ml-4 hover:cursor-pointer"
            onClick={handleReply}
          >
            Reply
          </p>
          {showReplyBox && (
            <div className="ml-2 border bg-slate-300">
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Add a reply ..."
                className="p-1"
              />
              <button className="rounded-lg p-1">Reply</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
