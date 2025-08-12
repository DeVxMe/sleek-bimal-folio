import { ExternalLink, Github, Eye, CheckCircle, Clock } from "lucide-react";
import { Project } from "@/data/projects";
import { TechBadge } from "./TechBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const StatusIcon = project.status === 'Completed' ? CheckCircle : Clock;
  const statusColor = project.status === 'Completed' ? 'text-status-completed' : 'text-status-active';

  return (
    <div 
      className="bg-card-bg border border-border-subtle rounded-2xl p-6 transition-all duration-300 hover:bg-card-hover hover:border-accent-primary hover:shadow-card-hover hover:-translate-y-1 hover:scale-[1.01] group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex items-center gap-2">
              <StatusIcon size={16} className={statusColor} />
              <span className="text-sm text-text-secondary">
                {project.status}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
            <span className="text-accent-primary font-medium">
              {project.category}
            </span>
            <span>•</span>
            <span>{project.role}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-text-secondary leading-relaxed mb-4">
        {project.desc}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech_stacks.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        <a
          href={project.repo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-all duration-300 hover:scale-105"
        >
          <Github size={16} />
          <span>Code</span>
        </a>
        
        {project.live_demo && (
          <a
            href={project.live_demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-all duration-300 hover:scale-105"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
        
        {project.tweet && (
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(project.tweet)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-all duration-300 hover:scale-105"
          >
            <Eye size={16} />
            <span>View Post</span>
          </a>
        )}
      </div>
    </div>
  );
};