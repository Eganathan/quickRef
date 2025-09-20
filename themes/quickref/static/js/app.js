// QuickRef Hugo Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    setupSearch();
    setupSmoothScrolling();
    setupCopyButtons();
    setupAdaptiveGrid();
    setupMasonryLayout();
});

// Add event listeners for responsive layout updates
window.addEventListener('resize', debounce(setupMasonryLayout, 250));

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

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
        hideNoResults();
        return;
    }
    
    let hasResults = false;
    
    categories.forEach(category => {
        const cards = category.querySelectorAll('.quickref-card');
        let categoryHasResults = false;
        
        cards.forEach(card => {
            const title = card.querySelector('.quickref-card-title').textContent.toLowerCase();
            const description = card.querySelector('.quickref-card-description').textContent.toLowerCase();
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
    
    // Update grid layout based on visible content
    updateGridOnSearch();
    
    // Re-apply masonry layout after search
    setTimeout(setupMasonryLayout, 100);
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

// Setup copy buttons for code blocks
function setupCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        const button = document.createElement('button');
        button.textContent = 'Copy';
        button.className = 'copy-code-btn';
        button.addEventListener('click', () => copyCode(button, block));
        pre.style.position = 'relative';
        pre.appendChild(button);
    });
}

function copyCode(button, codeBlock) {
    const code = codeBlock.textContent;
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.backgroundColor = 'var(--accent-success)';
        button.style.color = 'var(--text-inverse)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        button.textContent = 'Failed';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
}

// Setup adaptive grid based on content
function setupAdaptiveGrid() {
    const categoryGrid = document.querySelector('.category-grid');
    if (!categoryGrid) return;
    
    const categoryCount = categoryGrid.querySelectorAll('.category-section').length;
    categoryGrid.setAttribute('data-category-count', categoryCount);
    
    // Optimize card grid spacing based on content
    const cardGrids = document.querySelectorAll('.cards-grid');
    cardGrids.forEach(grid => {
        const cardCount = grid.querySelectorAll('.quickref-card').length;
        grid.setAttribute('data-card-count', cardCount);
        
        // Adjust grid based on card count
        if (cardCount === 1) {
            grid.style.gridTemplateColumns = '1fr';
            grid.style.maxWidth = '500px';
        } else if (cardCount === 2) {
            grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
        }
    });
}

// Update grid on search
function updateGridOnSearch() {
    const categoryGrid = document.querySelector('.category-grid');
    if (!categoryGrid) return;
    
    const visibleCategories = Array.from(categoryGrid.querySelectorAll('.category-section'))
        .filter(category => category.style.display !== 'none');
    
    categoryGrid.setAttribute('data-category-count', visibleCategories.length);
}

// Masonry Layout Implementation
function setupMasonryLayout() {
    const categoryGrid = document.querySelector('.category-grid');
    if (!categoryGrid) return;
    
    // Only apply masonry on larger screens
    if (window.innerWidth < 768) {
        categoryGrid.style.height = 'auto';
        return;
    }
    
    const categories = Array.from(categoryGrid.querySelectorAll('.category-section'))
        .filter(cat => cat.style.display !== 'none');
    
    if (categories.length === 0) return;
    
    // Reset any previous positioning
    categories.forEach(cat => {
        cat.style.position = '';
        cat.style.top = '';
        cat.style.left = '';
    });
    
    const gap = 32; // 2rem
    const containerWidth = categoryGrid.offsetWidth;
    let columnCount = 2;
    
    // Determine column count based on screen size
    if (window.innerWidth >= 1600) {
        columnCount = 4;
    } else if (window.innerWidth >= 1200) {
        columnCount = 3;
    }
    
    // Don't use more columns than we have categories
    columnCount = Math.min(columnCount, categories.length);
    
    const columnWidth = (containerWidth - (gap * (columnCount - 1))) / columnCount;
    const columnHeights = new Array(columnCount).fill(0);
    
    // Position categories in masonry layout
    categories.forEach((category, index) => {
        // Find the shortest column
        const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
        
        // Position the category
        const left = shortestColumnIndex * (columnWidth + gap);
        const top = columnHeights[shortestColumnIndex];
        
        category.style.position = 'absolute';
        category.style.left = `${left}px`;
        category.style.top = `${top}px`;
        category.style.width = `${columnWidth}px`;
        
        // Update column height
        const categoryHeight = category.offsetHeight;
        columnHeights[shortestColumnIndex] += categoryHeight + gap;
    });
    
    // Set container height
    const maxHeight = Math.max(...columnHeights) - gap;
    categoryGrid.style.height = `${maxHeight}px`;
    categoryGrid.style.position = 'relative';
}

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}