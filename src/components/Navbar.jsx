import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50"
    >
      <div className="flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${
              location.pathname === item.path
                ? 'text-indigo-600 dark:text-indigo-300 font-semibold'
                : 'text-gray-700 dark:text-gray-300'
            } hover:underline text-lg transition`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </motion.nav>
  );
};

export default Navbar;

