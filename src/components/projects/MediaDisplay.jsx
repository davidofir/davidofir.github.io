import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../common/styles/MediaDisplay.css'
const MediaDisplay = ({ videoUrl, imageUrls }) => {
  if (videoUrl) {
    return (
      <div className="video-container">
        <iframe
          className="responsive-iframe"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded video"
        ></iframe>
      </div>
    );
  } else if (imageUrls && imageUrls.length > 0) {
    return (
      <Carousel>
        {imageUrls.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 responsive-image"
              src={imageUrl}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  } else {
    return null;
  }
};

export default MediaDisplay;
