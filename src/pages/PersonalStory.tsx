import React, { useState } from 'react';
import { User } from 'lucide-react';
import AddButton from '../components/AddButton';

interface StoryItem {
  id: string;
  type: 'interest' | 'event' | 'person';
  title: string;
  description: string;
}

const PersonalStory: React.FC = () => {
  const [items, setItems] = useState<StoryItem[]>([]);
  const [showForm, setShowForm] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleAdd = (type: 'interest' | 'event' | 'person') => {
    setShowForm(type);
    setFormData({ title: '', description: '' });
  };

  const handleSubmit = (type: 'interest' | 'event' | 'person') => {
    if (formData.title && formData.description) {
      setItems([...items, {
        id: Date.now().toString(),
        type,
        ...formData
      }]);
      setShowForm(null);
      setFormData({ title: '', description: '' });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-[#F5F7F9]">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#4C9494] mb-12">Your Story</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <AddButton
              onClick={() => handleAdd('interest')}
              label="Add Interest"
              description="Share your hobbies, passions, or current interests"
            />
          </div>
          <div>
            <AddButton
              onClick={() => handleAdd('event')}
              label="Add Event"
              description="Share significant events or experiences that shaped you"
            />
          </div>
          <div>
            <AddButton
              onClick={() => handleAdd('person')}
              label="Add Person"
              description="Share about someone who has influenced your journey"
            />
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-xl font-semibold text-[#4C9494] mb-4">
                Add {showForm.charAt(0).toUpperCase() + showForm.slice(1)}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#5C4C54] mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5C4C54] mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg h-32"
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleSubmit(showForm as 'interest' | 'event' | 'person')}
                    className="flex-1 bg-[#4C9494] text-white py-2 rounded-lg hover:bg-opacity-90"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => setShowForm(null)}
                    className="flex-1 border border-[#4C9494] text-[#4C9494] py-2 rounded-lg hover:bg-[#E4F4C4]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-[#4C9494] mb-2">{item.title}</h3>
              <p className="text-[#5C4C54]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalStory;