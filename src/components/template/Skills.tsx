import React from 'react';
import { FaUsers, FaLightbulb } from 'react-icons/fa';
import AcademicInfoCard from '../molecules/AcademicInfoCard';
import SkillsGrid from '../organisms/SkillsGrid';
import SkillCategoryCard from '../molecules/SkillCategoryCard';
import LanguagesSection from '../organisms/LanguagesSection';
import { softSkills } from '../../data/portfolio';

const Skills: React.FC = () => {
  // Soft Skills
  const otherSkills = [
    {
      category: 'Soft Skills',
      icon: FaUsers,
      skills: softSkills
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-teal-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-all duration-700 ease-out">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-10">
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
        </div>
        {/* Información Académica */}
        <AcademicInfoCard />
        {/* Programming & Technologies */}
        <SkillsGrid />
        {/* Otras Skills */}
        <div className="mb-8">
          <div className="flex items-center mb-8">
            <FaLightbulb className="w-8 h-8 text-secondary-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Otras Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {otherSkills.map((category, index) => (
              <SkillCategoryCard
                key={index}
                icon={category.icon}
                category={category.category}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
        {/* Idiomas */}
        <LanguagesSection />
      </div>
    </section>
  );
};

export default Skills;