// ----------------------------
// Data Arrays for Dynamic Content
// ----------------------------

// Professional Experience
const experienceData = [
  {
    company: "Siemens AG, Erlangen, Germany",
    position: "Data Scientist / Analyst (part-time)",
    duration: "Aug 2022 - December 2024",
    responsibilities: [
      "Designed, developed, and deployed custom Power Apps and Power BI solutions, utilizing DAX to create complex data models and perform advanced data analysis, resulting in improved business insights and decision-making capabilities.",
      "Leveraged machine learning capabilities in Azure to develop predictive models, driving business growth through data-driven decision-making and process optimization.",
      "Built and managed ETL pipelines to extract, transform, and load data from multiple sources into centralized repositories, ensuring data quality and consistency for downstream analytics and machine learning workflows.",
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
  },
  {
    company: "Scrunchies Hub, Vijayawada, India",
    position: "Partner",
    duration: "June 2021 - Present",
    responsibilities: [
        "Oversee the overall operations and management of Scrunchies Hub, ensuring smooth day-to-day functioning.",
      "Develop and implement business strategies to drive sales growth and enhance customer satisfaction.",
      "Design and manage the e-commerce website, ensuring seamless user experience and efficient functionality.",
      "Lead product development efforts, including the introduction of new scrunchie patterns and customization options to meet market demands.",
      "Collaborate with suppliers to ensure the availability of high-quality materials for production.",
      "Manage marketing campaigns, including social media promotions and customer engagement initiatives, to boost brand visibility.",
      "Analyze sales data to identify trends and make data-driven decisions for inventory management and demand forecasting.",
      "Build and maintain relationships with customers by addressing inquiries, resolving issues, and ensuring a positive shopping experience.",
      "Monitor financial performance, including budgeting, expense control, and profit optimization.",
      "Stay updated with market trends to identify new opportunities for business growth and innovation."
    ],
       link:"https://www.scrunchieshub.com"
  }
];

// Academic Profile
const educationData = [
  {
    course: "Masters in Data Science, AI, Digital Business",
    institution: "Gisma University of Applied Science",
    location: "Potsdam, Germany",
    year: "March 2025"
  },
  {
    course: "Bachelor of Technology in Computer Science",
    institution: "K L University",
    location: "Vijayawada, India",
    year: "March 2019"
  },
  {
    course: "Intermediate in MPC (Maths, Physics, Chemistry)",
    institution: "Narayana Junior College",
    location: "Vijayawada, India",
    year: "May 2015"
  },
  {
    course: "High School",
    institution: "Narayana E.M. High School",
    location: "Vijayawada, India",
    year: "May 2013"
  }
]

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
  },
  {
    title: "Leveraging Artificial Intelligence for Sustainable Business Innovation: Advancing Data Management and User Engagement in European Enterprises",
    publication: "",
    issue: "yet to UPDATE from publication team",
    link: ""
  },
    {
    title: "Behavioral Competencies in Virtual Teams ",
    publication: "",
    issue: "Medium",
    link: "https://medium.com/@hrushikperumalla/behavioral-competencies-in-virtual-teams-aba0e8cb500a"
  }

];

// Project Profile
const projectsData = [
  {
    title: "Gym Application",
    description: "Developed a machine learning-based application hosted on Heroku to predict personalized exercise and diet plans using user input data such as age, weight, and height. Integrated predictive models to enhance user health insights.",
    link: "https://github.com/hrushikp/heroku-apps"
  },
  {
    title: "House Price Prediction",
    description: "Built a machine learning model to predict house prices based on various features such as location, size, and amenities. The project demonstrates data preprocessing, feature engineering, and predictive modeling techniques.",
    link: "https://github.com/hrushikp/house_price_detection"
  },
  {
    title: "Drowsiness Detection",
    description: "Implemented a real-time drowsiness detection system using computer vision techniques. The project uses OpenCV and machine learning to monitor driver alertness and prevent accidents caused by fatigue.",
    link: "https://github.com/hrushikp/Drowsyness_Detection"
  },
  {
    title: "Ecommerce Data Reviews",
    description: "Analyzed e-commerce review datasets to extract meaningful insights using natural language processing (NLP). The project includes sentiment analysis and visualization of customer feedback for business decision-making.",
    link: "https://github.com/hrushikp/e-commerce_data_reviews"
  },
  {
    title: "Sales Data Prediction",
    description: "Developed a sales forecasting model using historical sales data. The project includes data cleaning, feature selection, and predictive modeling to assist businesses in demand planning and inventory management.",
    link: "https://github.com/hrushikp/Sales_data_prediction/tree/main"
  }
];


