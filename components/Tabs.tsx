import React from 'react';
import { TabID } from '../types';

interface Tab {
  id: TabID;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: TabID;
  onTabClick: (tabId: TabID) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <nav className="flex flex-wrap border-b-2 border-gray-200 no-print">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          disabled={tab.disabled}
          onClick={() => onTabClick(tab.id)}
          className={`flex items-center gap-2 px-4 py-3 font-semibold text-sm sm:text-base border-b-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FFC72C]
            ${
              activeTab === tab.id
                ? 'border-[#800020] text-[#800020]'
                : 'border-transparent text-gray-500 hover:text-[#36454F] hover:border-gray-300'
            }
            ${
              tab.disabled 
                ? 'cursor-not-allowed opacity-50' 
                : ''
            }
          `}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default Tabs;
