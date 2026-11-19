import React from "react";

const ShareLinks = () => {
  const shareUrl = encodeURIComponent(new URL("/item-details", window.location.origin).href);

  return (
    <div className="nft__item_share">
      <h4>Share</h4>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
        <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
      </a>
      <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
        <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
      </a>
      <a href={`mailto:?body=${shareUrl}`} aria-label="Share by email">
        <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default ShareLinks;
