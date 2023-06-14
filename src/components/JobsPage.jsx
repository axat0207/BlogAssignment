import React from 'react';

const JobsPage = () => {
  const jobList = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'ABC Company',
      location: 'New York',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'XYZ Company',
      location: 'San Francisco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'XYZ Company',
      location: 'San Francisco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'XYZ Company',
      location: 'San Francisco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'XYZ Company',
      location: 'San Francisco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'XYZ Company',
      location: 'San Francisco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more job openings
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <header className="bg-gray-900 py-4">
        
      </header>

      <main className="container mx-auto py-8">
        <section>
          <h2 className="text-4xl my-6 text-center text-white font-bold mb-4">Job Openings</h2>
          <div className="grid grid-cols-1 mx-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobList.map((job) => (
              <div
                key={job.id}
                className="bg-gray-300 rounded-lg p-6 shadow-md hover:bg-gray-100 transition duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-600">Company: {job.company}</p>
                <p className="text-gray-600">Location: {job.location}</p>
                <p className="text-gray-800">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination or Infinite Scroll */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Load More
          </button>
        </div>
      </main>

      
    </div>
  );
};

export default JobsPage;
