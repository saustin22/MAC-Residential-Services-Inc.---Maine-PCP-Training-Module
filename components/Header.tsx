import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#800020] shadow-md no-print">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Person-Centered Planning Training
        </h1>
        <p className="text-sm text-gray-200">MAC Residential Services, Inc.</p>
      </div>
    </header>
  );
};

export default Header;
