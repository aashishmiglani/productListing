import Navbar from '@/Components/Navbar';
import React from 'react';

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">About Me</h1>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Education:</h2>
              <p className="text-sm sm:text-base text-gray-700">
                I completed my Bachelor&apos;s degree in Computer Science and Engineering from CT University, Ludhiana, from 2019 to 2023. During my time at university, I gained a comprehensive understanding of various computer science concepts, including data structures, algorithms, and software engineering principles. This educational background has equipped me with the necessary skills to tackle complex problems and develop innovative solutions in the field of technology.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Skills:</h2>
              <ul className="list-disc pl-4">
                <li className="text-sm sm:text-base">JavaScript: I have a strong command of JavaScript, which serves as the backbone of web development.</li>
                <li className="text-sm sm:text-base">ReactJS: I specialize in building interactive and dynamic user interfaces using ReactJS, a popular JavaScript library.</li>
                <li className="text-sm sm:text-base">Next.js: I have hands-on experience with Next.js, a powerful framework for building server-side rendered React applications.</li>
                <li className="text-sm sm:text-base">Node.js: I am skilled in backend development using Node.js, allowing me to build scalable and efficient server-side applications.</li>
                <li className="text-sm sm:text-base">Express.js: I have expertise in building RESTful APIs and web servers using Express.js, a minimalist web application framework for Node.js.</li>
                <li className="text-sm sm:text-base">MongoDB: I am proficient in working with MongoDB, a NoSQL database that offers flexibility and scalability for data storage.</li>
                <li className="text-sm sm:text-base">Python: I am familiar with Python programming language and have used it for various projects, including scripting, automation, and data analysis.</li>
                <li className="text-sm sm:text-base">SQL: I have experience in working with relational databases and writing SQL queries to manage and manipulate data effectively.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
