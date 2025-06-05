import React from 'react';

const skillsData = {
  Frontend: ['React', 'JavaScript', 'HTML', 'CSS'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  DevOps: ['Docker', 'Jenkins', 'GitHub Actions'],
  Cloud: ['AWS', 'Kubernetes', 'Terraform'],
  Tools: ['Linux', 'Git', 'Bash', 'Prometheus', 'Grafana'],
};

const Skills = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-medium mb-4">{category}</h3>
            <ul className="space-y-3">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center space-x-3">
                  <span className="text-indigo-600 dark:text-indigo-400">
                    {/* Icon placeholder */}
                  </span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
