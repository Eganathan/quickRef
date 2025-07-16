// QuickRef JavaScript Application
document.addEventListener('DOMContentLoaded', function() {
    loadQuickRefs();
    setupSearch();
});

let allQuickRefs = [];

// Load quickref data by scanning directory structure
async function loadQuickRefs() {
    try {
        const response = await fetch('data/structure.json');
        const data = await response.json();
        allQuickRefs = data;
        displayCategories(data.categories);
    } catch (error) {
        console.error('Error loading quickrefs:', error);
        displayError();
    }
}

// Display categories and their items
function displayCategories(categories) {
    const container = document.getElementById('categories-container');
    container.innerHTML = '';
    
    categories.forEach(category => {
        const categorySection = createCategorySection(category);
        container.appendChild(categorySection);
    });
}

// Create category section HTML
function createCategorySection(category) {
    const section = document.createElement('div');
    section.className = 'category-section';
    section.innerHTML = `
        <h2 class="category-title">
            <i class="fas fa-folder"></i> ${category.name}
        </h2>
        <p class="text-muted mb-4">${category.description}</p>
        <div class="row">
            ${category.items.map(item => createQuickRefCard(item)).join('')}
        </div>
    `;
    return section;
}

// Create quickref card HTML
function createQuickRefCard(item) {
    return `
        <div class="col-md-6 col-lg-4 mb-3">
            <a href="pages/${item.file}" class="quickref-card">
                <h5>${item.name}</h5>
                <p>${item.description}</p>
                <div class="quickref-tags">
                    ${item.tags.map(tag => `<span class="quickref-tag">${tag}</span>`).join('')}
                </div>
            </a>
        </div>
    `;
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    
    // Handle Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

// Handle search
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!searchTerm) {
        displayCategories(allQuickRefs.categories);
        return;
    }
    
    const filteredCategories = allQuickRefs.categories.map(category => {
        const filteredItems = category.items.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        
        return {
            ...category,
            items: filteredItems
        };
    }).filter(category => category.items.length > 0);
    
    if (filteredCategories.length === 0) {
        displayNoResults(searchTerm);
    } else {
        displayCategories(filteredCategories);
    }
}

// Display no results message
function displayNoResults(searchTerm) {
    const container = document.getElementById('categories-container');
    container.innerHTML = `
        <div class="text-center py-5">
            <div class="alert alert-warning">
                <h4><i class="fas fa-search"></i> No results found</h4>
                <p>No quickref sheets found for "${searchTerm}". Try a different search term.</p>
                <button class="btn btn-primary" onclick="clearSearch()">
                    <i class="fas fa-times"></i> Clear Search
                </button>
            </div>
        </div>
    `;
}

// Clear search
function clearSearch() {
    document.getElementById('searchInput').value = '';
    displayCategories(allQuickRefs.categories);
}

// Display error message
function displayError() {
    const container = document.getElementById('categories-container');
    container.innerHTML = `
        <div class="text-center py-5">
            <div class="alert alert-danger">
                <h4><i class="fas fa-exclamation-triangle"></i> Error Loading Data</h4>
                <p>Unable to load quickref data. Please check if the data/quickrefs.json file exists and is valid.</p>
                <button class="btn btn-primary" onclick="location.reload()">
                    <i class="fas fa-refresh"></i> Retry
                </button>
            </div>
        </div>
    `;
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}