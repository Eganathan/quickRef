const fs = require('fs');
const path = require('path');

/**
 * Generate structure.json by scanning the pages directory
 * This script automatically discovers categories (folders) and pages (HTML files)
 */

function scanDirectory(dir) {
    const categories = [];
    
    if (!fs.existsSync(dir)) {
        return categories;
    }
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
            // This is a category folder
            const category = {
                id: item,
                name: item.charAt(0).toUpperCase() + item.slice(1).replace(/[-_]/g, ' '),
                description: generateCategoryDescription(item),
                items: []
            };
            
            // Scan for HTML files in this category
            const files = fs.readdirSync(itemPath);
            const htmlFiles = files.filter(file => file.endsWith('.html'));
            
            for (const htmlFile of htmlFiles) {
                const filePath = path.join(itemPath, htmlFile);
                const name = path.basename(htmlFile, '.html');
                
                // Extract title and description from HTML file
                const fileContent = fs.readFileSync(filePath, 'utf8');
                const title = extractTitle(fileContent, name);
                const description = extractDescription(fileContent, name);
                const tags = extractTags(fileContent, item);
                
                category.items.push({
                    id: name,
                    name: title,
                    description: description,
                    tags: tags,
                    file: `${item}/${htmlFile}`
                });
            }
            
            // Only add category if it has items
            if (category.items.length > 0) {
                categories.push(category);
            }
        }
    }
    
    // Also check root pages directory for files not in folders
    const rootFiles = fs.readdirSync(dir);
    const rootHtmlFiles = rootFiles.filter(file => file.endsWith('.html') && fs.statSync(path.join(dir, file)).isFile());
    
    if (rootHtmlFiles.length > 0) {
        const rootCategory = {
            id: 'general',
            name: 'General',
            description: 'General reference sheets',
            items: []
        };
        
        for (const htmlFile of rootHtmlFiles) {
            const filePath = path.join(dir, htmlFile);
            const name = path.basename(htmlFile, '.html');
            
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const title = extractTitle(fileContent, name);
            const description = extractDescription(fileContent, name);
            const tags = extractTags(fileContent, 'general');
            
            rootCategory.items.push({
                id: name,
                name: title,
                description: description,
                tags: tags,
                file: htmlFile
            });
        }
        
        if (rootCategory.items.length > 0) {
            categories.unshift(rootCategory);
        }
    }
    
    return categories;
}

function extractTitle(content, fallback) {
    // Try to extract title from HTML
    let match = content.match(/<h1[^>]*class="ref-title"[^>]*>(.*?)<\/h1>/i);
    if (match) {
        return match[1].replace(/<[^>]*>/g, '').trim();
    }
    
    match = content.match(/<title>(.*?)<\/title>/i);
    if (match) {
        const title = match[1].replace(/<[^>]*>/g, '').trim();
        // Remove " - QuickRef" suffix if present
        return title.replace(' - QuickRef', '');
    }
    
    return fallback.charAt(0).toUpperCase() + fallback.slice(1).replace(/[-_]/g, ' ');
}

function extractDescription(content, fallback) {
    // Try to extract description from HTML
    let match = content.match(/<p[^>]*class="ref-description"[^>]*>(.*?)<\/p>/i);
    if (match) {
        return match[1].replace(/<[^>]*>/g, '').trim();
    }
    
    match = content.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i);
    if (match) {
        return match[1].trim();
    }
    
    return fallback.charAt(0).toUpperCase() + fallback.slice(1).replace(/[-_]/g, ' ') + ' reference sheet';
}

function extractTags(content, category) {
    const tags = [category];
    
    // Try to extract tags from HTML
    const match = content.match(/<div[^>]*class="ref-tags"[^>]*>(.*?)<\/div>/is);
    if (match) {
        const tagMatches = match[1].match(/<span[^>]*class="ref-tag"[^>]*>(.*?)<\/span>/gi);
        if (tagMatches) {
            const extractedTags = tagMatches.map(tag => tag.replace(/<[^>]*>/g, '').trim());
            tags.push(...extractedTags);
        }
    }
    
    return [...new Set(tags)]; // Remove duplicates
}

function generateCategoryDescription(category) {
    const descriptions = {
        'programming': 'Programming languages and frameworks',
        'tools': 'Development tools and utilities',
        'web': 'Web development technologies',
        'linux': 'Linux commands and utilities',
        'database': 'Database management systems',
        'devops': 'DevOps tools and practices',
        'editor': 'Text editors and IDEs',
        'network': 'Network tools and protocols',
        'security': 'Security tools and practices',
        'mobile': 'Mobile development frameworks',
        'cloud': 'Cloud services and platforms'
    };
    
    return descriptions[category] || category.charAt(0).toUpperCase() + category.slice(1).replace(/[-_]/g, ' ') + ' reference sheets';
}

// Main execution
const pagesDir = path.join(__dirname, 'pages');
const categories = scanDirectory(pagesDir);

const structure = {
    categories: categories,
    generated: new Date().toISOString(),
    total_items: categories.reduce((sum, cat) => sum + cat.items.length, 0)
};

// Write to structure.json
const outputFile = path.join(__dirname, 'data', 'structure.json');
fs.writeFileSync(outputFile, JSON.stringify(structure, null, 2));

console.log('Structure generated successfully!');
console.log('Total categories:', categories.length);
console.log('Total items:', structure.total_items);
console.log('Output file:', outputFile);