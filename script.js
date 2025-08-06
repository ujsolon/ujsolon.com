function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = section.previousElementSibling;
    const arrow = header.querySelector('.fa-caret-down, .fa-caret-up');
    
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        // Change arrow to up when expanded
        if (arrow) {
            arrow.className = arrow.className.replace('fa-caret-down', 'fa-caret-up');
        }
    } else {
        section.style.display = 'none';
        // Change arrow to down when collapsed
        if (arrow) {
            arrow.className = arrow.className.replace('fa-caret-up', 'fa-caret-down');
        }
    }
}

// Set initial state - all sections hidden
document.addEventListener('DOMContentLoaded', function() {
    const sections = ['workExperience', 'education', 'portfolioProjects', 'personalLife'];
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none'; // Changed from 'block' to 'none'
        }
    });
});