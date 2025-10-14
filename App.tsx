import React, { useState, useCallback } from 'react';
import { TabID } from './types';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Slideshow from './components/Slideshow';
import FacilitatorGuide from './components/FacilitatorGuide';
import Quiz from './components/Quiz';
import Certificate from './components/Certificate';
import { PresentationIcon, FileTextIcon, QuizIcon, TrophyIcon } from './components/Icons';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabID>(TabID.Slides);
  const [quizPassed, setQuizPassed] = useState<boolean>(false);

  const handleQuizCompletion = useCallback((passed: boolean) => {
    setQuizPassed(passed);
    if (passed) {
      setActiveTab(TabID.Certificate);
    }
  }, []);

  const TABS = [
    { id: TabID.Slides, label: 'Slides', icon: <PresentationIcon /> },
    { id: TabID.Guide, label: 'Facilitator Guide', icon: <FileTextIcon /> },
    { id: TabID.Quiz, label: 'Quiz', icon: <QuizIcon /> },
    { id: TabID.Certificate, label: 'Certificate', icon: <TrophyIcon />, disabled: !quizPassed },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case TabID.Slides:
        return <Slideshow />;
      case TabID.Guide:
        return <FacilitatorGuide />;
      case TabID.Quiz:
        return <Quiz onQuizComplete={handleQuizCompletion} />;
      case TabID.Certificate:
        return <Certificate />;
      default:
        return <Slideshow />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#36454F]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Tabs tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />
        <div className="mt-6 bg-white rounded-lg shadow-lg p-4 sm:p-8">
          {renderContent()}
        </div>
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        <p>MAC Residential Services, Inc. &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;
