import Navbar from '@/Components/Navbar';
import React from 'react';

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Contact Us</h1>
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="email" className="text-lg sm:text-xl font-semibold">Full Name:</label>
              <p className="text-sm sm:text-base text-gray-700">Aashish Miglani</p>
            </div>
            <div>
              <label htmlFor="email" className="text-lg sm:text-xl font-semibold">Email:</label>
              <p className="text-sm sm:text-base text-gray-700">aashishmiglani54@gmail.com</p>
            </div>
            <div>
              <label htmlFor="phone" className="text-lg sm:text-xl font-semibold">Phone:</label>
              <p className="text-sm sm:text-base text-gray-700">+91 8288870545</p>
            </div>
            <div>
              <label htmlFor="address" className="text-lg sm:text-xl font-semibold">Github:</label>
              <p className="text-sm sm:text-base text-gray-700">https://github.com/aashishmiglani/</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
