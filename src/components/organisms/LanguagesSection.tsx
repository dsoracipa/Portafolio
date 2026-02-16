import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import CategoryTag from '../atoms/CategoryTag';
import { languages } from '../../data/portfolio';

const LanguagesSection: React.FC = () => (
  <div className="mt-14 text-center">
    <div className="flex items-center justify-start mb-2">
      <FaGlobeAmericas className="w-7 h-7 text-primary-600 dark:text-primary-400 mr-3" />
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Idiomas</h2>
    </div>
    <div className="flex flex-row justify-start gap-4 mt-4 rounded-xl py-4">
      {languages.map((lang, idx) => (
        <CategoryTag 
          key={idx}
          className={`px-4 py-2 bg-gradient-to-r ${idx === 0 ? 'from-primary-500 to-teal-600' : 'from-secondary-500 to-amber-600'} text-white text-md`}
        >
          {lang.name}: {lang.level}
        </CategoryTag>
      ))}
    </div>
  </div>
);

export default LanguagesSection;
