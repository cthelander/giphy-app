import React from 'react';

const GifBox = ({ gif }) => {
  return (
	  <div className="box gifBox">
      <img
        alt="Broken gif"
        src={gif}
        crossOrigin="anonymous"/>
    </div>
  );
};

export default GifBox;
