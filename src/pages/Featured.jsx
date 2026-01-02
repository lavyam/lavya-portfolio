import React from 'react';

const featuredList = [
 
  {
    id: 1,
    title: "BU Spark! Demo Day – Unconscious Bias Training Manual",
    outlet: "Boston University Spark!",
    date: "2022-12-20",
    description:
      "Featured at BU Spark! Demo Day for an equity-focused digital training manual designed for technology organizations. The project combines behavioral research, inclusive design principles, and practical policy guidance to reduce unconscious bias in the workplace.",
    url: "https://www.bu.edu/spark/2022/12/20/demo-day-fall-2022/",
  },
  
  {
    id: 2,
    title: "Research Showcase in Public Health- Boston University ",
    outlet: "Academic / Industry Conference",
    date: "2023-10-12",
    
    description:
      "Presented an Image processing model that can be used to analyze classroom placement in K-12 schools to help improve Indoor Environment Quality",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7122322148827766784/",
  },
  {
    id: 3,
    title: "30 Most Innovative Companies to Watch in 2026 - The Silicon Review",
    outlet: "News Article",
    date: "2025-12-16",
    description:
      "Featured with ReferU.AI as an ML Engineer involved in building the legal research platform",
    url: "https://thesiliconreview.com/magazine/profile/joel-geddis-on-making-attorney-discovery-easier-with-referu-ai", 
  },
];

// Sort newest → oldest
const sortedFeatured = [...featuredList].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

const Featured = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">📰 Featured</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
        Selected publications, press mentions, talks, and interviews highlighting my work
        across research, AI systems, and applied data science.
      </p>

      <div className="space-y-6">
        {sortedFeatured.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
          >
            <div className="flex items-start gap-4">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={`${item.outlet} logo`}
                  className="w-12 h-12 rounded-lg object-contain bg-white"
                  loading="lazy"
                />
              ) : null}

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </h3>

                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {item.outlet}
                  <span className="mx-2">•</span>
                  {new Date(item.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                  {item.description}
                </p>

                <div className="mt-4">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:underline"
                    >
                      Read more <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Link not public yet
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
