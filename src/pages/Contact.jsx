import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">📬 Contact Me</h2>

      <form
        action="mailto:lavyamidha015@gmail.com"
        method="post"
        encType="text/plain"
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded border dark:bg-gray-800 dark:border-gray-700"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded border dark:bg-gray-800 dark:border-gray-700"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          className="p-3 rounded border dark:bg-gray-800 dark:border-gray-700"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl"
        >
          Send Email
        </button>
      </form>

      <div className="flex justify-center mt-8 space-x-6 text-indigo-600 dark:text-indigo-400">
        <a href="https://github.com/lavyam" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/lavya-midha-9ba408245" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:lavyamidha015@gmail.com">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
