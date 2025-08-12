import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import { projects } from "@/data/projects";
import profileImage from "@/assets/profile-image.jpg";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<"web2" | "web3">("web2");

  const filteredProjects = projects.filter(
    (project) => project.section === activeSection
  );

  return (
    <div className="min-h-screen bg-page-bg font-body">
      {/* Main Dashboard Container */}
      <div className="min-h-screen flex items-start justify-center px-4 py-8">
        <div className="w-full max-w-4xl bg-dashboard-bg rounded-2xl shadow-card border border-border-subtle transition-all duration-300 hover:shadow-card-hover">
          {/* Header Section - Horizontal Layout */}
          <div className="pt-12 pb-8 px-8">
            <div className="flex items-center justify-center gap-6 mb-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={profileImage}
                  alt="Bimal Chalise - Software Developer"
                  className="w-20 h-20 rounded-2xl border-2 border-border-subtle transition-all duration-300 hover:border-accent-primary hover:scale-105 hover:shadow-card"
                />
              </div>

              {/* Name and Title */}
              <div className="text-left">
                <h1 className="text-4xl font-bold mb-2 text-text-primary">
                  Bimal Chalise
                </h1>
                <p className="text-lg text-text-secondary">
                  Full-Stack Developer & Software Engineer
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <SocialLinks />
            </div>
          </div>

         {/* Projects Section */}
<div className="px-8 pb-12">
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-text-primary mb-2 text-center">
      Featured Projects
    </h2>
    <p className="text-text-secondary text-center mb-6">
      A collection of my latest work and contributions
    </p>

    <div className="flex justify-center my-8">
      <div className="bg-[#1a1a1a] p-1 rounded-full border border-[#333] shadow-lg flex-col relative">
        {/* Animated background element */}
        <div 
          className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-transform duration-300 ease-in-out z-0 
            ${activeSection === "web3" ? 'transform translate-x-full' : ''}
          `}
        ></div>

        <button
          onClick={() => setActiveSection("web2")}
          className={`relative px-6 py-2 rounded-full text-sm font-semibold z-10 transition-all duration-300 ease-in-out 
            ${activeSection === "web2"
              ? "text-white"
              : "text-gray-400 hover:text-white"
            }
          `}
        >
          Web2
        </button>
        <button
          onClick={() => setActiveSection("web3")}
          className={`relative px-6 py-2 rounded-full text-sm font-semibold z-10 transition-all duration-300 ease-in-out 
            ${activeSection === "web3"
              ? "text-white"
              : "text-gray-400 hover:text-white"
            }
          `}
        >
          Web3
        </button>
      </div>
    </div>
  </div>

            {/* Project Cards */}
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pb-6 px-8 border-t border-border-subtle">
            <p className="text-text-muted text-sm mt-4">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
