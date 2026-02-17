
import React from 'react';
import { FaReact, FaNodeJs, FaStripe, FaAngular, FaPython } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiFirebase, SiSocketdotio, SiPwa, SiFastapi, SiOpenai, SiTailwindcss, SiPrisma, SiSupabase, SiStrapi, SiSqlite, SiMysql, SiSass, SiExpress, SiFlask, SiThreedotjs } from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';
import { BiNetworkChart } from 'react-icons/bi';
import { TbBrandGoogle } from 'react-icons/tb';
import { SiOpencv } from 'react-icons/si';

interface TechTagProps {
  label: string;
  iconComponent?: string;
}

const iconMap: Record<string, React.ReactNode> = {
    'SiSpringboot': require('react-icons/si').SiSpringboot ? <require('react-icons/si').SiSpringboot className="inline mr-1 text-green-700" /> : null,
    'SiRabbitmq': require('react-icons/si').SiRabbitmq ? <require('react-icons/si').SiRabbitmq className="inline mr-1 text-orange-700" /> : null,
    'SiNginx': require('react-icons/si').SiNginx ? <require('react-icons/si').SiNginx className="inline mr-1 text-green-700" /> : null,
    'SiBootstrap': require('react-icons/si').SiBootstrap ? <require('react-icons/si').SiBootstrap className="inline mr-1 text-purple-700" /> : null,
  'React': <FaReact className="inline mr-1 text-blue-500" />,
  'TypeScript': <SiTypescript className="inline mr-1 text-blue-700" />,
  'Node.js': <FaNodeJs className="inline mr-1 text-green-600" />,
  'PostgreSQL': <SiPostgresql className="inline mr-1 text-blue-800" />,
  'Stripe': <FaStripe className="inline mr-1 text-primary-500" />,

  'Firebase': <SiFirebase className="inline mr-1 text-yellow-500" />,
  'Socket.io': <SiSocketdotio className="inline mr-1 text-gray-700" />,
  'PWA': <SiPwa className="inline mr-1 text-secondary-500" />,
  'Angular': <FaAngular className="inline mr-1 text-red-600" />,
  'Strapi': <SiStrapi className="inline mr-1 text-primary-600" />,
  'SQLite': <SiSqlite className="inline mr-1 text-blue-600" />,
  'MySQL': <SiMysql className="inline mr-1 text-blue-700" />,
  'Sass': <SiSass className="inline mr-1 text-pink-500" />,
  'Express': <SiExpress className="inline mr-1 text-gray-700" />,
  'Three.js': <SiThreedotjs className="inline mr-1 text-black" />,
  'Flask': <SiFlask className="inline mr-1 text-gray-700" />,
  'WebSockets': <BiNetworkChart className="inline mr-1 text-blue-500" />,
  'OpenAI API': <SiOpenai className="inline mr-1 text-green-700" />,
  'YOLOv5': <FaRobot className="inline mr-1 text-yellow-500" />,
  'Google Gemini': <TbBrandGoogle className="inline mr-1 text-cyan-600" />,
  'OpenCV': <SiOpencv className="inline mr-1 text-green-700" />,

  'Python': <FaPython className="inline mr-1 text-yellow-700" />,
  'FastAPI': <SiFastapi className="inline mr-1 text-teal-600" />,

  'OpenAI': <SiOpenai className="inline mr-1 text-green-700" />,
  'Tailwind CSS': <SiTailwindcss className="inline mr-1 text-teal-400" />,
  'Prisma': <SiPrisma className="inline mr-1 text-gray-900" />,
  'Supabase': <SiSupabase className="inline mr-1 text-green-700" />,
};

const TechTag: React.FC<TechTagProps> = ({ label, iconComponent }) => (
  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full flex items-center gap-1">
    {iconComponent ? iconMap[iconComponent] : iconMap[label]}
    {label}
  </span>
);

export default TechTag;
