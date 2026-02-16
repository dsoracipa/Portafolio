import React from 'react';
import ProfileImage from '../atoms/ProfileImage';
import { Github, Linkedin, FileText } from 'lucide-react';
import { socialLinks, profile } from '../../data/portfolio';

const ContactSocialLinks: React.FC = () => {
  const iconComponents = {
    github: { icon: Github, color: 'text-gray-900 dark:text-white', borderHover: 'hover:border-primary-400 dark:hover:border-primary-400' },
    linkedin: { icon: Linkedin, color: 'text-blue-700 dark:text-blue-400', borderHover: 'hover:border-blue-500 dark:hover:border-blue-400' },
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 h-auto">
      <div className="mb-6">
        <ProfileImage src={profile.profileImage} alt={profile.firstName} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Conecta conmigo en redes profesionales
      </h3>
      <div className="flex flex-col gap-4">
        {socialLinks
          .filter(link => link.icon === 'github' || link.icon === 'linkedin')
          .map(link => {
            const config = iconComponents[link.icon as keyof typeof iconComponents];
            const Icon = config.icon;
            
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg bg-white dark:bg-gray-900 shadow hover:shadow-md border border-gray-200 dark:border-gray-700 ${config.borderHover} transition-all duration-200`}
              >
                <Icon className={`w-6 h-6 ${config.color}`} />
                <span className="font-semibold text-gray-900 dark:text-white">{link.name}</span>
              </a>
            );
          })}
        <a
          href={profile.cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white dark:bg-gray-900 shadow hover:shadow-md border border-gray-200 dark:border-gray-700 hover:border-secondary-500 dark:hover:border-secondary-400 transition-all duration-200"
        >
          <FileText className="w-6 h-6 text-secondary-700 dark:text-secondary-400" />
          <span className="font-semibold text-gray-900 dark:text-white">CV (PDF)</span>
        </a>
      </div>
    </div>
  );
};

export default ContactSocialLinks;
