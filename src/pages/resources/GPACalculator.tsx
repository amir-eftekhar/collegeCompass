import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Course {
  name: string;
  grade: string;
  credits: number;
}

const GPACalculator: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [newCourse, setNewCourse] = useState<Course>({ name: '', grade: '', credits: 1 });

  const calculateGPA = (courseList: Course[]) => {
    if (courseList.length === 0) return 0;
    
    const gradePoints: { [key: string]: number } = {
      'A+': 4.0, 'A': 4.0, 'A-': 3.7,
      'B+': 3.3, 'B': 3.0, 'B-': 2.7,
      'C+': 2.3, 'C': 2.0, 'C-': 1.7,
      'D+': 1.3, 'D': 1.0, 'D-': 0.7,
      'F': 0.0
    };

    const totalPoints = courseList.reduce((sum, course) => 
      sum + (gradePoints[course.grade] || 0) * course.credits, 0);
    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);

    return totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);
  };

  const handleAddCourse = () => {
    if (newCourse.name && newCourse.grade) {
      setCourses([...courses, newCourse]);
      setNewCourse({ name: '', grade: '', credits: 1 });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9] pt-20">
      <div className="container mx-auto px-6 py-8">
        <Link to="/academic" className="inline-flex items-center text-[#4C9494] hover:text-[#9CD4AC] mb-6">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Academic Growth
        </Link>

        <h1 className="text-4xl font-bold text-[#4C9494] mb-8">GPA Calculator: Four Year Plan</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#4C9494] mb-6">Add Courses</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#5C4C54] mb-2">
                  Course Name
                </label>
                <input
                  type="text"
                  value={newCourse.name}
                  onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="e.g., Algebra II"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5C4C54] mb-2">
                  Grade
                </label>
                <select
                  value={newCourse.grade}
                  onChange={(e) => setNewCourse({ ...newCourse, grade: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="">Select Grade</option>
                  {['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'].map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5C4C54] mb-2">
                  Credits
                </label>
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={newCourse.credits}
                  onChange={(e) => setNewCourse({ ...newCourse, credits: parseFloat(e.target.value) })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <button
                onClick={handleAddCourse}
                className="w-full bg-[#4C9494] text-white py-2 rounded-lg hover:bg-opacity-90"
              >
                Add Course
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#4C9494] mb-6">Your GPA: {calculateGPA(courses)}</h2>
            
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-[#4C9494]">{course.name}</h3>
                    <p className="text-sm text-[#5C4C54]">{course.credits} credits</p>
                  </div>
                  <span className="text-lg font-semibold">{course.grade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPACalculator;