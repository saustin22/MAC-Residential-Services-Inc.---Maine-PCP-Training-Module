import React, { useState, useCallback } from 'react';
import { slidesData } from '../constants';
import { SlideContent } from '../types';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';

const Slide: React.FC<{ slide: SlideContent }> = ({ slide }) => {
    const renderContent = () => {
      const contentArray = Array.isArray(slide.content) ? slide.content : slide.content ? [slide.content] : [];
        switch (slide.type) {
            case 'title':
                return (
                    <div className="text-center flex flex-col justify-center items-center h-full">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#800020]">{slide.title}</h1>
                        <p className="mt-4 text-2xl md:text-3xl text-gray-700">{slide.subtitle}</p>
                        <div className="absolute bottom-12 text-center w-full">
                            <p className="text-lg font-semibold text-gray-600">{slide.footer}</p>
                            <p className="text-sm text-gray-500 mt-1">{slide.presenter}</p>
                        </div>
                    </div>
                );
            case 'bullets':
            case 'definition':
            case 'prompt':
            case 'final':
                return (
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-6">{slide.title}</h2>
                        <ul className="space-y-4 text-lg md:text-xl text-gray-800">
                            {contentArray.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-[#FFC72C] mr-3 mt-1">&#9679;</span>
                                    <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case 'table':
                return (
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-6">{slide.title}</h2>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                              <thead>
                                  <tr>
                                      {slide.table?.headers.map((header, index) => (
                                          <th key={index} className="border-b-2 border-gray-400 p-3 bg-gray-100 text-[#36454F] font-bold text-lg">{header}</th>
                                      ))}
                                  </tr>
                              </thead>
                              <tbody>
                                  {slide.table?.rows.map((row, rowIndex) => (
                                      <tr key={rowIndex} className="border-b border-gray-200">
                                          {row.map((cell, cellIndex) => (
                                              <td key={cellIndex} className="p-3 text-gray-700 text-base">{cell}</td>
                                          ))}
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-inner min-h-[450px] md:min-h-[500px] flex flex-col justify-center relative">
            {renderContent()}
            {slide.notes && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t border-gray-200 rounded-b-lg mt-8">
                    <p className="text-sm text-gray-600 italic"><strong className="font-semibold text-gray-800">Speaker Notes:</strong> {slide.notes}</p>
                </div>
            )}
        </div>
    );
};

const Slideshow: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev < slidesData.length - 1 ? prev + 1 : prev));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
    }, []);
    
    return (
        <div>
            <div className="relative">
                <Slide slide={slidesData[currentSlide]} />
            </div>

            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="flex items-center gap-2 px-4 py-2 bg-[#36454F] text-white rounded-md disabled:bg-gray-300 hover:bg-[#50626e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFC72C]"
                >
                    <ArrowLeftIcon />
                    Previous
                </button>
                <span className="text-gray-600 font-semibold">
                    Slide {currentSlide + 1} of {slidesData.length}
                </span>
                <button
                    onClick={nextSlide}
                    disabled={currentSlide === slidesData.length - 1}
                    className="flex items-center gap-2 px-4 py-2 bg-[#36454F] text-white rounded-md disabled:bg-gray-300 hover:bg-[#50626e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFC72C]"
                >
                    Next
                    <ArrowRightIcon />
                </button>
            </div>
        </div>
    );
};

export default Slideshow;
