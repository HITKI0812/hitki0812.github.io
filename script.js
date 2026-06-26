const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Interactive skills map
const skillDetails = document.getElementById("skillDetails");
const skillNodes = document.querySelectorAll(".skill-node");
const skillLines = document.querySelectorAll(".skill-line");

const skillInfo = {
  core: {
    title: "Connected technical profile",
    text: "My profile connects backend development, QA testing, databases, frontend basics and technical documentation.",
    tags: [".NET", "QA", "SQL", "GitHub"]
  },
  backend: {
    title: "Backend Development",
    text: "I use backend development to build APIs, structure business logic and connect applications with databases.",
    tags: ["C#", ".NET Web API", "REST APIs", "EF Core"]
  },
  csharp: {
    title: "C#",
    text: "Main language used in my backend project InventoryApi and my current .NET learning path.",
    tags: ["C#", ".NET", "OOP"]
  },
  efcore: {
    title: "Entity Framework Core",
    text: "Used to connect the API with the database through entities, repositories and migrations.",
    tags: ["EF Core", "Migrations", "Data Access"]
  },
  qa: {
    title: "QA Testing",
    text: "QA helps me validate features, detect errors and document evidence so projects look more professional.",
    tags: ["Manual Testing", "Test Cases", "Bug Reports"]
  },
  postman: {
    title: "Postman",
    text: "Tool used to test REST endpoints, validate responses and document API behavior.",
    tags: ["API Testing", "Requests", "Responses"]
  },
  bugs: {
    title: "Bug Reports",
    text: "A key QA skill for documenting problems clearly with steps, expected result and actual result.",
    tags: ["Evidence", "Severity", "Repro Steps"]
  },
  data: {
    title: "Databases",
    text: "Databases support my backend and reporting skills through structured data, queries and validations.",
    tags: ["SQL", "SQLite", "Data Validation"]
  },
  sqlite: {
    title: "SQLite",
    text: "Lightweight database used in InventoryApi for local development and testing.",
    tags: ["SQLite", "Local DB", "EF Core"]
  },
  excel: {
    title: "Excel & Reporting",
    text: "Useful for data organization, reports, validation and process control in real work environments.",
    tags: ["Excel", "Reports", "Data Cleaning"]
  },
  frontend: {
    title: "Frontend Basics",
    text: "Frontend skills help me build portfolio pages and simple interfaces to present projects clearly.",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  htmlcss: {
    title: "HTML & CSS",
    text: "Used to structure and style this portfolio website.",
    tags: ["HTML5", "CSS3", "Responsive Design"]
  },
  javascript: {
    title: "JavaScript",
    text: "Used to add simple interactions such as menus, animations and dynamic interface behavior.",
    tags: ["DOM", "Events", "Interactivity"]
  },
  docs: {
    title: "Technical Documentation",
    text: "Documentation makes projects easier to understand, test, review and present professionally.",
    tags: ["README", "User Guides", "Technical Docs"]
  },
  github: {
    title: "GitHub",
    text: "Used to organize repositories, publish projects, document progress and show technical growth.",
    tags: ["Git", "GitHub Pages", "Portfolio"]
  },
  technical: {
    title: "Technical Docs",
    text: "I document project purpose, setup, technologies, features, endpoints and testing evidence.",
    tags: ["Project Docs", "API Docs", "QA Evidence"]
  }
};

function updateSkillDetails(skillKey) {
  const info = skillInfo[skillKey] || skillInfo.core;

  skillDetails.innerHTML = `
    <p class="section-label">Selected Skill</p>
    <h3>${info.title}</h3>
    <p>${info.text}</p>
    <div class="skill-detail-tags">
      ${info.tags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>
  `;
}

function setActiveSkill(skillKey) {
  skillNodes.forEach((node) => {
    node.classList.toggle("active", node.dataset.skill === skillKey);
  });

  skillLines.forEach((line) => {
    line.classList.remove("active");
  });

  if (["backend", "csharp", "efcore"].includes(skillKey)) {
    document.querySelectorAll(".line-backend").forEach((line) => line.classList.add("active"));
  }

  if (["qa", "postman", "bugs"].includes(skillKey)) {
    document.querySelectorAll(".line-qa").forEach((line) => line.classList.add("active"));
  }

  if (["data", "sqlite", "excel"].includes(skillKey)) {
    document.querySelectorAll(".line-data").forEach((line) => line.classList.add("active"));
  }

  if (["frontend", "htmlcss", "javascript"].includes(skillKey)) {
    document.querySelectorAll(".line-frontend").forEach((line) => line.classList.add("active"));
  }

  if (["docs", "github", "technical"].includes(skillKey)) {
    document.querySelectorAll(".line-docs").forEach((line) => line.classList.add("active"));
  }

  updateSkillDetails(skillKey);
}

if (skillDetails && skillNodes.length > 0) {
  skillNodes.forEach((node) => {
    node.addEventListener("mouseenter", () => setActiveSkill(node.dataset.skill));
    node.addEventListener("focus", () => setActiveSkill(node.dataset.skill));
    node.addEventListener("click", () => setActiveSkill(node.dataset.skill));
  });

  setActiveSkill("core");
}
