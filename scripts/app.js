// ----------------------------
// Data Arrays for Dynamic Content
// ----------------------------

// Professional Experience
const experienceData = [
  {
    company: "Siemens AG, Erlangen, Germany",
    position: "Data Engineer",
    duration: "Aug 2022 - December 2024",
    responsibilities: [
      "Designed, developed, and deployed custom Power Apps and Power BI solutions, utilizing DAX to create complex data models and perform advanced data analysis, resulting in improved business insights and decision-making capabilities.",
      "Leveraged machine learning capabilities in Azure to develop predictive models, driving business growth through data-driven decision-making and process optimization.",
      "Managed and maintained cloud administration tasks across multiple platforms, including GCP and AWS, ensuring high availability, scalability, and security of cloud-based data storage and integration solutions, including Snowflake and SharePoint sites."
    ]
  },
  {
    company: "FAU, Erlangen, Germany",
    position: "Strategic Assistance",
    duration: "Mar 2022 - Feb 2023",
    responsibilities: [
      "Developed and maintained the Ai4Gov project website as a Web Developer, ensuring seamless user experience and efficient functionality.",
      "Provided strategic assistance for the development of Ai4Gov, contributing to the project's overall success and growth.",
      "Utilized technical expertise to support the integration of Artificial Intelligence for Public Services, enhancing the project's impact and reach."
    ]
  },
  {
    company: "Cognizant, Bengaluru, India",
    position: "Developer / Business Continuity Manager",
    duration: "Jun 2019 - Aug 2021",
    responsibilities: [
      "Designed, developed, and deployed scalable applications for clients using agile methodology, collaborating with cross-functional teams to deliver high-quality results that met client requirements and expectations, utilizing Java, SQL, and PLSQL skills, and leveraging Eclipse, Service Now, Oracle DB, and Siebel CRM tools.",
      "Managed and maintained large datasets in Oracle Database (11g, 20c), performing complex data analysis, troubleshooting, and optimization to ensure data accuracy, integrity, and system performance, and updated and maintained existing software to ensure seamless operations.",
      "Worked as Business Continuity Manager, developing and implementing comprehensive continuity plans, conducting risk assessments, and providing training to ensure seamless project operations and minimize downtime in the event of disruptions or outages, ensuring business continuity and minimizing revenue loss."
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
    issue: "Vol-8, Issue-4, Feb 2019",
    link: "https://www.ijitee.org/wp-content/uploads/papers/v8i4/D2668028419.pdf"
  }
];

// Project Profile
const projectsData = [
  {
    title: "Scrunchies Hub",
    description: "Developed a website for a startup including logo design, sales strategy, and CRM management. Currently working as Managing Partner.",
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
    li.innerHTML = `
      <strong>${pub.title}</strong> - ${pub.publication} (${pub.issue}) 
      <a href="${pub.link}" target="_blank" class="btn btn-primary">View Publication</a>
    `;
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

document.getElementById("download-cv").addEventListener("click", function () {
  // Select the element you want to convert to PDF
  const element = document.getElementById("cv-section"); // Replace with your section's ID

  // Configure html2pdf options
  const options = {
    margin: [0.5, 0.5, 0.5, 0.5], // Margins in inches (top, left, bottom, right)
    filename: `Hrushik_Perumalla_CV_${new Date().toISOString().slice(0, 10)}.pdf`, // Dynamic filename with date
    image: { type: "jpeg", quality: 0.98 }, // High-quality JPEG images
    html2canvas: { scale: 4, useCORS: true }, // Higher scale for better resolution
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }, // A4 portrait layout
    pagebreak: { mode: ["avoid-all", "css", "legacy"] }, // Avoid page breaks inside elements
  };

  // Generate and save the PDF
  html2pdf().set(options).from(element).save();
});

