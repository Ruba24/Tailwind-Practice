import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to our website! We are passionate about building simple and elegant web applications that are easy to use and visually appealing. Our team is dedicated to delivering high-quality digital experiences with a focus on performance, accessibility, and modern design.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          This platform is created as part of a learning journey to explore and demonstrate frontend and backend technologies, particularly using React, Tailwind CSS, and modern routing tools like React Router.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          We hope you find our project useful, visually pleasant, and a small glimpse into what we aim to build in the future.
        </p>
      </div>
    </div>
  );
};

export default About;
