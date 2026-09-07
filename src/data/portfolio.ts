import type { Profile } from "./types";

// All site content lives here - edit this file to update the page.
export const PROFILE: Profile = {
  name: "Muhammad Dawood",
  role: "DevOps Engineer",
  tagline:
    "Cloud Infrastructure Automation · CI/CD Pipelines · Infrastructure as Code",
  location: "Islamabad, Pakistan",
  email: "idavidkhann@gmail.com",
  phone: "+92 3339420583",
  status: "open-to-work",

  summary:
    "Results-driven DevOps Engineer with hands-on experience automating cloud infrastructure " +
    "and deployment pipelines on AWS. Skilled in containerizing and orchestrating applications " +
    "with Docker and Kubernetes, building CI/CD pipelines with Jenkins and GitHub Actions, and " +
    "provisioning infrastructure as code with Terraform. Currently completing a B.S. in Computer " +
    "Science (graduating July 2026) and looking for a full-time or part-time DevOps role focused " +
    "on pipeline reliability, infrastructure automation, and cloud cost optimization.",

  competencies: [
    "Cloud Infrastructure (AWS)",
    "CI/CD Pipeline Automation",
    "Container Orchestration",
    "Infrastructure as Code",
    "Monitoring & Observability",
  ],

  skills: [
    {
      group: "Cloud & Infrastructure",
      tags: [
        "aws-ec2",
        "aws-ecs",
        "aws-eks",
        "aws-s3",
        "aws-iam",
        "aws-vpc",
        "aws-alb",
        "route53",
        "lambda",
        "terraform",
        "ansible",
      ],
    },
    {
      group: "Containers & CI/CD",
      tags: [
        "docker",
        "kubernetes",
        "kind",
        "helm",
        "argocd",
        "jenkins",
        "github-actions",
        "git",
      ],
    },
    {
      group: "Monitoring & OS",
      tags: ["prometheus", "grafana", "linux", "bash"],
    },
  ],

  experience: [
    {
      title: "DevOps Engineer Intern",
      org: "TechCreator",
      location: "Swabi, Pakistan",
      dates: "Nov 2024 – Feb 2025",
      points: [
        "Deployed a Node.js application to AWS EC2 using PM2, achieving 99.9% uptime with zero unplanned downtime over the engagement.",
        "Containerized a Node.js application with Docker and deployed it to AWS ECS, cutting deployment time by roughly 40% versus the prior manual process.",
        "Built and maintained CI/CD pipelines in Jenkins and GitHub Actions, automating test, build, and deploy stages across dev, staging, and prod environments.",
        "Provisioned AWS infrastructure - VPC, subnets, security groups, EC2, and IAM - for two international clients, cutting manual provisioning effort by 60%.",
        "Authored documentation and deployment runbooks for 5+ environment setups, reducing onboarding time for new engineers.",
      ],
    },
  ],

  projects: [
    {
      title: "Three-Tier App on Kubernetes with Prometheus & Grafana",
      stack: ["Kubernetes", "Kind", "Helm", "Prometheus", "Grafana"],
      description:
        "Deployed a full three-tier application (frontend, backend, database) on a local Kind cluster and installed Prometheus and Grafana via Helm with 8 custom alerting rules for CPU, memory, and pod restarts - cutting simulated incident detection time by ~70% versus log-only debugging.",
      link: null,
      link_label: null,
    },
    {
      title: "Docker Image Optimization",
      stack: ["Docker", "Alpine", "CI/CD"],
      description:
        "Refactored Dockerfiles using multi-stage builds and slim/Alpine base images, shrinking a bloated image from 1.1 GB to ~160 MB (an 85% reduction) and cutting average pipeline build time by 3 minutes per run.",
      link: null,
      link_label: null,
    },
    {
      title: "AWS Infrastructure Automation with Terraform",
      stack: ["Terraform", "AWS", "S3", "DynamoDB"],
      description:
        "Built modular Terraform configurations for VPC, EC2 launch templates, ALB, security groups, and IAM roles, with remote state in S3 and DynamoDB locking - reducing infrastructure provisioning time from ~3 hours to under 8 minutes.",
      link: null,
      link_label: null,
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Swabi, KP · GPA 3.34/4.0 · Expected July 2026",
    },
  ],

  certifications: [
    "AWS Certified Solutions Architect – Associate, Udemy",
    "AWS Zero to Hero, TrainWithShubham",
    "Docker, Kubernetes, Ansible & Jenkins, KodeKloud",
    "Networking Fundamentals, Cisco",
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/idavidkhan",
    github: "https://github.com/idavidkhan",
    booking: "https://calendly.com/idavidkhann/30min",
  },
};
