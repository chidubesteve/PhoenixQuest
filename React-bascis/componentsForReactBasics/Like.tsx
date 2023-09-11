import { useState } from "react";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";

interface Props {
    onClick: () => void;
}

const Like = ({onClick}: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    onClick()
  };

  if (isLiked)
    return (
      <BsFillHeartFill color="#ff6b81" size={20} onClick={handleLikeClick} />
    );
  return <BsHeart color="#ff6b81" size={20} onClick={handleLikeClick} />;
};

export default Like;
