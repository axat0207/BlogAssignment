import React from 'react';

const UpcomingEvent = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      

      <main className="container mx-auto py-8">
        <section>
          <h2 className="text-4xl my-10 text-white font-bold text-center mb-4">Upcoming Events</h2>
          <ul className="space-y-4 mt-10 lg:mx-24 mx-10">
            <li className="bg-gray-600 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Event Title</h3>
              <p className="text-gray-300">Date: July 10, 2023</p>
              <p className="text-gray-300">Time: 6:00 PM - 9:00 PM</p>
              <p className="text-gray-300">Location: Event Venue</p>
              <p className="text-gray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, risus in condimentum finibus, massa metus finibus risus, ac blandit erat ex sed lorem.
              </p>
            </li>
            <li className="bg-gray-600 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Event Title</h3>
              <p className="text-gray-300">Date: August 15, 2023</p>
              <p className="text-gray-300">Time: 7:00 PM - 10:00 PM</p>
              <p className="text-gray-300">Location: Event Venue</p>
              <p className="text-gray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, risus in condimentum finibus, massa metus finibus risus, ac blandit erat ex sed lorem.
              </p>
            </li>
            {/* Add more upcoming events */}
            {/* <li className="bg-white rounded-lg p-6 shadow-md">...</li> */}
            {/* <li className="bg-white rounded-lg p-6 shadow-md">...</li> */}
          </ul>
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

export default UpcomingEvent;
