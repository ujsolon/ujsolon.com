// Complete script.js file - cleaned up and fixed

let newsData = [];
let displayedCount = 0;
const NEWS_BATCH_SIZE = 3;

async function loadNews() {
  try {
    const newsContainer = document.getElementById("newsContainer");
    const loadMoreContainer = document.getElementById("loadMoreContainer");

    const response = await fetch(isNewsPage() ? "/news/news.json" : "/news.json");
    newsData = await response.json();

    // Clear any loading text
    newsContainer.innerHTML = "";

    // Render first batch
    renderNews();

    // Show load more button if we're on /news and there’s more to show
    if (isNewsPage() && newsData.length > NEWS_BATCH_SIZE) {
      loadMoreContainer.style.display = "block";

      const loadMoreButton = document.getElementById("loadMoreButton");
      loadMoreButton.addEventListener("click", loadMoreNews);
    }
  } catch (error) {
    console.error("Error loading news:", error);
    document.getElementById("newsContainer").innerHTML =
      "<p>Failed to load news.</p>";
  }
}

function renderNews() {
  const newsContainer = document.getElementById("newsContainer");

  const nextBatch = newsData.slice(displayedCount, displayedCount + NEWS_BATCH_SIZE);
  nextBatch.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("news-item", "w3-margin-bottom");
    div.innerHTML = `
      <h4>${post.title}</h4>
      <p class="w3-small w3-text-grey">${post.date}</p>
      <p>${post.description}</p>
      ${post.link ? `<a href="${post.link}" target="_blank" class="w3-text-theme">Read more</a>` : ""}
      <hr>
    `;
    newsContainer.appendChild(div);
  });

  displayedCount += nextBatch.length;

  // Hide button if we’ve shown everything
  if (displayedCount >= newsData.length) {
    document.getElementById("loadMoreContainer").style.display = "none";
  }
}

function loadMoreNews() {
  renderNews();
}

function isNewsPage() {
  return window.location.pathname.includes("/news");
}

document.addEventListener("DOMContentLoaded", loadNews);



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