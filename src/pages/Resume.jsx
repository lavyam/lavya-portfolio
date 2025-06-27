import React from 'react';
import resumePDF from '../assets/Lavya_Resume.pdf';

const Resume = () => {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">📄 My Resume</h2>

      <div className="mb-6">
        <iframe
          src={resumePDF}
          title="Lavya Resume"
          className="w-full h-[800px] border border-gray-300 dark:border-gray-700"
        />
      </div>

      <a
        href={resumePDF}
        download="Lavya_Midha_Resume.pdf"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
