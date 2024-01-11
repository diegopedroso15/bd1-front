import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, style }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${src})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '0.5rem',
    gridRow: '1 / 3',
    ...style,
  };

  return <div className={className} style={backgroundImageStyle} role="img" aria-label={alt} />;
};

export default Image;
