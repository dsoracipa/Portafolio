import React from 'react';
import { CheckCircle } from 'lucide-react';
import { contactReasons } from '../../data/portfolio';

const WhyWorkWithMe: React.FC = () => (
  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6">
    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
      ¿Por qué trabajar conmigo?
    </h4>
    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
      {contactReasons.map((reason, idx) => (
        <li key={idx} className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span>{reason.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default WhyWorkWithMe;
