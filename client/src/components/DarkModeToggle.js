import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex justify-end mb-6">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
