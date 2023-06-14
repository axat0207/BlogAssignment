import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-900 lg:h-screen ">
     
      
      <main className="container mx-auto pt-20 py-8">
        <section className="text-center">
          <h1 className="text-4xl text-gray-100 font-bold mb-4">Welcome to My Blog Website!</h1>
          <p className="text-lg text-gray-400">Discover the latest blogs, news, events, and job openings.</p>
        </section>
        
        <section className="mt-12">
          <h2 className="text-2xl text-gray-100 text-center font-bold mb-4">Our Offerings</h2>
          <div className="lg:flex justify-center mx-5 lg:mt-10 gap-6">
             {/* <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold mb-2">Blogs</h3>
              <p className="text-gray-600">Explore our collection of insightful blog posts.</p>
            </div>  */}
            <div className="bg-gray-600 rounded-lg my-4 lg:my-0 p-8 shadow-md">
              <h3 className="text-xl font-bold mb-2">News Feeds</h3>
              <p className="text-gray-300">Stay updated with the latest news in your area of interest  updated with the latest news in your area o updated with the latest news in your area o.</p>
            </div>
            <div className="bg-gray-600 rounded-lg my-4 lg:my-0 p-8 shadow-md">
              <h3 className="text-xl font-bold mb-2">Upcoming Events</h3>
              <p className="text-gray-300">Find out about upcoming events and conferences  updated with the latest news in your area o updated with the latest news in your area o.</p>
            </div>
            <div className="bg-gray-600 rounded-lg my-4 lg:my-0 p-8 shadow-md">
              <h3 className="text-xl font-bold mb-2">Jobs</h3>
              <p className="text-gray-300">Discover exciting job opportunities in your field  updated with the latest news in your area o updated with the latest news in your area o.</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* <footer className="bg-gray-200 py-4 mt-12">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2023 My Blog. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
    
  );
};

export default LandingPage;