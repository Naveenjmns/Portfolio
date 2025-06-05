import React from 'react';

const projects = [
  {
    title: 'DevOps Automation Tool',
    description: 'A tool to automate CI/CD pipelines using Jenkins and GitHub Actions.',
    techStack: ['Jenkins', 'GitHub Actions', 'Docker', 'Bash'],
    github: 'https://github.com/naveenkumarj/devops-automation',
    liveDemo: '',
  },
  {
    title: 'Cloud Infrastructure Manager',
    description: 'Manage AWS infrastructure using Terraform and Kubernetes.',
    techStack: ['AWS', 'Terraform', 'Kubernetes'],
    github: 'https://github.com/naveenkumarj/cloud-infra-manager',
    liveDemo: '',
  },
  {
    title: 'Monitoring Dashboard',
    description: 'A dashboard for monitoring systems using Prometheus and Grafana.',
    techStack: ['Prometheus', 'Grafana', 'React'],
    github: 'https://github.com/naveenkumarj/monitoring-dashboard',
    liveDemo: '',
  },
];

const Projects = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(({ title, description, techStack, github, liveDemo }) => (
          <div key={title} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">{description}</p>
            <div className="mb-3">
              <strong>Tech Stack:</strong> {techStack.join(', ')}
            </div>
            <div className="flex space-x-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                GitHub Repo
              </a>
              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
