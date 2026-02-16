import React from 'react';
import SkillIcon from '../atoms/SkillIcon';
import { 
  FaNodeJs, FaPython, FaDocker, FaGitAlt, FaGithub, FaCode, FaPhp, FaReact 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMysql, SiMongodb, SiDjango, 
  SiGithubactions, SiJavascript, SiNestjs, SiVite, SiPostgresql,
  SiMariadb, SiKubernetes, SiGooglecloud, SiJest, SiCypress, SiSwagger
} from 'react-icons/si';
import { skillCategories } from '../../data/portfolio';

// Mapeo de nombres de iconos a componentes de react-icons
const iconMap: Record<string, React.ReactElement> = {
  FaPython: <FaPython className="text-yellow-700" />,
  SiDjango: <SiDjango className="text-green-900" />,
  SiNestjs: <SiNestjs className="text-red-600" />,
  FaNodeJs: <FaNodeJs className="text-green-600" />,
  FaPhp: <FaPhp className="text-primary-700" />,
  FaReact: <FaReact className="text-teal-500" />,
  SiJavascript: <SiJavascript className="text-yellow-400" />,
  SiTypescript: <SiTypescript className="text-blue-700" />,
  SiVite: <SiVite className="text-secondary-600" />,
  SiTailwindcss: <SiTailwindcss className="text-teal-400" />,
  SiPostgresql: <SiPostgresql className="text-blue-600" />,
  SiMysql: <SiMysql className="text-blue-600" />,
  SiMariadb: <SiMariadb className="text-blue-800" />,
  SiMongodb: <SiMongodb className="text-green-700" />,
  FaDocker: <FaDocker className="text-teal-500" />,
  SiKubernetes: <SiKubernetes className="text-blue-600" />,
  SiGooglecloud: <SiGooglecloud className="text-blue-600" />,
  SiGithubactions: <SiGithubactions className="text-gray-900 dark:text-white" />,
  FaGitAlt: <FaGitAlt className="text-orange-600" />,
  FaGithub: <FaGithub className="text-gray-900 dark:text-white" />,
  SiJest: <SiJest className="text-red-600" />,
  SiCypress: <SiCypress className="text-gray-700" />,
  SiSwagger: <SiSwagger className="text-green-600" />
};

const SkillsGrid: React.FC = () => {
  // Dividir las categorías en dos columnas
  const leftCategories = ['Backend', 'Bases de datos', 'DevOps / CI/CD', 'Testing'];
  const rightCategories = ['Frontend', 'Control de versiones', 'Herramientas'];

  const getSkillsByCategories = (categoryNames: string[]) => {
    return skillCategories.filter(cat => categoryNames.includes(cat.name));
  };

  return (
    <div className="mb-16">
      <div className="flex items-center justify-start mb-8">
        <FaCode className="w-7 h-7 text-primary-600 dark:text-primary-400 mr-3" />
        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 dark:text-white">Lenguajes y Tecnología</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Columna Izquierda */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-400 hover:shadow-xl">
          {getSkillsByCategories(leftCategories).map((category, idx) => (
            <div key={idx} className={idx > 0 ? 'mt-8' : ''}>
              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillIcon
                    key={skillIdx}
                    label={skill.name}
                    icon={
                      skill.iconComponent 
                        ? iconMap[skill.iconComponent] || <span>{skill.icon || '📦'}</span>
                        : <span className="text-lg">{skill.icon || '📦'}</span>
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Columna Derecha */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-400 hover:shadow-xl">
          {getSkillsByCategories(rightCategories).map((category, idx) => (
            <div key={idx} className={idx > 0 ? 'mt-8' : ''}>
              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillIcon
                    key={skillIdx}
                    label={skill.name}
                    icon={
                      skill.iconComponent 
                        ? iconMap[skill.iconComponent] || <span>{skill.icon || '📦'}</span>
                        : <span className="text-lg">{skill.icon || '📦'}</span>
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
