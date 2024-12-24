import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Question, QuestionnaireAnswers } from '../../types/forms';
import { questions } from '../../data/questionnaire';
import QuestionRenderer from '../../components/forms/QuestionRenderer';
import ProgressBar from '../../components/ProgressBar';

const Questionnaire: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const navigate = useNavigate();

  useEffect(() => {
    const tempUserData = sessionStorage.getItem('tempUserData');
    if (!tempUserData) {
      navigate('/signup');
    }
  }, [navigate]);

  const validateCurrentStep = () => {
    const question = questions[currentStep];
    
    if (question.type === 'location') {
      return answers[`${question.id}_state`] && answers[`${question.id}_city`];
    }
    
    return !!answers[question.id];
  };

  const handleNext = () => {
    if (!validateCurrentStep()) {
      alert('Please complete all required fields before continuing.');
      return;
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      sessionStorage.setItem('questionnaireData', JSON.stringify(answers));
      navigate('/tell-us-more');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswer = (value: any) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#4C9494]">Tell us about yourself</h2>
            <span className="text-[#5C4C54]">
              {currentStep + 1} / {questions.length}
            </span>
          </div>
          <ProgressBar current={currentStep + 1} total={questions.length} />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#5C4C54] mb-4">
            {questions[currentStep].title}
          </h3>
          <QuestionRenderer
            question={questions[currentStep]}
            value={answers[questions[currentStep].id]}
            onChange={handleAnswer}
            locationState={answers[`${questions[currentStep].id}_state`]}
            locationCity={answers[`${questions[currentStep].id}_city`]}
            onLocationChange={{
              state: (value) => setAnswers({
                ...answers,
                [`${questions[currentStep].id}_state`]: value,
                [`${questions[currentStep].id}_city`]: ''
              }),
              city: (value) => setAnswers({
                ...answers,
                [`${questions[currentStep].id}_city`]: value
              })
            }}
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              currentStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-[#E4F4C4] text-[#4C9494] hover:bg-opacity-80'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Previous</span>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center space-x-2 px-4 py-2 bg-[#4C9494] text-white rounded-lg hover:bg-opacity-90"
          >
            <span>{currentStep === questions.length - 1 ? 'Continue' : 'Next'}</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;