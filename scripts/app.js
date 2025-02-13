const experienceData = [
    {
        company: "Siemens AG",
        position: "Data Engineer",
        duration: "Aug 2022 - December 2024,
        location: "Erlangen, Germany",
        responsibilities: [
            "Power Apps/Power BI (DAX) development",
            "Azure Machine Learning implementations",
            "Snowflake data warehouse management",
            "Cloud administration (AWS/GCP)"
        ]
    },
    {
        company: "Cognizant",
        position: "Developer",
        duration: "Aug 2022 - Present",
        location: "Erlangen, Germany",
        responsibilities: [
            "Power Apps/Power BI (DAX) development",
            "Azure Machine Learning implementations",
            "Snowflake data warehouse management",
            "Cloud administration (AWS/GCP)"
        ]
    },
    // Add other experiences from CV
];

const projectsData = [
    {
        title: "Scrunchies Hub",
        description: "E-commerce platform with CRM integration",
        tech: ["React", "Node.js", "MongoDB"],
        link: "https://www.scrunchieshub.com"
    },
    {
        title: "AI Gym Planner",
        description: "ML-powered fitness recommendation system",
        tech: ["Python", "Scikit-learn", "Flask"]
    }
];

// Initialize content
document.addEventListener('DOMContentLoaded', () => {
    // Populate experience
    const timeline = document.getElementById('experience-timeline');
    experienceData.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <h3>${exp.position} @ ${exp.company}</h3>
            <p class="duration">${exp.duration}</p>
            <ul>
                ${exp.responsibilities.map(res => `<li>${res}</li>`).join('')}
            </ul>
        `;
        timeline.appendChild(item);
    });

    // Populate projects
    const projectsList = document.getElementById('projects-list');
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.tech.map(t => `<span>${t}</span>`).join('')}
            </div>
            ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ''}
        `;
        projectsList.appendChild(card);
    });
});
