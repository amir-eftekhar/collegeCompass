import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import AddButton from '../components/AddButton';

interface Activity {
  name: string;
  description: string;
}

const CareerReadiness: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newActivity, setNewActivity] = useState<Activity>({
    name: '',
    description: ''
  });

  const handleAddActivity = () => {
    if (newActivity.name && newActivity.description) {
      setActivities([...activities, newActivity]);
      setNewActivity({ name: '', description: '' });
      setShowForm(false);
    }
  };

  return (
    <section className="pt-32 pb-20 bg-[#F5F7F9]">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#4C9494] mb-12">Career Readiness</h1>

        <div className="max-w-2xl mx-auto">
          <AddButton
            onClick={() => setShowForm(true)}
            label="Add Extra-Curricular Activity"
            description="Share your activities, leadership roles, and achievements"
          />

          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h3 className="text-xl font-semibold text-[#4C9494] mb-4">Add Activity</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Activity Name"
                    value={newActivity.name}
                    onChange={(e) => setNewActivity({ ...newActivity, name: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <textarea
                    placeholder="Description"
                    value={newActivity.description}
                    onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg h-32"
                  />
                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddActivity}
                      className="flex-1 bg-[#4C9494] text-white py-2 rounded-lg hover:bg-opacity-90"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => setShowForm(false)}
                      className="flex-1 border border-[#4C9494] text-[#4C9494] py-2 rounded-lg hover:bg-[#E4F4C4]"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-6 mt-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-[#4C9494] mb-2">{activity.name}</h3>
                <p className="text-[#5C4C54]">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerReadiness;