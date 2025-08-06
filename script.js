// Complete script.js file - cleaned up and fixed

// Simple News Section JavaScript
async function loadNews() {
    const newsContainer = document.getElementById('newsContainer');
    
    try {
        const response = await fetch('news.json');
        
        if (!response.ok) {
            throw new Error('News data not available');
        }
        
        const newsData = await response.json();
        
        if (newsData.posts && newsData.posts.length > 0) {
            renderNews(newsData.posts);
        } else {
            showNoNews();
        }
        
    } catch (error) {
        console.log('Could not load news data:', error);
        showNoNews();
    }
}

function renderNews(posts) {
    const newsContainer = document.getElementById('newsContainer');
    let newsHtml = '';
    
    posts.forEach((post, index) => {
        const isLatest = index === 0;
        
        newsHtml += `
            <div class="highlight-container">
                <div class="w3-container">
                    ${isLatest ? '<div class="latest-badge">Latest</div>' : ''}
                    <h5 class="w3-opacity">
                        <b>${post.title}</b>
                        ${post.url ? `<a href="${post.url}" target="_blank" rel="noopener" class="w3-text-theme" style="margin-left: 10px; font-size: 14px;"><i class="fa fa-external-link"></i></a>` : ''}
                    </h5>
                    <h6 class="w3-text-theme">
                        <i class="fa ${getPlatformIcon(post.platform)} fa-fw w3-margin-right"></i>
                        ${formatDate(post.date)} • ${post.platform}
                    </h6>
                    <p>${post.content}</p>
                </div>
                ${index < posts.length - 1 ? '<hr>' : ''}
            </div>
        `;
    });
    
    newsContainer.innerHTML = newsHtml;
}

function showNoNews() {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = `
        <div class="w3-container">
            <p style="text-align: center; color: #8A2BE2; font-style: italic;">
                <i class="fa fa-info-circle"></i> No recent updates available.
            </p>
        </div>
    `;
}

function getPlatformIcon(platform) {
    const icons = {
        'linkedin': 'fa-linkedin',
        'twitter': 'fa-twitter',
        'x': 'fa-twitter',
        'facebook': 'fa-facebook',
        'youtube': 'fa-youtube',
        'github': 'fa-github',
        'wordpress': 'fa-wordpress',
        'blog': 'fa-pencil',
        'website': 'fa-globe'
    };
    return icons[platform.toLowerCase()] || 'fa-link';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

// Toggle Section Function
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

// Initialize page when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Load news data
    loadNews();
    
    // Set initial state - all sections except news hidden
    const sections = ['workExperience', 'education', 'portfolioProjects', 'personalLife'];
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Keep news section visible, hide others
            if (sectionId === 'news') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        }
    });
});