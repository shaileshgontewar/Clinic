import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";
const Star = ({ star }) => {
  const rating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <BsStarFill className="star" />
        ) : star >= number ? (
          <BsStarHalf className="star" />
        ) : (
          <BsStar className="star" />
        )}
      </span>
    );
  });
  return <>{rating}</>;
};

export default Star;
