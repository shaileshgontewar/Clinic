import { AiFillHome } from "react-icons/ai";
import Star from "./star";
function Post({ post, showPopup }) {
  return (
    <>
      <div className="post" key={post.clinicId}>
        <div className="info">
          <img
            src={"https://api.soowgood.com/img/" + post.providerImage}
            alt={post.providerImage}
          />
          <h3>{post.name}</h3>
          <p>
            {post.service < 10
              ? post.service
                ? post.service
                : "Not available"
              : post.service.slice(0, 15)}
          </p>
          <div className="review">
            <Star star={post.totalratingpoint} />
            <sub>{post.totalreview} review</sub>
          </div>
        </div>
        <div className="address">
          <h4>
            <span>
              <AiFillHome className="add-icon" />
            </span>
            Place
          </h4>
          <b>{post.clinicName}</b>
          <p>
            {post.clinicAddress < 10
              ? post.clinicAddress
              : post.clinicAddress.slice(0, 55)}
          </p>
        </div>
        <button
          className={post.appointmentType === "Online" ? "online" : "clinic"}
        >
          {post.appointmentType}
        </button>
        <div className="btn-container">
          <button className="view-btn">View more</button>
          <button className="book-btn" onClick={() => showPopup(post)}>
            Book now
          </button>
        </div>
      </div>
    </>
  );
}
export default Post;
