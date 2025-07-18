<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use Carbon\Carbon;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate the sitemap.';

    public function handle()
    {
        $sitemap = Sitemap::create();

        // Add regular pages without images
        $this->addMainPages($sitemap);
        
        // Add all images under the gallery URL
        $this->addGalleryImages($sitemap);

        $sitemap->writeToFile(public_path('sitemap.xml'));
        $this->info('Sitemap with images generated!');
    }

    protected function addMainPages(Sitemap $sitemap)
    {
        $pages = [
            '/' => [
                'change_freq' => Url::CHANGE_FREQUENCY_DAILY,
                'priority' => 1.0
            ],
            '/about' => [
                'change_freq' => Url::CHANGE_FREQUENCY_MONTHLY,
                'priority' => 0.8
            ],
            '/engineering' => [
                'change_freq' => Url::CHANGE_FREQUENCY_WEEKLY,
                'priority' => 0.8
            ],
            '/drafting' => [
                'change_freq' => Url::CHANGE_FREQUENCY_WEEKLY,
                'priority' => 0.8
            ],
            '/gallery' => [
                'change_freq' => Url::CHANGE_FREQUENCY_WEEKLY,
                'priority' => 0.7
            ],
            '/procurement' => [
                'change_freq' => Url::CHANGE_FREQUENCY_WEEKLY,
                'priority' => 0.8
            ],
            '/technology' => [
                'change_freq' => Url::CHANGE_FREQUENCY_WEEKLY,
                'priority' => 0.8
            ],
            '/contact' => [
                'change_freq' => Url::CHANGE_FREQUENCY_MONTHLY,
                'priority' => 0.7
            ],
            '/quote' => [
                'change_freq' => Url::CHANGE_FREQUENCY_MONTHLY,
                'priority' => 0.6
            ],
        ];

        foreach ($pages as $url => $data) {
            $sitemap->add(
                Url::create($url)
                    ->setLastModificationDate(Carbon::now())
                    ->setChangeFrequency($data['change_freq'])
                    ->setPriority($data['priority'])
            );
        }
    }

    protected function addGalleryImages(Sitemap $sitemap)
    {
        $galleryUrl = Url::create('/gallery')
            ->setLastModificationDate(Carbon::now())
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
            ->setPriority(0.7);

        foreach ($this->getAllGalleryImages() as $imagePath) {
            $cleanPath = ltrim($imagePath, './'); // Remove leading ./ or ../
            $absolutePath = public_path($cleanPath);
            
            if (file_exists($absolutePath)) {
                $galleryUrl->addImage(
                    $cleanPath,
                    $this->generateImageCaption($cleanPath),
                    '', // geo_location
                    $this->generateImageTitle($cleanPath)
                );
            }
        }

        $sitemap->add($galleryUrl);
    }

    protected function getAllGalleryImages()
    {
        return [
            '../IMAGES/Pictures/Homepage/Engineering/img1.jpeg',
            '../IMAGES/Pictures/Homepage/Engineering/img2.jpeg',
            '../IMAGES/Pictures/Homepage/Engineering/img3.jpeg',
            '../IMAGES/Pictures/Homepage/Engineering/img4.jpeg',
            '../IMAGES/Pictures/Homepage/Engineering/img5.jpeg',
            '../IMAGES/Pictures/Homepage/Engineering/img6.jpeg',
            '../IMAGES/Pictures/Homepage/Engineering/img7.jpeg',
            '../IMAGES/Pictures/Homepage/Engineering/img8.jpeg',
            '../IMAGES/Pictures/Homepage/Engineering/img9.jpeg',
            '../IMAGES/Pictures/Homepage/Engineering/img10.jpeg',
            '../IMAGES/Pictures/Homepage/Engineering/img11.jpeg',
            '../IMAGES/Pictures/Homepage/Engineering/img12.jpeg',
            '../IMAGES/Pictures/Homepage/Engineering/img13.jpeg',
            '../IMAGES/Pictures/Homepage/Engineering/img14.jpeg',
            '../IMAGES/Pictures/Homepage/Drafting/process.jpg',
            '../IMAGES/Pictures/Homepage/Engineering/image1.jpg',
            '../IMAGES/Pictures/Homepage/Engineering/image2.jpg',
            '../IMAGES/Pictures/Homepage/Engineering/Image3.jpg',
            '../IMAGES/Pictures/Services/Procurement/miningsupplies.jpg',
            '../IMAGES/Pictures/Homepage/PointCloud/Pointcloudimage.jpg',
            '../IMAGES/Pictures/Services/drafting/1.jpg',
            '../IMAGES/Pictures/Services/drafting/2.jpg',
            '../IMAGES/Pictures/Services/drafting/3.jpg',
            '../IMAGES/Pictures/Services/drafting/4.jpg',
            '../IMAGES/Pictures/Services/drafting/5.jpg',
            '../IMAGES/Pictures/Services/drafting/6.jpg',
            '../IMAGES/Pictures/Services/drafting/7.jpg',
            '../IMAGES/Pictures/Services/drafting/8.jpg',
            '../IMAGES/Pictures/Services/drafting/9.jpg',
            '../IMAGES/Pictures/Services/drafting/10.jpg',
            '../IMAGES/Pictures/Services/drafting/11.jpg',
            '../IMAGES/Pictures/Services/drafting/12.jpg',
            '../IMAGES/Pictures/Services/drafting/13.jpg',
            '../IMAGES/Pictures/Services/drafting/14.png',
            '../IMAGES/Pictures/Services/drafting/15.jpg',
        ];
    }

    protected function generateImageTitle($path)
    {
        $filename = pathinfo($path, PATHINFO_FILENAME);
        return ucwords(str_replace(['-', '_'], ' ', $filename));
    }

    protected function generateImageCaption($path)
    {
        $parts = explode('/', $path);
        $category = $parts[count($parts) - 2] ?? 'image';
        $filename = pathinfo($path, PATHINFO_FILENAME);
        
        return "Photo: " . str_replace(['-', '_'], ' ', $category) . " - " . 
               str_replace(['-', '_'], ' ', $filename);
    }
}