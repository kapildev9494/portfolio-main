import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ 
  position = { top: '50%', left: '50%' }, 
  size = { width: '20%', height: '30%' },
  opacity = { mobile: 10, desktop: 20 },
  colors = { from: 'purple-500', to: 'pink-500' },
  animation = 'animate-pulse',
  blur = 'blur-3xl'
}) => {
  // Destructure position and size with default values
  const { top, left, right, bottom } = position;
  const { width, height } = size;

  // Create dynamic styles based on position props
  const positionStyles = {
    position: 'absolute',
    width: width,
    height: height,
    ...(top !== undefined && { top }),
    ...(left !== undefined && { left }),
    ...(right !== undefined && { right }),
    ...(bottom !== undefined && { bottom }),
    transform: left || right ? (left ? 'translate(-50%, -50%)' : 'translate(50%, -50%)') : 'translate(-50%, -50%)',
    zIndex: -1,
  };

  // Dynamic opacity classes for responsive design
  const opacityClasses = `opacity-${opacity.mobile} md:opacity-${opacity.desktop}`;

  return (
    <div
      className="pointer-events-none"
      style={positionStyles}
      aria-hidden="true"
      role="presentation"
    >
      <div 
        className={`w-full h-full bg-gradient-to-r from-${colors.from} to-${colors.to} rounded-full ${opacityClasses} ${blur} ${animation}`}
      />
    </div>
  );
};

// Define prop types with comprehensive validation
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  opacity: PropTypes.shape({
    mobile: PropTypes.number,
    desktop: PropTypes.number,
  }),
  colors: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }),
  animation: PropTypes.string,
  blur: PropTypes.string,
};

export default BlurBlob;