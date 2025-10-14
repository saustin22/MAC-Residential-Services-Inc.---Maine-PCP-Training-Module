import React, { useState } from 'react';

const Certificate: React.FC = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [completionDate, setCompletionDate] = useState(new Date().toLocaleDateString('en-US'));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div className="no-print mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800">Generate Your Certificate</h3>
        <p className="text-blue-700 mb-4">Enter your name and the completion date below, then click "Print Certificate".</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700">Employee Name</label>
            <input
              type="text"
              id="employeeName"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFC72C] focus:ring-[#FFC72C]"
              placeholder="Your Full Name"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="completionDate" className="block text-sm font-medium text-gray-700">Completion Date</label>
            <input
              type="text"
              id="completionDate"
              value={completionDate}
              onChange={(e) => setCompletionDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFC72C] focus:ring-[#FFC72C]"
            />
          </div>
        </div>
        <button onClick={handlePrint} className="mt-4 px-6 py-2 bg-[#800020] text-white font-bold rounded-lg shadow-md hover:bg-[#6b001a] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFC72C]">
          Print Certificate
        </button>
      </div>
      
      <div id="certificate-section" className="bg-white border-8 border-double border-[#36454F] p-8 aspect-[11/8.5]">
        <div className="text-center border-2 border-[#FFC72C] p-8 h-full flex flex-col justify-around">
          <div>
            <h1 className="text-4xl font-serif text-[#800020]">Certificate of Completion</h1>
            <p className="mt-4 text-lg text-gray-600">MAC Residential Services, Inc.</p>
          </div>
          <div>
            <p className="text-lg mt-8">This certifies that</p>
            <p className="text-3xl font-semibold text-[#36454F] my-4 border-b-2 border-gray-300 pb-2 mx-auto max-w-md h-12">
              {employeeName || '[Employee Name]'}
            </p>
            <p className="text-lg">has completed the training</p>
            <p className="text-2xl font-bold text-[#800020] my-2">Person-Centered Planning for DSPs</p>
            <p className="text-lg">on <span className="font-semibold text-[#36454F]">{completionDate || '[Date]'}</span></p>
          </div>
          <div>
            <div className="flex justify-around mt-12 text-gray-700">
              <div className="w-1/2">
                <p className="border-t-2 border-gray-400 pt-2">Trainer</p>
              </div>
              <div className="w-1/2">
                <p className="border-t-2 border-gray-400 pt-2">Signature</p>
              </div>
            </div>
            <p className="mt-8 text-xs text-gray-500 italic">
              This training satisfies the Maine DHHS OADS requirement for DSP qualification in Person-Centered Planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
