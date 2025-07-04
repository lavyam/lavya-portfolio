import React, { useRef } from 'react';

const projectList = [
  {
    id: 1,
    name: 'LavyaMidha-PyramydAI',
    description: 'Designed an internal AI workflow demo for Pyramyd.AI, showcasing image collaging from user inputs using segmentation models. Built a responsive UI with automated backend processing to highlight real-time media manipulation capabilities.',
    url: 'https://github.com/lavyam/LavyaMidha-PyramydAI',
    language: 'JavaScript',
    updated_at: '2025-05-15',
    category: 'AI Applications'
  },
  {
    id: 2,
    name: 'Humor-Detection',
    description: 'Developed a machine learning pipeline to classify tweets as humorous or non-humorous. Leveraged TF-IDF feature extraction and ensemble models, evaluated through cross-validation and performance metrics.',
    url: 'https://github.com/lavyam/Humor-Detection',
    language: 'Python',
    updated_at: '2025-04-01',
    category: 'NLP'
  },
  {
    id: 3,
    name: 'Covid-19-Analysis',
    description: 'Conducted global COVID-19 trend analysis by visualizing infection rates, death counts, and testing data. Built interactive plots to highlight cross-country comparisons and policy effectiveness over time.',
    url: 'https://github.com/ShimonDasgupta/Covid-19-Analysis',
    language: 'Python',
    updated_at: '2023-01-05',
    category: 'Data Analysis'
  },
  {
    id: 4,
    name: 'Transformer-based-summarization',
    description: 'Fine-tuned a BART-based transformer for abstractive summarization on article datasets. Implemented tokenization, beam search decoding, and ROUGE score evaluation to optimize summary quality.',
    url: 'https://github.com/lavyam/Transformer-based-summarization',
    language: 'Python',
    updated_at: '2024-07-11',
    category: 'NLP'
  },
  {
    id: 5,
    name: 'ds4g-riseup-police-detail',
    description: 'Analyzed Boston Police Department overtime budgets using city expense logs and incident-level data. Produced insights and policy briefs advocating reallocation of public resources toward underfunded community services.',
    url: 'https://github.com/BU-Spark/ds4g-riseup-police-detail',
    language: 'Python',
    updated_at: '2023-11-20',
    category: 'Civic Analytics'
  },
  {
    id: 6,
    name: 'Facebook_Mutual_friends',
    description: 'Simulated mutual friend discovery in a synthetic social network using adjacency matrix representations. Implemented efficient search algorithms to compute shared connections in large-scale graphs.',
    url: 'https://github.com/lavyam/Facebook_Mutual_friends',
    language: 'Python',
    updated_at: '2022-08-14',
    category: 'Social Network Analysis'
  },
  {
    id: 7,
    name: 'NYC_Subway_Ridership_sentiment_analysis',
    description: 'Analyzed public sentiment toward NYC Subway services using Twitter data. Preprocessed tweets, performed sentiment scoring using VADER and RoBERTa, and correlated findings with MTA ridership metrics. The study revealed how online discourse aligns with actual ridership trends, offering insight for transit planning.',
    url: 'https://github.com/lavyam/NYC_Subway_Ridership_sentiment_analysis',
    language: 'Python',
    updated_at: '2024-03-09',
    category: 'NLP'
  },
  {
    id: 8,
    name: 'Americans, Trust & Twitter (Sussman Lab)',
    description: 'Created a data-driven narrative exploring Americans’ trust in government and Twitter as news sources, using Pew survey data and political predictors. Built an interactive story using R Markdown with embedded visualizations, showing how party affiliation, citizenship, and region influence public sentiment. Conducted regression analysis, regional mapping, and comparative studies.',
    url: '',
    language: 'R',
    updated_at: '2024-12-01',
    category: 'Research'
  },
  {
    id: 9,
    name: 'MovieLens Recommender & Segmentation (Big Data Capstone)',
    description: 'Built a collaborative filtering and customer segmentation pipeline using the 33M-rating MovieLens dataset. Applied MinHash-based similarity, validated user “twins” using Pearson correlation, and trained an ALS recommender with cold-start extensions via tag-genome regression. Evaluated all models with ranking metrics like Precision@100, MAP, and NDCG.',
    url: 'https://lavyam.github.io/lavya-portfolio/Big%20Data%20Capstone%20Report%20-%20Team%2029.pdf',
    language: 'Python, Spark',
    updated_at: '2025-05-07',
    category: 'Research'
  },
  {
    id: 10,
    name: 'BU Spark! Demo Day – Unconscious Bias Training Manual',
    description: 'Showcased an equity-focused digital training manual for tech companies at BU Spark! Demo Day. The project aims to combat unconscious bias in the workplace through a $5 subscription model, with waivers available for small businesses to ensure accessibility. The manual combines behavioral research, inclusive design, and policy guidance.',
    url: 'https://www.bu.edu/spark/2022/12/20/demo-day-fall-2022/',
    language: 'Equity, Policy, UX',
    updated_at: '2022-12-20',
    category: 'Publications'
  }
];

// Group projects by category
const groupedProjects = projectList.reduce((acc, project) => {
  acc[project.category] = acc[project.category] || [];
  acc[project.category].push(project);
  return acc;
}, {});

const Projects = () => {
  const sectionRefs = useRef({});

  const scrollToSection = (category) => {
    const section = sectionRefs.current[category];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = Object.keys(groupedProjects);

  return (
    <section className="max-w-6xl mx-auto p-6 scroll-smooth">
      <h2 className="text-3xl font-bold mb-6">📂 Projects</h2>

      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-6 sticky top-0 z-10 bg-white dark:bg-gray-900 py-3">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => scrollToSection(category)}
            className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-gray-700 text-indigo-700 dark:text-white text-sm font-medium hover:bg-indigo-200 dark:hover:bg-gray-600 transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Sections */}
      {categories.map(category => (
        <div
          key={category}
          ref={el => sectionRefs.current[category] = el}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{category}</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {groupedProjects[category].map(project => (
              <div
                key={project.id}
                className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.name}
                    </a>
                  ) : (
                    <span>{project.name}</span>
                  )}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {project.description}
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {project.language && <span>🛠 {project.language}</span>}
                  <span className="ml-4">
                    🔄 Updated: {new Date(project.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;

