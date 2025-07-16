// QuickRef Hugo Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
    setupSearch();
    setupSmoothScrolling();
});

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    
    // Handle Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const categories = document.querySelectorAll('.category-section');
    
    if (!searchTerm) {
        // Show all categories
        categories.forEach(category => {
            category.style.display = 'block';
            const cards = category.querySelectorAll('.quickref-card');
            cards.forEach(card => card.style.display = 'block');
        });
        return;
    }
    
    let hasResults = false;
    
    categories.forEach(category => {
        const cards = category.querySelectorAll('.quickref-card');
        let categoryHasResults = false;
        
        cards.forEach(card => {
            const title = card.querySelector('h5').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.quickref-tag')).map(tag => tag.textContent.toLowerCase());
            
            const matches = title.includes(searchTerm) || 
                          description.includes(searchTerm) || 
                          tags.some(tag => tag.includes(searchTerm));
            
            if (matches) {
                card.style.display = 'block';
                categoryHasResults = true;
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        category.style.display = categoryHasResults ? 'block' : 'none';
    });
    
    // Show no results message if needed
    if (!hasResults) {
        showNoResults(searchTerm);
    } else {
        hideNoResults();
    }
}

function showNoResults(searchTerm) {
    hideNoResults();
    
    const container = document.getElementById('categories-container');
    const noResultsDiv = document.createElement('div');
    noResultsDiv.id = 'no-results';
    noResultsDiv.className = 'text-center py-5';
    noResultsDiv.innerHTML = `
        <div class="alert alert-warning">
            <h4><i class="fas fa-search"></i> No results found</h4>
            <p>No quickref sheets found for "${escapeHtml(searchTerm)}". Try a different search term.</p>
            <button class="btn btn-primary" onclick="clearSearch()">
                <i class="fas fa-times"></i> Clear Search
            </button>
        </div>
    `;
    
    container.appendChild(noResultsDiv);
}

function hideNoResults() {
    const noResults = document.getElementById('no-results');
    if (noResults) {
        noResults.remove();
    }
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    handleSearch();
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Copy code functionality
document.addEventListener('click', function(e) {
    if (e.target.matches('.copy-code-btn')) {
        const code = e.target.nextElementSibling.textContent;
        navigator.clipboard.writeText(code).then(() => {
            e.target.textContent = 'Copied!';
            setTimeout(() => {
                e.target.textContent = 'Copy';
            }, 2000);
        });
    }
});

// Add copy buttons to code blocks
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        const button = document.createElement('button');
        button.textContent = 'Copy';
        button.className = 'copy-code-btn btn btn-sm btn-outline-secondary position-absolute top-0 end-0 m-2';
        pre.style.position = 'relative';
        pre.appendChild(button);
    });
});