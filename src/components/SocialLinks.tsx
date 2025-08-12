import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/BiMalxMe",
      icon: Github,
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/bimal-chalise-52a114339/",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://x.com/BiMalxMe",
      icon: Twitter,
    },
    {
      name: "Email",
      url: "mailto:journeyxbimal@gmail.com",
      icon: Mail,
    }
  ];

  return (
    <div className="flex items-center justify-center space-x-8">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            aria-label={link.name}
          >
            <IconComponent size={20} />
          </a>
        );
      })}
    </div>
  );
};