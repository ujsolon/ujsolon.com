// Complete script.js file - cleaned up and fixed

// Simple News Section JavaScript
async function loadNews() {
    const newsContainer = document.getElementById('newsContainer');
    
    try {
        const response = await fetch('/news/news.json');
        
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
    
    // Show only first 3 posts maximum
    const postsToShow = posts.slice(0, 3);
    
    postsToShow.forEach((post, index) => {
        const isLatest = index === 0;
        const isHeadlineOnly = index > 0; // Posts 2 and 3 are headline-only
        
        if (isLatest) {
            // Latest post - full content
            newsHtml += `
                <div class="w3-container">
                    <h5 class="w3-opacity"><b>
                        ${post.url ? `<a href="${post.url}" target="_blank" rel="noopener" class="w3-text-theme" style="text-decoration: none;"><b>${post.title}</b></a>` : `<b>${post.title}</b>`}
                    </b></h5>
                    <h6 class="w3-text-theme">
                        <i class="fa ${getPlatformIcon(post.platform)} fa-fw w3-margin-right"></i>
                        ${formatDate(post.date)} • ${post.platform}
                    </h6>
                    <p>${post.content}</p>
                </div>
                <hr>
            `;
        } else {
            // Other posts - headline and platform only
            newsHtml += `
                <div class="w3-container news-headline-only">
                    <h6 class="w3-opacity">
                        ${post.url ? `<a href="${post.url}" target="_blank" rel="noopener" class="w3-text-theme" style="text-decoration: none;"><b>${post.title}</b></a>` : `<b>${post.title}</b>`}
                    </h6>
                    <p class="w3-text-theme" style="font-size: 13px; margin: 5px 0;">
                        <i class="fa ${getPlatformIcon(post.platform)} fa-fw"></i>
                        ${formatDate(post.date)} • ${post.platform}
                    </p>
                </div>
                ${index < postsToShow.length - 1 ? '<hr style="margin: 10px 0;">' : ''}
            `;
        }
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
    const sections = ['workExperience', 'education', 'portfolioProjects', 'personalLife', 'news'];
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