// Skill Set (Percentage indicates proficiency)
const skillsData = [
  {skill: "Java", level: 80},
  {skill: "SQL", level: 90},
  {skill: "PLSQL", level: 85},
  {skill: "Python", level: 90},
  {skill: "Machine Learning", level: 85},
  {skill: "HTML/CSS", level: 80},
  {skill: "DAX", level: 70},
  {skill: "Snowflake", level: 80},
  {skill: "Cloud Administration", level: 80}
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
  timeline.innerHTML = ''; // Clear existing content before rendering

  experienceData.forEach(exp => {
    const item = document.createElement("div");
    item.className = "timeline-item fade-in";

    item.innerHTML = `
      <h3>${exp.position} @ ${exp.company}</h3>
      <p class="duration">${exp.duration}</p>
      <ul>
        ${exp.responsibilities.map(res => `<li>${res}</li>`).join("")}
      </ul>
      ${exp.link && exp.link !== "na" ? 
        `<a href="${exp.link}" target="_blank" class="btn btn-primary">View</a>` : ""}
    `;

    timeline.appendChild(item);
  });
}


// Function to Populate Education Section
function populateEducation() {
  const eduList = document.getElementById("education-list");
  educationData.forEach(edu => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${edu.course}</strong><br>
      ${edu.institution} - ${edu.location}<br>
      <span class="graduation-year">Graduated: ${edu.year}</span>
    `;
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
  }, {threshold: 0.1});

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

document.getElementById("download-cv").addEventListener("click", function (e) {
  e.preventDefault();

  // Show loading state
  const originalHtml = this.innerHTML;
  this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';

  // Configure html2pdf options
  const options = {
    margin: [0.3, 0.5, 0.3, 0.5],
    filename: `Hrushik_Perumalla_CV_${new Date().toISOString().slice(0, 10)}.pdf`,
    image: {
      type: "jpeg",
      quality: 0.95,
      useCORS: true
    },
    html2canvas: {
      scale: 2, // Optimal balance between quality and performance
      letterRendering: true,
      useCORS: true,
      allowTaint: true,
      logging: true
    },
    jsPDF: {
      unit: "in",
      format: "a4",
      orientation: "portrait",
      compressPDF: true
    },
    pagebreak: {
      mode: ['css'],
      before: '.page-break'
    }
  };

  // Clone element to prevent layout shifts
  const element = document.getElementById("cv-section").cloneNode(true);

  // Add print-specific styling
  const style = document.createElement('style');
  style.innerHTML = `
    @media print {
      body { -webkit-print-color-adjust: exact; }
      .section-break { page-break-before: always; }
      .avoid-break { break-inside: avoid; }
    }
    img { max-width: 100% !important; }
    * { box-sizing: border-box; }
  `;
  element.prepend(style);

  // Generate PDF
  html2pdf()
    .set(options)
    .from(element)
    .toPdf()
    .get('pdf')
    .then(pdf => {
      // Add footer
      const totalPages = pdf.internal.getNumberOfPages();
      for(let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.text(`Generated on ${new Date().toLocaleDateString()} - Page ${i} of ${totalPages}`,
          pdf.internal.pageSize.width - 5.5,
          pdf.internal.pageSize.height - 0.5,
          { align: 'right' }
        );
      }
    })
    .save()
    .finally(() => {
      // Restore button state
      this.innerHTML = originalHtml;
    });
});



  const downloadBtn = document.getElementById('download-cv');
  const popup = document.getElementById('downloadPopup');
  const confirmBtn = document.getElementById('confirmDownload');
  const cancelBtn = document.getElementById('cancelDownload');

  downloadBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.display = 'block';
});

  confirmBtn.addEventListener('click', () => {
  // Replace with actual PDF path
  window.location.href = 'path/to/cv.pdf';
  popup.style.display = 'none';
});

  cancelBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

  // Close when clicking outside
  window.addEventListener('click', (e) => {
  if (e.target === popup) {
  popup.style.display = 'none';
}
});






  