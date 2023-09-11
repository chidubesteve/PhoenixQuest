import React, { useState } from "react";

interface Props {
  maxChar?: number;
  children: string;
}

const ExpandableText = ({ maxChar = 200, children }: Props) => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMoreClick = () => {
    setReadMore(!readMore);
  };
  // Determine whether to show the entire text or a truncated version
  const displayText = readMore ? children : children.slice(0, maxChar);

  // Determine whether to show the "Read more" or "Read less" button
  const buttonText = readMore ? "Read less" : "Read more";

  return (
    <>
      <div>{displayText} </div>
      {children.length >= maxChar && (
        <button onClick={handleReadMoreClick}>{buttonText}</button>
      )}
    </>
  );
};

export default ExpandableText;
