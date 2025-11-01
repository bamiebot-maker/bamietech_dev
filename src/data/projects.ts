import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Owl Vault - Multi-signature Vault",
    description: "Advanced multi-signature vaults and encrypted document storage for digital assets on BlockDAG ecosystem. Secure storage for your most important digital assets with multi-layer encryption.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop",
    technologies: ["BlockDAG", "React", "TypeScript", "Solidity", "Web3", "Encryption"],
    liveUrl: "https://owl-vault.vercel.app/",
    githubUrl: "https://github.com/bamiebot-maker/owl-vault",
    featured: true
  },
  {
    id: 2,
    title: "Lodgie - Property Rental Platform",
    description: "Innovative platform connecting landlords with tenants. Features property listings, tenant screening, rental management, and payment processing. Currently in active development.",
    image: "/lodgie.png",
    technologies: ["React", "Node.js", "MongoDB", "Solidity", "Web3", "Payment Gateway"],
    liveUrl: "#",
    githubUrl: "https://github.com/bamiebot-maker/lodgie",
    featured: true
  },
  {
    id: 3,
    title: "Bamiedata Telecom Platform",
    description: "Comprehensive telecom services platform selling airtime, data subscriptions, and other telecom services. Built with custom CMS on Samorabot infrastructure.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
    technologies: ["PHP", "MySQL", "JavaScript", "CMS", "Samorabot", "Payment Integration"],
    liveUrl: "https://bamiedata.com.ng",
    githubUrl: "https://github.com/bamiebot/bamiedata",
    featured: true
  },
  {
    id: 4,
    title: "AI Prompt Management System",
    description: "Platform for managing, sharing, and optimizing AI prompts with community features and analytics for prompt engineers.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "OpenAI API"],
    liveUrl: "#",
    githubUrl: "https://github.com/bamiebot/ai-prompt-manager",
    featured: false
  }
];
