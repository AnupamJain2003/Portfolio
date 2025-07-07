"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail,File } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollTop(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const projects = [
    {
      name: "GeoTag - Smart Location Recommender",
      description:
        "A location intelligence platform using Google Maps API, DBSCAN clustering, and travel time analytics. Built for geospatial analysis and urban planning.",
      link: "", // This project will be clickable
      repo: "https://github.com/AnupamJain2003/backendGeoTag",
      skills: ["Google Maps API", "DBSCAN", "Python", "Geospatial Analysis"]
    },
    {
      name: "Budget Tracker Management System",
      description:
        "Finance-focused full-stack app using Spring Boot and React. Allows real-time budget tracking, category analytics, and Material UI components.",
      link: "", // This project will NOT be clickable
      repo: "https://github.com/AnupamJain2003/BudgetTracker.git",
      skills: ["Spring Boot", "React", "MySQL", "Material UI", "REST APIs"]
    },
    {
      name: "AICTE Smart Event Management System",
      description:
        "An event lifecycle manager built for institutional use with automated schedules, role-based access, and backend integration.",
      link: "", // This project will NOT be clickable
      repo: "https://github.com/AnupamJain2003/AICTEEventManagment",
      skills: ["Java", "Spring Boot", "SQL", "Role-based Access Control"]
    },
    {
      name: "Crypto Trading App",
      description:
        "Python + FTX API based tool to execute live trades with dynamic strategies. Focused on algorithmic trading and crypto automation.",
      link: "", // This project will NOT be clickable
      repo: "https://github.com/AnupamJain2003/ftx",
      skills: ["Python", "FTX API", "Algorithmic Trading", "Data Analysis"]
    }
  ];

  const skills = [
    "Spring Boot", "MERN Stack", "Django", "Flutter", "MySQL", "PostgreSQL",
    "TensorFlow", "AWS", "Git", "Seaborn", "Matplotlib"
  ];

  const languages = ["Java", "Dart", "Python", "C#", "SQL", "C++"];

  const education = [
    {
      level: "B.E. CSE (AIML)",
      institution: "Chandigarh University",
      year: "2021 – 2025",
      detail: "Artificial Intelligence and Machine Learning | CGPA: 8.19"
    },
    {
      level: "Senior Secondary",
      institution: "St. John's Senior Secondary School",
      year: "2019 – 2021",
      detail: "CBSE | Percentage: 96.4%"
    },
    {
      level: "High School",
      institution: "St. Francis Convent School",
      year: "2019",
      detail: "ICSE | Percentage: 94%"
    }
  ];

  const publications = [
    {
      title: "A Comparative Analysis of DBSCAN, K-Means and Agglomerative Clustering Algorithms for Geospatial Data",
      date: "May 2025",
      link: "https://www.atlantis-press.com/proceedings/ramsita-25/126011475"
    }
  ];

  // Define the granular noise pattern as a base64 SVG for efficiency
  const granularNoise = `url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cfilter%20id%3D%22noise%22%3E%0A%20%20%20%20%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.65%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%0A%20%20%20%20%3CfeColorMatrix%20type%3D%22saturate%22%20values%3D%220%22%2F%3E%0A%20%20%20%20%3CfeComponentTransfer%3E%0A%20%20%20%20%20%20%3CfeFuncA%20type%3D%22linear%22%20slope%3D%220.1%22%2F%3E%0A%20%20%20%20%3C%2FfeComponentTransfer%3E%0A%20%20%3C%2Ffilter%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20filter%3D%22url(%23noise)%22%2F%3E%0A%3C%2Fsvg%3E")`;


  return (
    <main
      className={`relative transition-colors duration-300 text-white`} // Removed overflow-hidden
      style={{
        background: `${granularNoise}, linear-gradient(135deg, #0E2A3A 0%, #1A435A 50%, #2F749B 100%)`, // Peacock gradient
        backgroundSize: '100px 100px, cover', // Adjust noise size as needed
        backgroundBlendMode: 'overlay', // Blend noise with gradient
      }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap');
        body {
          font-family: 'Urbanist', sans-serif;
        }
        .spotlight {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 0;
          background: radial-gradient(600px at var(--x) var(--y), rgba(66, 153, 225, 0.05), transparent 80%);
          transition: background 0.2s ease;
        }
      `}</style>

      {/* Spotlight background effect */}
      <div
        id="spotlight"
        className="spotlight"
        onMouseMove={(e) => {
          const spotlight = document.getElementById("spotlight");
          if (spotlight) {
            spotlight.style.setProperty("--x", `${e.clientX}px`);
            spotlight.style.setProperty("--y", `${e.clientY}px`);
          }
        }}
      />

      {/* Scroll Progress Bar */}
      {/* <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-[#4299E1] transition-all duration-300 ease-in-out" // Accent blue for scrollbar
          style={{ width: `${(scrollTop / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}
        />
      </div> */}

      {/* Main Content Container - Adjusted for two columns */}
      <div className="relative z-10 min-h-screen px-6 py-10 mx-auto max-w-4xl md:max-w-5xl lg:max-w-6xl">

        <div className="md:flex md:gap-x-12"> {/* Flex container for left and right columns */}

          {/* Left Column (Fixed) */}
          {/* IMPORTANT: Ensure no parent of this div (up to <body>/<html>) has overflow: hidden/scroll/auto */}
          <div className="md:w-1/3 space-y-10 mb-10 md:mb-0 md:sticky md:top-0 md:h-screen md:overflow-y-auto md:pr-4"> {/* Added sticky, top-0, h-screen, overflow-y-auto, pr-4 */}
            <section>
              <motion.h1 className="text-5xl font-extrabold tracking-tight mb-3" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                Anupam Jain
              </motion.h1>
              <motion.p className="text-lg leading-relaxed text-gray-300 max-w-xl mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 0.2 }}>
                Software Engineer | Full-Stack Developer | AI/ML Enthusiast
              </motion.p>
              <div className="flex gap-6 text-gray-300">
                <a href="mailto:anupamayushij@gmail.com" className="hover:text-[#4299E1] transition-colors"><Mail /></a>
                <a href="https://github.com/AnupamJain2003" target="_blank" className="hover:text-[#4299E1] transition-colors"><Github /></a>
                <a href="https://www.linkedin.com/posts/activity-7114542027500892160-KmXP" target="_blank" className="hover:text-[#4299E1] transition-colors"><Linkedin /></a>
                 <a href="https://drive.google.com/file/d/1B4uMedGRz5TJUQdqp9IRbH1A_q4dKR8y/view?usp=sharing  " className="hover:text-[#4299E1] transition-colors"><File /></a>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm text-[#20B2AA] hover:bg-[#4299E1] transition-colors cursor-default"
                    style={{ background: 'rgba(36, 41, 47, 0.6)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Languages</h2>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm text-[#20B2AA] hover:bg-[#4299E1] transition-colors cursor-default"
                    style={{ background: 'rgba(36, 41, 47, 0.6)' }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Scrollable) */}
          <div className="md:w-2/3 space-y-10"> {/* Width and internal spacing */}
            <section>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <motion.p
                className="text-lg leading-relaxed text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 0.4 }}
              >
                I'm a passionate and driven software engineer with a strong foundation in full-stack development and a keen interest in Artificial Intelligence and Machine Learning. I thrive on tackling complex challenges and transforming innovative ideas into practical solutions. My journey in tech has equipped me with a diverse skill set, allowing me to build robust applications from conception to deployment. I'm constantly seeking opportunities to learn, grow, and contribute to impactful projects that make a real difference.
              </motion.p>
            </section>

            {/* Placeholder for Work Experience */}
            {/* <section>
              <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                Detailed professional work experience coming soon!
              </p>
            </section> */}

            <section>
              <h2 className="text-3xl font-bold mb-4">Projects</h2>
              <div className="grid gap-8">
                {projects.map((project, idx) => (
                  project.repo ? (
                    <a
                      key={idx}
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <motion.div
                        className="border rounded-lg p-6 h-full flex flex-col justify-between cursor-pointer shadow-md"
                        style={{
                          background: 'rgba(22, 27, 34, 0.7)',
                          borderColor: 'rgba(100, 100, 100, 0.4)',
                        }}
                        whileHover={{ scale: 1.02, borderColor: "#4299E1", boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#4299E1] transition-colors">{project.name}</h3>
                          <p className="text-sm text-gray-400 mb-3 leading-relaxed">{project.description}</p>
                        </div>
                        {/* Project Skills Tags */}
                        {project.skills && project.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.skills.map((skill, skillIdx) => (
                              <span
                                key={skillIdx}
                                className="px-2 py-1 rounded-full text-xs text-[#20B2AA] group-hover:bg-white/10 transition-colors"
                                style={{ background: 'rgba(50, 55, 60, 0.5)' }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </a>
                  ) : (
                    <motion.div
                      key={idx}
                      className="border rounded-lg p-6 h-full flex flex-col justify-between cursor-default shadow-md"
                      style={{
                        background: 'rgba(22, 27, 34, 0.7)',
                        borderColor: 'rgba(100, 100, 100, 0.4)',
                      }}
                      whileHover={{ scale: 1.02, borderColor: "#4299E1", boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                        <p className="text-sm text-gray-400 mb-3 leading-relaxed">{project.description}</p>
                      </div>
                      {/* Project Skills Tags */}
                      {project.skills && project.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.skills.map((skill, skillIdx) => (
                            <span
                              key={skillIdx}
                              className="px-2 py-1 rounded-full text-xs text-[#20B2AA]"
                              style={{ background: 'rgba(50, 55, 60, 0.5)' }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-lg text-gray-100">{edu.level}</h3>
                    <p className="text-sm text-gray-400">{edu.institution} | {edu.year}</p>
                    <p className="text-sm text-gray-500">{edu.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Publications</h2>
              <ul className="list-disc list-inside space-y-2">
                {publications.map((pub, idx) => (
                  <li key={idx}>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 -ml-2 rounded-md transition-colors group cursor-pointer"
                      style={{ background: 'rgba(0,0,0,0)' }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0)'}
                    >
                      <span className="text-gray-400">{pub.date}</span> - <span className="text-white group-hover:text-[#4299E1] transition-colors">
                        {pub.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Placeholder for Achievements */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Achievements</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                Details about my achievements and awards will be listed here.
              </p>
            </section>
          </div>
        </div>

        {/* Let's Connect Section - remains full width at the bottom */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-lg text-gray-300 mb-6">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <p className="text-lg text-gray-300 mb-6">Feel free to reach me at : anupamayushij@gmail.com</p>
          
          
          
        </section>
      </div>
    </main>
  );
}