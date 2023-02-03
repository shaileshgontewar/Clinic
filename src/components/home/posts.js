import Popup from "./popup";
import Post from "./Post";
import { useState } from "react";

export default function Posts({ users }) {
  const [open, setOpen] = useState("");
  const showPopup = (post) => {
    if (!post) {
      setOpen(null);
    } else {
      console.log(post);
      setOpen(post);
    }
  };
  return (
    <div className="container">
      {open && <Popup showPopup={showPopup} open={open} />}
      <div className="post-container">
        {users?.map((post) => {
          return (
            <div key={post.clinicId}>
              <Post post={post} showPopup={showPopup} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
