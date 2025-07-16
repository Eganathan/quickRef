<?php
/**
 * Generate structure.json by scanning the pages directory
 * This script automatically discovers categories (folders) and pages (HTML files)
 */

function scanDirectory($dir) {
    $categories = [];
    
    if (!is_dir($dir)) {
        return $categories;
    }
    
    $items = scandir($dir);
    
    foreach ($items as $item) {
        if ($item === '.' || $item === '..') continue;
        
        $itemPath = $dir . '/' . $item;
        
        if (is_dir($itemPath)) {
            // This is a category folder
            $category = [
                'id' => $item,
                'name' => ucfirst(str_replace(['_', '-'], ' ', $item)),
                'description' => generateCategoryDescription($item),
                'items' => []
            ];
            
            // Scan for HTML files in this category
            $htmlFiles = glob($itemPath . '/*.html');
            
            foreach ($htmlFiles as $htmlFile) {
                $filename = basename($htmlFile);
                $name = basename($htmlFile, '.html');
                
                // Extract title and description from HTML file
                $fileContent = file_get_contents($htmlFile);
                $title = extractTitle($fileContent, $name);
                $description = extractDescription($fileContent, $name);
                $tags = extractTags($fileContent, $item);
                
                $category['items'][] = [
                    'id' => $name,
                    'name' => $title,
                    'description' => $description,
                    'tags' => $tags,
                    'file' => $item . '/' . $filename
                ];
            }
            
            // Only add category if it has items
            if (!empty($category['items'])) {
                $categories[] = $category;
            }
        }
    }
    
    // Also check root pages directory for files not in folders
    $rootHtmlFiles = glob($dir . '/*.html');
    if (!empty($rootHtmlFiles)) {
        $rootCategory = [
            'id' => 'general',
            'name' => 'General',
            'description' => 'General reference sheets',
            'items' => []
        ];
        
        foreach ($rootHtmlFiles as $htmlFile) {
            $filename = basename($htmlFile);
            $name = basename($htmlFile, '.html');
            
            $fileContent = file_get_contents($htmlFile);
            $title = extractTitle($fileContent, $name);
            $description = extractDescription($fileContent, $name);
            $tags = extractTags($fileContent, 'general');
            
            $rootCategory['items'][] = [
                'id' => $name,
                'name' => $title,
                'description' => $description,
                'tags' => $tags,
                'file' => $filename
            ];
        }
        
        if (!empty($rootCategory['items'])) {
            array_unshift($categories, $rootCategory);
        }
    }
    
    return $categories;
}

function extractTitle($content, $fallback) {
    // Try to extract title from HTML
    if (preg_match('/<h1[^>]*class="ref-title"[^>]*>(.*?)<\/h1>/i', $content, $matches)) {
        return trim(strip_tags($matches[1]));
    }
    if (preg_match('/<title>(.*?)<\/title>/i', $content, $matches)) {
        $title = trim(strip_tags($matches[1]));
        // Remove " - QuickRef" suffix if present
        return str_replace(' - QuickRef', '', $title);
    }
    return ucfirst(str_replace(['_', '-'], ' ', $fallback));
}

function extractDescription($content, $fallback) {
    // Try to extract description from HTML
    if (preg_match('/<p[^>]*class="ref-description"[^>]*>(.*?)<\/p>/i', $content, $matches)) {
        return trim(strip_tags($matches[1]));
    }
    if (preg_match('/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i', $content, $matches)) {
        return trim($matches[1]);
    }
    return ucfirst(str_replace(['_', '-'], ' ', $fallback)) . ' reference sheet';
}

function extractTags($content, $category) {
    $tags = [$category];
    
    // Try to extract tags from HTML
    if (preg_match('/<div[^>]*class="ref-tags"[^>]*>(.*?)<\/div>/is', $content, $matches)) {
        preg_match_all('/<span[^>]*class="ref-tag"[^>]*>(.*?)<\/span>/i', $matches[1], $tagMatches);
        if (!empty($tagMatches[1])) {
            $tags = array_merge($tags, array_map('trim', $tagMatches[1]));
        }
    }
    
    return array_unique($tags);
}

function generateCategoryDescription($category) {
    $descriptions = [
        'programming' => 'Programming languages and frameworks',
        'tools' => 'Development tools and utilities',
        'web' => 'Web development technologies',
        'linux' => 'Linux commands and utilities',
        'database' => 'Database management systems',
        'devops' => 'DevOps tools and practices',
        'editor' => 'Text editors and IDEs',
        'network' => 'Network tools and protocols',
        'security' => 'Security tools and practices',
        'mobile' => 'Mobile development frameworks',
        'cloud' => 'Cloud services and platforms'
    ];
    
    return $descriptions[$category] ?? ucfirst(str_replace(['_', '-'], ' ', $category)) . ' reference sheets';
}

// Main execution
$pagesDir = __DIR__ . '/pages';
$categories = scanDirectory($pagesDir);

$structure = [
    'categories' => $categories,
    'generated' => date('Y-m-d H:i:s'),
    'total_items' => array_sum(array_map(function($cat) { return count($cat['items']); }, $categories))
];

// Write to structure.json
$outputFile = __DIR__ . '/data/structure.json';
file_put_contents($outputFile, json_encode($structure, JSON_PRETTY_PRINT));

echo "Structure generated successfully!\n";
echo "Total categories: " . count($categories) . "\n";
echo "Total items: " . $structure['total_items'] . "\n";
echo "Output file: " . $outputFile . "\n";
?>