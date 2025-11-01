// Complete script.js file - cleaned up and fixed

let allNewsPosts = [];
let displayedCount = 0;
const POSTS_PER_PAGE = 3;

async function loadNews() {
    const newsContainer = document.getElementById('newsContainer');
    const loadMoreContainer = document.getElementById('loadMoreContainer');

    try {
        const response = await fetch('/news/news.json');
        if (!response.ok) throw new Error('News data not available');
        const newsData = await response.json();

        if (newsData.posts && newsData.posts.length > 0) {
            allNewsPosts = newsData.posts;
            renderNews();

            // Show Load More button if more posts remain AND on /news page
            if (isNewsPage() && allNewsPosts.length > POSTS_PER_PAGE) {
                loadMoreContainer.style.display = 'block';
                document.getElementById('loadMoreButton').addEventListener('click', loadMoreNews);
            }
        } else {
            showNoNews();
        }
    } catch (error) {
        console.error('Could not load news data:', error);
        showNoNews();
    }
}

function renderNews() {
    const newsContainer = document.getElementById('newsContainer');
    const isFullNewsPage = isNewsPage();

    // Calculate how many posts to show
    const nextCount = Math.min(displayedCount + POSTS_PER_PAGE, allNewsPosts.length);
    const postsToRender = allNewsPosts.slice(0, nextCount);

    let newsHtml = '';
    postsToRender.forEach((post, index) => {
        const isLatest = index === 0;
        const showFullContent = isFullNewsPage || isLatest;

        if (showFullContent) {
            // Full-size version (used on /news OR latest post on home)
            newsHtml += `
                <div class="w3-container">
                    <h5 class="w3-opacity"><b>
                        ${post.url
                            ? `<a href="${post.url}" target="_blank" class="w3-text-theme" style="text-decoration:none;"><b>${post.title}</b></a>`
                            : `<b>${post.title}</b>`}
                    </b></h5>
                    <h6 class="w3-text-theme">
                        <i class="${getPlatformIcon(post.platform)} fa-fw w3-margin-right"></i>
                        ${formatDate(post.date)} • ${post.platform}
                    </h6>
                    <p>${post.content}</p>
                </div>
                <hr>
            `;
        } else {
            // Smaller headline-only version (used for additional posts on home)
            newsHtml += `
                <div class="w3-container news-headline-only">
                    <h6 class="w3-opacity">
                        ${post.url
                            ? `<a href="${post.url}" target="_blank" class="w3-text-theme" style="text-decoration:none;"><b>${post.title}</b></a>`
                            : `<b>${post.title}</b>`}
                    </h6>
                    <p class="w3-text-theme" style="font-size:13px;margin:5px 0;">
                        <i class="${getPlatformIcon(post.platform)} fa-fw"></i>
                        ${formatDate(post.date)} • ${post.platform}
                    </p>
                </div>
                <hr style="margin:10px 0;">
            `;
        }
    });

    newsContainer.innerHTML = newsHtml;
    displayedCount = nextCount;

    // Hide Load More button when all posts are shown
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (displayedCount >= allNewsPosts.length && loadMoreContainer) {
        loadMoreContainer.style.display = 'none';
    }
}

function loadMoreNews() {
    renderNews();
}

// Detect if current page is /news or /news/index.html
function isNewsPage() {
    return window.location.pathname.includes('/news');
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
    const brands = {
        'linkedin': 'linkedin',
        'twitter': 'twitter',
        'x': 'x-twitter',
        'facebook': 'facebook',
        'youtube': 'youtube',
        'github': 'github',
        'wordpress': 'wordpress'
    };

    const solids = {
        'blog': 'pencil-alt',
        'website': 'globe',
        'default': 'link'
    };

    if (brands[platform?.toLowerCase()]) {
        return `fa-brands fa-${brands[platform.toLowerCase()]}`;
    } else if (solids[platform?.toLowerCase()]) {
        return `fa-solid fa-${solids[platform.toLowerCase()]}`;
    } else {
        return `fa-solid fa-${solids.default}`;
    }
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