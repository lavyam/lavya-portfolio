import React from 'react';
import profile from '../assets/lavya-profile.jpg';
import { GraduationCap, Briefcase, Mail, Github, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={profile}
          alt="Lavya Midha"
          className="w-72 h-auto object-cover rounded-2xl border-4 border-indigo-600 shadow-md"
        />

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">Lavya Midha</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I’m a data scientist and machine learning engineer with a strategic edge. Currently at NYU pursuing my M.S. in Data Science, I work at the intersection of advanced analytics, product thinking, and real-world impact.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            From optimizing ad strategy with reinforcement learning to mapping environmental equity in public schools, I’ve built scalable systems that translate complexity into clarity. I bring a consultant’s lens to technical problems—whether leading teams, automating pipelines, or designing decision tools for stakeholders who don’t speak code.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            If the challenge needs precision, empathy, and momentum—chances are, I’m already working on it.
          </p>

          {/* Contact Links */}
          <div className="flex space-x-6 mt-4">
            <a href="mailto:lavyamidha015@gmail.com" className="text-indigo-600 dark:text-indigo-300 hover:underline flex items-center space-x-2">
              <Mail className="w-5 h-5" /><span>Email</span>
            </a>
            <a href="https://github.com/lavyam" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-300 hover:underline flex items-center space-x-2">
              <Github className="w-5 h-5" /><span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/lavya-midha-9ba408245" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-300 hover:underline flex items-center space-x-2">
              <Linkedin className="w-5 h-5" /><span>LinkedIn</span>
            </a>
          </div>

          {/* Jump to Section Buttons */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-4">Jump to section</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Education', id: 'education-section' },
                { label: 'Experience', id: 'experience-section' },
                { label: 'Skills', id: 'skills-section' }
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-gray-700 text-indigo-700 dark:text-white text-sm font-medium hover:bg-indigo-200 dark:hover:bg-gray-600 transition"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div id="education-section" className="mt-14">
        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6 text-indigo-700 dark:text-indigo-300">
          <GraduationCap /> Education
        </h3>
        <div className="relative border-l-2 border-indigo-400 pl-6 space-y-10">
          <div>
            <h4 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">New York University</h4>
            <p className="text-gray-600 dark:text-gray-400">M.S. in Data Science, Expected May 2026 — GPA: 3.72</p>
            <p className="text-sm text-gray-500">Text-as-Data • Big Data • Machine Learning • Stats • Practical DS</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">Boston University</h4>
            <p className="text-gray-600 dark:text-gray-400">B.S. in Data Science, Minor in Statistics, May 2024 — GPA: 3.75</p>
            <p className="text-sm text-gray-500">Dean’s List (All Semesters) • Research Grant Awardee</p>
            <p className="text-sm text-gray-500">Leadership: BU Data Science Association, Admissions Ambassador, Peer Mentor</p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div id="experience-section" className="mt-14">
        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6 text-indigo-700 dark:text-indigo-300">
          <Briefcase /> Experience
        </h3>
        <div className="relative border-l-2 border-indigo-400 pl-6 space-y-10">
          <div>
            <h4 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">ML Engineer — ReferU.AI</h4>
            <p className="text-gray-600 dark:text-gray-400">May 2025 – Present</p>
            <p className="text-sm text-gray-500 mt-2">
              Leading the development of an AI-powered marketing engine automating campaign strategy across Google Ads, Analytics, and Search Console. Designed models and dashboards that cut setup time from days to minutes.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">Project Manager — BU Spark!</h4>
            <p className="text-gray-600 dark:text-gray-400">Jan 2024 – May 2024</p>
            <p className="text-sm text-gray-500 mt-2">
              Directed civic tech projects in voter analytics and public transparency. Introduced Agile workflows, boosting delivery velocity by 40%, and led client communication from ideation through delivery.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">Data Science RA — BU School of Public Health</h4>
            <p className="text-gray-600 dark:text-gray-400">Feb 2023 – Dec 2023</p>
            <p className="text-sm text-gray-500 mt-2">
              Built real-time dashboards and regression tools for air quality monitoring in 125+ schools. Reduced data lag by 35% and introduced a CV pipeline to quantify disparities in classroom infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div id="skills-section" className="mt-14">
        <h3 className="text-2xl font-semibold mb-6 text-indigo-700 dark:text-indigo-300">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Languages & Frameworks',
              items: ['Python', 'R', 'SQL', 'NoSQL', 'Rust', 'Shell', 'React', 'Git', 'Linux']
            },
            {
              title: 'Machine Learning & AI',
              items: ['Supervised / Unsupervised Learning', 'NLP', 'BERT', 'Hugging Face', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'MLOps']
            },
            {
              title: 'Data Analytics & Visualization',
              items: ['Excel (Advanced)', 'Tableau', 'Power BI', 'Pandas', 'NumPy', 'Matplotlib', 'R Shiny', 'Python Panel', 'Looker Studio']
            },
            {
              title: 'Cloud & Big Data',
              items: ['AWS', 'Azure', 'GCP', 'Spark', 'Hadoop', 'Docker', 'ETL Pipelines', 'HPC', 'API Integration']
            }
          ].map((section, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition duration-300"
            >
              <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                {section.items.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-500 dark:text-indigo-300">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
