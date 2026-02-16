import React from 'react';

interface FeatureItemProps {
  feature: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => (
  <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full"></div>
    <span>{feature}</span>
  </li>
);

export default FeatureItem;
