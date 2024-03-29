import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

export default function TechImage({ obj }) {
  if (obj.image_url) {
    return (
      <Image
        loading="lazy"
        src={obj.image_url}
        className="tech-image"
        layout="intrinsic"
        height={75}
        width={75}
      />

    );
  }
  return (
    <Image
      loading="lazy"
      src={obj.imageUrl}
      className="tech-image"
      layout="responsive"
      height={75}
      width={75}
    />
  );
}

TechImage.propTypes = {
  obj: PropTypes.shape({
    imageUrl: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};
