const sampleProjects = {
  projects: [
    {
      title: "Redesign Company Landing Page",
      description: "Work on improving UI/UX and responsiveness.",
      slug: "redesign-company-landing-page",
      status: "Not Started",
      priority: "Medium",
      image: "/images/sample-products/img1.png",
      dueDate: new Date("2025-09-01T00:00:00.000Z"),
      team: [
        "64faed29e123456789abcd03",
        "64faed29e123456789abcd04"
      ],
      owner: "64faed29e123456789abcd00",
    },
    {
      title: "Set Up DevOps Pipeline",
      description: "Automate CI/CD with GitHub Actions and Docker.",
      slug: "set-up-devops-pipeline",
      status: "In Progress",
      priority: "High",
      image: "/images/sample-products/img2.jpg",
      dueDate: new Date("2025-08-28T00:00:00.000Z"),
      team: [
        "64faed29e123456789abcd02"
      ],
      owner: "64faed29e123456789abcd00",
    },
    {
      title: "Research AI Tools for Support Bot",
      description: "Find suitable tools for building an AI chatbot.",
      slug: "research-ai-tools-for-support-bot",
      status: "Completed",
      priority: "Low",
      image: "/images/sample-products/img3.jpg",
      dueDate: new Date("2025-07-15T00:00:00.000Z"),
      team: [],
      owner: "64faed29e123456789abcd00",
    }
  ]
};

export default sampleProjects;
