import React from 'react';

const BlogsPost = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <h1 className="text-4xl text-gray-200 text-center font-bold">My Blog</h1>

      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <section className="mb-8">
          {/* <h2 className="text-2xl mx-4 sm:mx-10 font-bold mb-4">Segments</h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 sm:mx-10">
            <div className="bg-gray-600 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Segment 1</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-200 hover:text-gray-900">
                    Sub-Segment 1.1
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-gray-900">
                    Sub-Segment 1.2
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-gray-900">
                    Sub-Segment 1.3
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-600 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Segment 2</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-200 hover:text-gray-900">
                    Sub-Segment 2.1
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-gray-900">
                    Sub-Segment 2.2
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-gray-900">
                    Sub-Segment 2.3
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-600 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Segment 3</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-200 hover:text-gray-900">
                    Sub-Segment 3.1
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-gray-900">
                    Sub-Segment 3.2
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-gray-900">
                    Sub-Segment 3.3
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-gray-200 text-center font-bold mb-4">Blog Posts</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mx-4 sm:mx-10">
                        {/* Individual blog posts */}
                        <div className="bg-gray-200 rounded-lg p-6 shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <h3 className="text-xl font-bold mb-2">Blog Post Title</h3>
              <p className="text-gray-600 mb-4">Author Name | Date</p>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, risus in
                condimentum finibus, massa metus finibus risus, ac blandit erat ex sed lorem.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Read More
              </a>
            </div>
            <div className="bg-gray-200 rounded-lg p-6 shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <h3 className="text-xl font-bold mb-2">Blog Post Title</h3>
              <p className="text-gray-600 mb-4">Author Name | Date</p>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, risus in
                condimentum finibus, massa metus finibus risus, ac blandit erat ex sed lorem.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Read More
              </a>
            </div>
            <div className="bg-gray-200 rounded-lg p-6 shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <h3 className="text-xl font-bold mb-2">Blog Post Title</h3>
              <p className="text-gray-600 mb-4">Author Name | Date</p>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, risus in
                condimentum finibus, massa metus finibus risus, ac blandit erat ex sed lorem.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Read More
              </a>
            </div>

            {/* Add more blog posts */}
            {/* <div className="bg-white rounded-lg p-6 shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">...</div> */}
            {/* <div className="bg-white rounded-lg p-6 shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">...</div> */}
          </div>

          {/* Pagination or Infinite Scroll */}
          <div className="flex justify-center mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Load More
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogsPost;

