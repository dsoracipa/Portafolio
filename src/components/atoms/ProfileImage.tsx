import React from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className = '' }) => {
  // Evita doble slash si el src ya empieza con BASE_URL
  const normalizedSrc = src.replace(/\/\/+/, '/');
  return (
    <div className={`w-32 h-32 mx-auto bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full p-1 flex items-center justify-center shadow-lg ${className}`}>
      <img
        src={normalizedSrc}
        alt={alt}
        className="w-28 h-28 rounded-full object-cover"
      />
    </div>
  );
};

export default ProfileImage;
