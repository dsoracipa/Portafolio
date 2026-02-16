import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../contexts/useScrollAnimation';
import ProfileImage from '../atoms/ProfileImage';
import SocialIcons from '../molecules/SocialIcons';
import HeroButtons from '../molecules/HeroButtons';
import ScrollDownIndicator from '../atoms/ScrollDownIndicator';
import { profile } from '../../data/portfolio';

const texts = profile.titlesRotating;

interface HeroSectionProps {
  scrollToExperience: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToExperience }) => {
  const [ref, isVisible] = useScrollAnimation();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[currentIndex];
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <section
      id="home"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-4 md:px-8 lg:px-32 flex flex-col items-center justify-center min-h-screen transition-all duration-700 ease-out transform relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-400 to-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-3/4 w-96 h-96 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-[14%] right-1/4 w-32 h-32 bg-gradient-to-r from-teal-400 to-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-3000"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center bg-opacity-80 rounded-xl p-8">
        <div className="mb-6">
          <ProfileImage src={profile.profileImage} alt={profile.firstName} />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          Hola, soy{' '}
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {profile.firstName}!
          </span>
        </h1>
        <div className="h-10 md:h-12 mb-6">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          {profile.description}
        </p>
        <HeroButtons />
        <SocialIcons />
        <ScrollDownIndicator onClick={scrollToExperience} />
      </div>
    </section>
  );
};

export default HeroSection;
