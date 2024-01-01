// import React, { useState } from "react";
// import { commentsData } from "../constants";
// import Comment from "./Comment";


// const CommentList = ({comments}) =>{
//     return comments.map((comment,index) => (
//     <div>
//         <Comment key={index} data ={comment}/>
//         <div className="pl-5 border border-l-black ml-5">
//         <CommentList comments={comment.replies}/>
//         </div>
//     </div>
//     ));
// };
// const CommentsContainer = () => {
//     const[data,SetData] = useState(commentsData);
//   return (
//     <div className="m-5 p-2">
//       <h1 className="font-bold text-2xl">Comments:</h1>
//       <CommentList comments={commentsData}/>
//     </div>
//   );
// };

// export default CommentsContainer;
import React, { useState } from "react";
import { commentsData } from "../constants";
import Comment from "./Comment";

const CommentList = ({ comments, setData,completeData }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} completeData = {completeData} setData={setData} />
      {comment.replies.length > 0 && (
        <div className="pl-5 border border-l-black ml-5">
          <CommentList comments={comment.replies} completeData = {completeData} setData={setData} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  const [data, setData] = useState(commentsData);

  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentList comments={data} completeData = {data} setData={setData} />
    </div>
  );
};

export default CommentsContainer;
