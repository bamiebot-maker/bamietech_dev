import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { name: 'Web3/Solidity', level: 85 },
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'PHP/MySQL', level: 82 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'AI Prompt Engineering', level: 80 },
  ];

  const education = [
    {
      period: '2023 - 2027',
      title: 'B.Sc Software Engineering',
      institution: 'Federal University Dutse'
    },
    {
      period: '2023',
      title: 'Web Development Training',
      institution: 'Trybe-X'
    }
  ];

  const experiences = [
    {
      period: '2024 - Present',
      title: 'Founder',
      company: 'Bamiedata.com.ng',
      description: 'Telecom services platform selling airtime, data subscription, and other telecom services built with CMS on Samorabot'
    },
    {
      period: '2023 - Present',
      title: 'Team Lead',
      company: 'Eagle Devs',
      description: 'Managing development teams and project delivery'
    },
    {
      period: '2023 - Present',
      title: 'Member',
      company: 'NACOS - National Association of Computing Students',
      description: 'Active member contributing to tech community development'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Picture Section */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative inline-block"
              >
                <img 
                  src="/profile.jpg" 
                  alt="Ibrahim Sobur Bamidele"
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500 shadow-lg"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'block';
                  }}
                />
                <div 
                  className="w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center hidden"
                  style={{display: 'none'}}
                >
                  <span className="text-white text-lg font-semibold">Add profile.jpg to public folder</span>
                </div>
              </motion.div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-gray-300 mb-4">
                I'm a passionate Web3 Developer and AI Prompt Engineer currently pursuing my B.Sc in Software Engineering. 
                With expertise in blockchain technology, smart contracts, and modern web development, I'm building the 
                future of decentralized applications.
              </p>
              <p className="text-gray-300 mb-4">
                Currently working on <strong>Lodgie</strong> - an innovative platform connecting landlords with tenants, 
                demonstrating my ability to solve real-world problems through technology.
              </p>
              <p className="text-gray-300">
                Through continuous learning on platforms like YouTube, Udemy, and formal education, I'm constantly 
                expanding my skills in both Web2 and Web3 technologies.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Education</h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-700/50 p-4 rounded-lg"
                  >
                    <div className="text-blue-400 text-sm font-semibold">{edu.period}</div>
                    <div className="text-white font-bold">{edu.title}</div>
                    <div className="text-gray-300">{edu.institution}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level + '%' }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Experience</h4>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-700/50 p-4 rounded-lg"
                  >
                    <div className="text-blue-400 text-sm font-semibold">{exp.period}</div>
                    <div className="text-white font-bold">{exp.title} • {exp.company}</div>
                    <div className="text-gray-300 text-sm">{exp.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
