function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

// Set initial state
document.addEventListener('DOMContentLoaded', function() {
    const sections = ['workExperience', 'education', 'portfolioProjects'];
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    });
});
