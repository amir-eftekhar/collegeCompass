import React, { useState } from 'react';
import { BookOpen, TrendingUp, Target, Calendar } from 'lucide-react';
import AddButton from '../components/AddButton';

interface Grade {
  subject: string;
  current: string;
  goal: string;
}

interface SATScore {
  reading: number;
  math: number;
  total: number;
}

interface SATGoal {
  date: string;
  target: number;
}

const AcademicGrowth: React.FC = () => {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [showGradeForm, setShowGradeForm] = useState(false);
  const [newGrade, setNewGrade] = useState<Grade>({
    subject: '',
    current: '',
    goal: ''
  });

  const [satScores, setSatScores] = useState<SATScore>({
    reading: 0,
    math: 0,
    total: 0,
  });

  const [satGoals, setSatGoals] = useState<SATGoal[]>([]);
  const [newGoal, setNewGoal] = useState<SATGoal>({
    date: '',
    target: 0,
  });

  const handleAddGrade = () => {
    if (newGrade.subject && newGrade.current && newGrade.goal) {
      setGrades([...grades, newGrade]);
      setNewGrade({ subject: '', current: '', goal: '' });
      setShowGradeForm(false);
    }
  };

  const handleSATChange = (field: keyof SATScore, value: string) => {
    const numValue = parseInt(value) || 0;
    setSatScores(prev => {
      const newScores = { ...prev, [field]: numValue };
      newScores.total = newScores.reading + newScores.math;
      return newScores;
    });
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (newGoal.date && newGoal.target) {
      setSatGoals([...satGoals, newGoal]);
      setNewGoal({ date: '', target: 0 });
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#F5F7F9]">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#4C9494] mb-12">Academic Growth</h1>
        
        {/* Grades Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#4C9494] mb-6">Grades</h2>
          <AddButton
            onClick={() => setShowGradeForm(true)}
            label="Add Subject Grade"
            description="Track your current grades and set goals for improvement"
          />
          
          {showGradeForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h3 className="text-xl font-semibold text-[#4C9494] mb-4">Add Subject Grade</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Subject Name"
                    value={newGrade.subject}
                    onChange={(e) => setNewGrade({ ...newGrade, subject: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Current Grade"
                      value={newGrade.current}
                      onChange={(e) => setNewGrade({ ...newGrade, current: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Goal Grade"
                      value={newGrade.goal}
                      onChange={(e) => setNewGrade({ ...newGrade, goal: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddGrade}
                      className="flex-1 bg-[#4C9494] text-white py-2 rounded-lg hover:bg-opacity-90"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => setShowGradeForm(false)}
                      className="flex-1 border border-[#4C9494] text-[#4C9494] py-2 rounded-lg hover:bg-[#E4F4C4]"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {grades.map((grade, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-[#4C9494] mb-4">{grade.subject}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[#5C4C54]">Current Grade</p>
                    <p className="text-lg font-semibold">{grade.current}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#5C4C54]">Goal Grade</p>
                    <p className="text-lg font-semibold text-[#4C9494]">{grade.goal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SAT Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="h-6 w-6 text-[#4C9494]" />
                <h2 className="text-2xl font-semibold text-[#4C9494]">SAT Tracker</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#5C4C54] mb-2">
                    Reading & Writing
                  </label>
                  <input
                    type="number"
                    min="200"
                    max="800"
                    value={satScores.reading || ''}
                    onChange={(e) => handleSATChange('reading', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#5C4C54] mb-2">
                    Math
                  </label>
                  <input
                    type="number"
                    min="200"
                    max="800"
                    value={satScores.math || ''}
                    onChange={(e) => handleSATChange('math', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-lg font-semibold text-[#4C9494]">
                    Total Score: {satScores.total}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-6 w-6 text-[#4C9494]" />
                <h2 className="text-2xl font-semibold text-[#4C9494]">SAT Goals</h2>
              </div>

              <form onSubmit={handleAddGoal} className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#5C4C54] mb-2">
                    Target Date
                  </label>
                  <input
                    type="date"
                    value={newGoal.date}
                    onChange={(e) => setNewGoal({ ...newGoal, date: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#5C4C54] mb-2">
                    Target Score
                  </label>
                  <input
                    type="number"
                    min="400"
                    max="1600"
                    value={newGoal.target || ''}
                    onChange={(e) => setNewGoal({ ...newGoal, target: parseInt(e.target.value) || 0 })}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4C9494] text-white py-2 rounded-lg hover:bg-opacity-90"
                >
                  Add Goal
                </button>
              </form>

              <div className="space-y-4">
                {satGoals.map((goal, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-[#9CD4AC]" />
                      <span>{new Date(goal.date).toLocaleDateString()}</span>
                    </div>
                    <span className="font-semibold text-[#4C9494]">{goal.target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicGrowth;