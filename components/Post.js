import { AiFillStar, AiFillHome } from "react-icons/ai";
function Post({ post }) {
  return (
    <>
      <div className="post" key={post.clinicId}>
        <div className="info">
          <img
            src={"https://api.soowgood.com/img/" + post.providerImage}
            alt={post.providerImage}
          />
          <h3>{post.name}</h3>
          <p>{post.service}</p>
          <div className="review">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
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
          <p>{post.clinicAddress}</p>
        </div>
        <button className="online-btn">{post.appointmentType}</button>
        <div className="btn-container">
          <button className="view-btn">View more</button>
          <button className="book-btn">Book now</button>
        </div>
      </div>
    </>
  );
}
export default Post;
