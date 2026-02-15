import React from 'react';
import { PiGraduationCapBold, PiCalendarBold } from 'react-icons/pi';
import { FaSchool } from 'react-icons/fa';
import { education } from '../../data/portfolio';

const AcademicInfoCard: React.FC = () => {
  const edu = education[0]; // Tomamos la primera (y única) educación

  return (
    <div className="mb-16">
      <div className="flex items-center mb-6">
        <PiGraduationCapBold className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Información Académica</h2>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-blue-100 dark:border-blue-900 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-400 hover:shadow-lg">
        <div className="flex items-start">
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
            <FaSchool className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {edu.degree}
            </h3>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <PiCalendarBold className="w-4 h-4 mr-2" />
              <span className="text-sm">{edu.institution} • {edu.startDate}-{edu.isCurrent ? 'Presente' : edu.endDate}</span>
            </div>
            {edu.relevantCourses && edu.relevantCourses.length > 0 && (
              <div className="mt-3">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">Cursos relevantes:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course, idx) => (
                    <span key={idx} className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
            {edu.isCurrent ? 'En curso' : 'Completado'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicInfoCard;
