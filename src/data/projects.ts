export interface Project {
  title: string;
  desc: string;
  tweet?: string;
  preview?: string;
  tech_stacks: string[];
  repo_url: string;
  live_demo?: string;
  role: string;
  achievements: string;
  screenshots?: string[];
  category: string;
  status: string;
  section: "web2" | "web3";
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built for scalability and modern UX.",
    tweet: "🚀 Just launched my e-commerce platform with React & Node.js! Real-time updates, secure payments, and lightning-fast performance.",
    preview: "https://example.com/ecommerce-preview.jpg",
    tech_stacks: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    repo_url: "https://github.com/bimalchalise/ecommerce-platform",
    live_demo: "https://ecommerce-demo.bimalchalise.com",
    role: "Full-stack Developer",
    achievements: "Increased conversion rate by 40%, processed $100K+ in transactions",
    screenshots: ["https://example.com/screenshot1.jpg", "https://example.com/screenshot2.jpg"],
    category: "Web App",
    status: "Completed",
    section: "web2",
  },
  {
    title: "Task Management SaaS",
    desc: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
    tweet: "Built a powerful task management SaaS that teams love! Real-time collaboration meets beautiful design.",
    preview: "https://example.com/task-preview.jpg",
    tech_stacks: ["Vue.js", "Python", "Django", "WebSocket", "PostgreSQL", "Docker"],
    repo_url: "https://github.com/bimalchalise/task-manager",
    live_demo: "https://taskmanager.bimalchalise.com",
    role: "Lead Developer",
    achievements: "Serving 1000+ users, 99.9% uptime, featured on ProductHunt",
    screenshots: ["https://example.com/task1.jpg", "https://example.com/task2.jpg"],
    category: "SaaS",
    status: "Active",
    section: "web2",
  },
  {
    title: "DeFi Trading Platform",
    desc: "Decentralized finance platform for automated trading strategies with smart contracts and yield farming capabilities.",
    tweet: "Built a DeFi platform that's revolutionizing automated trading! Smart contracts meet yield farming.",
    preview: "https://example.com/defi-preview.jpg",
    tech_stacks: ["Solidity", "React", "Web3.js", "Hardhat", "IPFS", "Ethereum"],
    repo_url: "https://github.com/bimalchalise/defi-platform",
    live_demo: "https://defi.bimalchalise.com",
    role: "Blockchain Developer",
    achievements: "$2M+ TVL, 500+ active users, featured on DeFi Pulse",
    screenshots: ["https://example.com/defi1.jpg", "https://example.com/defi2.jpg"],
    category: "DeFi",
    status: "Active",
    section: "web3",
  },
  {
    title: "NFT Marketplace",
    desc: "Decentralized marketplace for digital collectibles with minting capabilities and royalty distribution system.",
    tweet: "Launched an NFT marketplace that puts creators first! Fair royalties and seamless minting experience.",
    preview: "https://example.com/nft-preview.jpg",
    tech_stacks: ["Solidity", "Next.js", "Ethers.js", "Polygon", "The Graph", "IPFS"],
    repo_url: "https://github.com/bimalchalise/nft-marketplace",
    live_demo: "https://nft.bimalchalise.com",
    role: "Full-stack Blockchain Developer",
    achievements: "10K+ NFTs minted, 2K+ creators onboarded",
    screenshots: ["https://example.com/nft1.jpg", "https://example.com/nft2.jpg"],
    category: "NFT",
    status: "Completed",
    section: "web3",
  },
  {
    title: "Open Source CLI Tool",
    desc: "Developer productivity tool that automates common development tasks, project scaffolding, and deployment workflows.",
    tweet: "Open source CLI tool that's making developers' lives easier! 1000+ GitHub stars and growing.",
    preview: "https://example.com/cli-preview.jpg",
    tech_stacks: ["Node.js", "TypeScript", "Commander.js", "Chalk", "Inquirer"],
    repo_url: "https://github.com/bimalchalise/dev-cli-tool",
    role: "Open Source Maintainer",
    achievements: "1000+ GitHub stars, 5K+ weekly downloads on npm",
    screenshots: ["https://example.com/cli1.jpg"],
    category: "Open Source",
    status: "Active",
    section: "web2",
  }
];