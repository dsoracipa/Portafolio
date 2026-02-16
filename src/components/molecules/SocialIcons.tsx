import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { socialLinks, profile } from '../../data/portfolio';

interface SocialIconsProps {
  className?: string;
}

const iconComponents = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

const hoverColors = {
  github: 'hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900',
  linkedin: 'hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900',
  email: 'hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900',
};

const SocialIcons: React.FC<SocialIconsProps> = ({ className = '' }) => {
  const icons = [
    ...socialLinks.map(link => ({
      href: link.url,
      label: link.name,
      icon: iconComponents[link.icon as keyof typeof iconComponents],
      hover: hoverColors[link.icon as keyof typeof hoverColors],
    })),
    {
      href: profile.cvFile,
      label: 'CV PDF',
      icon: FileText,
      hover: 'hover:bg-red-600 hover:text-white dark:hover:bg-red-400 dark:hover:text-gray-900',
    }
  ];

  return (
    <div className={`flex items-center justify-center space-x-6 mb-6 ${className}`}>
      {icons.map(({ href, label, icon: Icon, hover }) => {
        const isExternal = href.startsWith('http') || href.startsWith('mailto');
        
        return (
          <a
            key={label}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={label}
            className={`p-3 bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full transform hover:scale-110 transition-all duration-300 ${hover}`}
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
