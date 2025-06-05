import React from 'react';

const Resume = () => {
  const resumeLink = '/resume.pdf'; // Placeholder link, replace with actual PDF link later

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Resume</h2>
      <a
        href={resumeLink}
        download
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
