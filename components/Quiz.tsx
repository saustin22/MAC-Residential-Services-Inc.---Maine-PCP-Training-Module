import React, { useState, useCallback } from 'react';
import { quizQuestions } from '../constants';
import { QuizQuestion, QuestionType } from '../types';

interface QuizProps {
  onQuizComplete: (passed: boolean) => void;
}

const Quiz: React.FC<QuizProps> = ({ onQuizComplete }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const checkAnswer = (question: QuizQuestion, answer: string): boolean => {
    if (!answer) return false;
    if (question.type === QuestionType.ShortAnswer || question.type === QuestionType.MultipleChoice || question.type === QuestionType.TrueFalse) {
      if (Array.isArray(question.correctAnswer)) {
        return question.correctAnswer.some(keyword => answer.toLowerCase().includes(keyword));
      }
      return answer === question.correctAnswer;
    }
    return true; // Reflections are not graded
  };

  const handleSubmit = useCallback(() => {
    let correctCount = 0;
    const gradedQuestions = quizQuestions.filter(q => q.type !== QuestionType.Reflection);

    gradedQuestions.forEach(question => {
      if (checkAnswer(question, answers[question.id])) {
        correctCount++;
      }
    });

    const calculatedScore = Math.round((correctCount / gradedQuestions.length) * 100);
    setScore(calculatedScore);
    setSubmitted(true);
    onQuizComplete(calculatedScore >= 80);
  }, [answers, onQuizComplete]);
  
  const renderQuestion = (question: QuizQuestion) => {
    const isCorrect = submitted && checkAnswer(question, answers[question.id]);
    const isIncorrect = submitted && !isCorrect && question.type !== QuestionType.Reflection;

    const baseInputClasses = "mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFC72C] focus:ring focus:ring-[#FFC72C] focus:ring-opacity-50";
    let feedbackClasses = '';
    if (isCorrect) feedbackClasses = 'border-green-500 ring-2 ring-green-200';
    if (isIncorrect) feedbackClasses = 'border-red-500 ring-2 ring-red-200';
    
    return (
      <div key={question.id} className={`p-4 rounded-lg border ${submitted ? (isCorrect ? 'border-green-300 bg-green-50' : isIncorrect ? 'border-red-300 bg-red-50' : 'bg-gray-50') : 'bg-gray-50'}`}>
        <p className="font-semibold text-gray-800">{question.id}. {question.text}</p>
        {question.type === QuestionType.ShortAnswer && (
          <input type="text" value={answers[question.id] || ''} onChange={(e) => handleAnswerChange(question.id, e.target.value)} className={`${baseInputClasses} ${feedbackClasses}`} disabled={submitted}/>
        )}
        {question.type === QuestionType.Reflection && (
          <textarea value={answers[question.id] || ''} onChange={(e) => handleAnswerChange(question.id, e.target.value)} rows={3} className={`${baseInputClasses}`} disabled={submitted}/>
        )}
        {(question.type === QuestionType.MultipleChoice || question.type === QuestionType.TrueFalse) && (
          <div className="mt-2 space-y-2">
            {question.options?.map(option => (
              <label key={option} className="flex items-center p-2 rounded-md transition-colors hover:bg-gray-100">
                <input type="radio" name={`q${question.id}`} value={option} checked={answers[question.id] === option} onChange={(e) => handleAnswerChange(question.id, e.target.value)} className="h-4 w-4 text-[#800020] focus:ring-[#FFC72C]" disabled={submitted}/>
                <span className={`ml-3 ${submitted && option === question.correctAnswer ? 'text-green-700 font-bold' : ''} ${submitted && answers[question.id] === option && option !== question.correctAnswer ? 'text-red-700 line-through' : ''}`}>{option}</span>
              </label>
            ))}
          </div>
        )}
        {isIncorrect && <p className="text-sm text-red-600 mt-2">Correct answer: {Array.isArray(question.correctAnswer) ? `Expected keywords: ${question.correctAnswer.join(', ')}` : question.correctAnswer}</p>}
      </div>
    );
  };
  
  if (submitted) {
    const passed = score >= 80;
    return (
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#800020]">Quiz Results</h2>
        <p className="mt-4 text-5xl font-bold" style={{ color: passed ? '#16a34a' : '#dc2626' }}>{score}%</p>
        <p className={`mt-2 text-xl font-semibold ${passed ? 'text-green-700' : 'text-red-700'}`}>
          {passed ? "Congratulations, you passed!" : "You did not pass. A score of 80% is required."}
        </p>
        {passed && <p className="mt-2 text-gray-600">You can now access your certificate in the 'Certificate' tab.</p>}
        <div className="mt-8 space-y-4 text-left">
          <h3 className="text-xl font-bold text-center">Review Your Answers</h3>
          {quizQuestions.map(renderQuestion)}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#800020] mb-6">Test Your Knowledge</h2>
      <div className="space-y-6">
        {quizQuestions.map(renderQuestion)}
      </div>
      <div className="mt-8 text-center">
        <button onClick={handleSubmit} className="px-8 py-3 bg-[#FFC72C] text-[#36454F] font-bold rounded-lg shadow-md hover:bg-[#f0b90b] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800020]">
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;
