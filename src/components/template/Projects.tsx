import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { useTheme } from '../../contexts/ThemeContext';
import ProjectsGrid from '../organisms/ProjectsGrid';
import StarsBackground from '../organisms/StarsBackground';
import { projects, type Project } from '../../data/portfolio';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { theme } = useTheme();

  return (
    <>
      <section id="projects" className="relative py-20 transition-all duration-700 ease-out transform overflow-hidden">
        {/* Fondo iluminado y estrellado */}
        <StarsBackground theme={theme} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-10">
              Mis Proyectos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Una selección de proyectos que demuestran mi experiencia en desarrollo web moderno y diseño innovador.
            </p>
          </div>
          <ProjectsGrid projects={projects} onSelect={setSelectedProject} />
        </div>
      </section>
      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        isDeployed={selectedProject?.isDeployed}
      />
    </>
  );
};

export default Projects;