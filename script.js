// Dynamic Content Loading
const experienceData = [
    {
        company: "Siemens AG",
        position: "Data Engineer",
        duration: "Aug 2022 - Present",
        location: "Erlangen, Germany",
        responsibilities: [
            "Power Apps/Power BI (DAX) development",
            "Azure Machine Learning implementations",
            "Snowflake data warehouse management",
            "Cloud administration (AWS/GCP)"
        ],
        tools: ["Power BI", "Azure ML", "Snowflake", "AWS"]
    },
    // Add other experiences similarly
];

const skillsData = [
    {name: "Python", level: 90},
    {name: "Machine Learning", level: 85},
    {name: "AWS/GCP", level: 80},
    {name: "SQL", level: 95},
    {name: "Data Visualization", level: 88}
];

const projectsData = [
    {
        title: "Scrunchies Hub",
        description: "Full-stack e-commerce platform with CRM integration",
        tech: ["React", "Node.js", "MongoDB"],
        link: "https://www.scrunchieshub.com"
    },
    {
        title: "AI Gym Planner",
        description: "ML-powered fitness recommendation system",
        tech: ["Python", "Scikit-learn", "Flask"]
    }
];

// Initialize Components
document.addEventListener('DOMContentLoaded', () => {
    // Load Experience Timeline
    const timeline = document.querySelector('.timeline');
    experienceData.forEach(exp => {
        const html = `
            <div class="timeline-item">
                <h3>${exp.position}</h3>
                <p class="company">${exp.company} • ${exp.duration}</p>
                <ul class="responsibilities">
                    ${exp.responsibilities.map(res => `<li>${res}</li>`).join('')}
                </ul>
                <div class="tech-stack">
                    ${exp.tools.map(tool => `<span>${tool}</span>`).join('')}
                </div>
            </div>
        `;
        timeline.insertAdjacentHTML('beforeend', html);
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item, .skill-card, .project-card').forEach(el => {
        observer.observe(el);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
