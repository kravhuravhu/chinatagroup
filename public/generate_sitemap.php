<?php
// List of site URLs
$urls = [
    '/' => '1.0',
    '/about' => '0.8',
    '/engineering' => '0.8',
    '/drafting' => '0.8',
    '/gallery' => '0.6',
    '/procurement' => '0.7',
    '/technology' => '0.7',
    '/contact' => '0.6',
    '/quote' => '0.7',
];

// Site base URL
$baseUrl = 'https://www.chinatagroup.co.za';

// Get today's date
$today = date('Y-m-d');

// Create new XML document
$xml = new DOMDocument('1.0', 'UTF-8');
$xml->formatOutput = true;

// Create <urlset> with extended namespaces
$urlset = $xml->createElement('urlset');
$urlset->setAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
$urlset->setAttribute('xmlns:xhtml', 'http://www.w3.org/1999/xhtml');
$urlset->setAttribute('xmlns:image', 'http://www.google.com/schemas/sitemap-image/1.1');
$urlset->setAttribute('xmlns:video', 'http://www.google.com/schemas/sitemap-video/1.1');
$urlset->setAttribute('xmlns:news', 'http://www.google.com/schemas/sitemap-news/0.9');

// Build URL entries
foreach ($urls as $path => $priority) {
    $url = $xml->createElement('url');

    $loc = $xml->createElement('loc', htmlspecialchars($baseUrl . $path));
    $lastmod = $xml->createElement('lastmod', $today);
    $changefreq = $xml->createElement('changefreq', 'daily');
    $prio = $xml->createElement('priority', $priority);

    $url->appendChild($loc);
    $url->appendChild($lastmod);
    $url->appendChild($changefreq);
    $url->appendChild($prio);

    $urlset->appendChild($url);
}

// Append <urlset> to XML and save
$xml->appendChild($urlset);
file_put_contents('sitemap.xml', $xml->saveXML());

echo "✅ Sitemap generated successfully.";
