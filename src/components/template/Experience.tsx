import React from 'react';
import { useScrollAnimation } from '../../contexts/useScrollAnimation';
import CertificationsTitle from '../molecules/CertificationsTitle';
import SectionTitle from '../molecules/SectionTitle';
import CertificationCard from '../molecules/CertificationCard';
import { experiences, certifications } from '../../data/portfolio';

const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-white dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experiencia Laboral */}
        <div className="mb-16">
          <SectionTitle>Experiencia Laboral</SectionTitle>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative min-h-[200px] border-l-2 border-gray-500 dark:border-gray-100 pl-6"
              >
                {/* Círculo en la barra vertical */}
                <span className="absolute -left-[8px] top-1 w-3.5 h-3.5 bg-gray-500 dark:bg-gray-100 rounded-full border-2 border-gray-500 dark:border-gray-100"></span>
                <div>
                  <span className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
                    {exp.startDate} – {exp.isCurrent ? 'Presente' : exp.endDate}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mt-2">
                    {exp.title}
                  </h3>
                  <span className="block text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                    {exp.company}
                  </span>
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 flex items-start"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        {certifications.length > 0 && (
          <div>
            <CertificationsTitle />
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-0 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {certifications.map((cert) => (
                <CertificationCard
                  key={cert.id}
                  title={cert.title}
                  date={cert.date}
                  description={cert.description}
                  link={cert.link}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;