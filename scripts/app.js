// ----------------------------
// Data Arrays for Dynamic Content
// ----------------------------

// Professional Experience
const experienceData = [
  {
    company: "Siemens AG, Erlangen",
    position: "Data Engineer",
    duration: "Aug 2022 - Present",
    responsibilities: [
      "Working with Power Apps, Power BI (DAX), Machine Learning (Azure), Snowflake, Sharepoint sites, and Predictive Analysis",
      "Cloud Administration tasks (GCP, AWS)"
    ]
  },
  {
    company: "FAU, Erlangen",
    position: "Strategic Assistance",
    duration: "Mar 2022 - Feb 2023",
    responsibilities: [
      "Web Developer for the Ai4Gov Project",
      "Provided strategic assistance in developing Ai4Gov"
    ]
  },
  {
    company: "Cognizant, Bengaluru, India",
    position: "Developer / Business Continuity Manager",
    duration: "Jun 2019 - Aug 2021",
    responsibilities: [
      "Developed & deployed applications using Agile methodology",
      "Managed data in Oracle Database (11g, 20c)",
      "Maintained software and coordinated business continuity"
    ]
  }
];

// Academic Profile
const educationData = [
  { institution: "Gisma University of Applied Science", location: "Potsdam, Germany" },
  { institution: "K L University", location: "Vijayawada, India" },
  { institution: "Narayana Junior College", location: "Vijayawada, India" },
  { institution: "Narayana E.M. High School", location: "Vijayawada, India" }
];

// Industrial Training
const trainingData = [
  {
    program: "BEPEC Solutions Training",
    duration: "May 2019",
    details: "Development of Web Machine Learning Apps; using Random Forest Algorithm; prediction visualization in Python."
  },
  {
    program: "Cognizant Internship",
    duration: "Jan 2019 - Apr 2019",
    details: "Development of web applications from scratch using Waterfall and Agile methodologies."
  },
  {
    program: "Golars Networks Training",
    duration: "May 2017 - Jun 2017",
    details: "Development of modules for IoT device security with encryption and predictive analysis visualization."
  }
];

// Publications
const publicationData = [
  {
    title: "Hybrid approach for securing IOT DEVICES",
    publication: "International Journal of Innovative Technology and Exploring Engineering (IJITEE)",
    issue: "Vol-8, Issue-4, Feb 2019"
  }
];

// Project Profile
const projectsData = [
  {
    title: "Scrunchies Hub",
    description: "Developed a website for a startup including logo design, sales strategy, and CRM management. Currently serving as Managing Partner.",
    link: "http://www.scrunchieshub.com"
  },
  {
    title: "Gym Application",
    description: "Created a machine learning-based application to predict exercise and diet plans using user data (age, weight, height).",
    link: ""
  }
];

// Skill Set (Percentage indicates proficiency)
const skillsData = [
  { skill: "Java", level: 80 },
  { skill: "SQL", level: 90 },
  { skill: "PLSQL", level: 85 },
  { skill: "Python", level: 90 },
  { skill: "Machine Learning", level: 85 },
  { skill: "HTML/CSS", level: 80 },
  { skill: "DAX", level: 70 },
  { skill: "Snowflake", level: 80 },
  { skill: "Cloud Administration", level: 80 }
];

// Workshops, Seminars & Certifications
const workshopsData = [
  "Innovation & Leadership course (EELISA)",
  "Seminar on 'Big Data & Machine Learning' by Ecovation Solutions, Feb 2018",
  "Workshop on 'AI, Big Data & Machine Learning' at KL University, Feb 2018",
  "Snowflake Training (3 Certifications), Sep 2022",
  "AWS Machine Learning Practitioner, Dec 2020",
  "Certification on Artificial Intelligence (Cognizant Academy), Aug 2020",
  "Certified Jr. Developer/App Analyst AD & AVM (Cognizant Academy), Jan 2020",
  "Certified Machine Learning Engineer (Bepec Solutions), May 2019",
  "Certification in Natural Language Processing (KL University), May 2018"
];

// General Information
const generalInfoData = [
  "Languages: English (C1), German (A2)",
  "Hobbies: Photography, Badminton, Cycling",
  "Accomplishment: Second runner-up in Hackathon (Smart Bridge Education Services), 2017"
];

// ----------------------------
// Functions to Populate Sections
// ----------------------------

function populateExperience() {
  const timeline = document.getElementById("experience-timeline");
  experienceData.forEach(exp => {
    const item = document.createElement("div");
    item.className = "timeline-item fade-in";
    item.innerHTML = `
      <h3>${exp.position} @ ${exp.company}</h3>
      <p class="duration">${exp.duration}</p>
      <ul>
        ${exp.responsibilities.map(res => `<li>${res}</li>`).join("")}
      </ul>
    `;
    timeline.appendChild(item);
  });
}

function populateEducation() {
  const eduList = document.getElementById("education-list");
  educationData.forEach(edu => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${edu.institution}</strong> - ${edu.location}`;
    eduList.appendChild(li);
  });
}

function populateTraining() {
  const trainingList = document.getElementById("training-list");
  trainingData.forEach(training => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${training.program}</strong> (${training.duration})<br>${training.details}`;
    trainingList.appendChild(li);
  });
}

function populatePublication() {
  const publicationList = document.getElementById("publication-list");
  publicationData.forEach(pub => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${pub.title}</strong> - ${pub.publication} (${pub.issue})`;
    publicationList.appendChild(li);
  });
}

function populateProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  projectsData.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card fade-in";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      ${project.link ? `<a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>` : ""}
    `;
    projectsGrid.appendChild(card);
  });
}

function populateSkills() {
  const skillsGrid = document.getElementById("skills-grid");
  skillsData.forEach(skill => {
    const barContainer = document.createElement("div");
    barContainer.className = "skill-bar-container fade-in";
    barContainer.innerHTML = `
      <p>${skill.skill}</p>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${skill.level}%"></div>
      </div>
    `;
    skillsGrid.appendChild(barContainer);
  });

  // Animate skill progress bars after a brief delay
  setTimeout(() => {
    document.querySelectorAll(".skill-progress").forEach(bar => {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  }, 500);
}

function populateWorkshops() {
  const workshopsList = document.getElementById("workshops-list");
  workshopsData.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    workshopsList.appendChild(li);
  });
}

function populateGeneralInfo() {
  const generalInfoList = document.getElementById("general-info-list");
  generalInfoData.forEach(info => {
    const li = document.createElement("li");
    li.innerText = info;
    generalInfoList.appendChild(li);
  });
}

// ----------------------------
// Scroll Animations with IntersectionObserver
// ----------------------------
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// ----------------------------
// Initialize All Content on DOM Load
// ----------------------------
document.addEventListener("DOMContentLoaded", () => {
  populateExperience();
  populateEducation();
  populateTraining();
  populatePublication();
  populateProjects();
  populateSkills();
  populateWorkshops();
  populateGeneralInfo();
  setupScrollAnimations();
});
