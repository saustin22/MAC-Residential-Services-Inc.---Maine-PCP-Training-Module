import React from 'react';
import { facilitatorGuideData } from '../constants';

const FacilitatorGuide: React.FC = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold text-[#800020] border-b-2 border-[#FFC72C] pb-2 mb-6">
        Person-Centered Planning: Facilitator Guide
      </h2>
      <div className="space-y-8">
        {facilitatorGuideData.map((section, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-[#36454F] mb-3">{section.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {section.content.map((item, itemIndex) => {
                if (typeof item === 'string') {
                  return <li key={itemIndex}>{item}</li>;
                }
                if (item.type === 'strong') {
                  return <li key={itemIndex}><strong className="text-green-700">{item.text}</strong></li>;
                }
                if (item.type === 'weak') {
                  return <li key={itemIndex}><em className="text-red-700">{item.text}</em></li>;
                }
                return null;
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitatorGuide;
