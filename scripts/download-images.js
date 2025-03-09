const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
    portfolio: {
        'audio-dprd.jpg': 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04',
        'video-control.jpg': 'https://gandrung.co.id/wp-content/uploads/2024/01/Picture2.jpg',
        'lighting-convention.jpg': 'https://gandrung.co.id/wp-content/uploads/2024/01/Picture3.jpg',
        'conference-smart.jpg': 'https://gandrung.co.id/wp-content/uploads/2024/01/Picture4.jpg',
    },
    clients: {
        'client-1.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/1-1.png',
        'client-2.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/2-1.png',
        'client-3.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/3-1.png',
        'client-4.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/4-1.png',
        'client-5.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/5-1.png',
        'client-6.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/6-1.png',
        'client-7.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/7-1.png',
        'client-8.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/8-1.png',
        'client-9.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/9-1.png',
        'client-10.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/10.png',
        'client-11.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/11.png',
        'client-12.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/12.png',
        'client-13.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/13.png',
        'client-14.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/14.png',
        'client-15.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/15.png',
        'client-16.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/16.png',
        'client-17.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/17.png',
        'client-18.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/18.png',
        'client-19.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/19.png',
        'client-20.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/20.png',
        'client-21.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/21.png',
        'client-22.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/22.png',
        'client-23.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/23.png',
        'client-24.png': 'https://gandrung.co.id/wp-content/uploads/2024/01/24.png'
    },
    other: {
        'hero-bg.jpg': 'https://gandrung.co.id/wp-content/uploads/2024/01/Picture9.jpg',
        'logo.png': 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9',
    }
};

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download: ${response.statusCode}`));
                return;
            }

            const fileStream = fs.createWriteStream(filepath);
            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded: ${filepath}`);
                resolve();
            });

            fileStream.on('error', (err) => {
                fs.unlink(filepath, () => reject(err));
            });
        }).on('error', reject);
    });
}

async function downloadAll() {
    const publicDir = path.join(__dirname, '../public');

    // Create directories if they don't exist
    for (const dir of ['portfolio', 'clients']) {
        const dirPath = path.join(publicDir, dir);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
    }

    // Download all images
    for (const [category, categoryImages] of Object.entries(images)) {
        for (const [filename, url] of Object.entries(categoryImages)) {
            const filepath = path.join(
                publicDir,
                category === 'other' ? filename : `${category}/${filename}`
            );
            try {
                await downloadImage(url, filepath);
            } catch (error) {
                console.error(`Error downloading ${filename}:`, error);
            }
        }
    }
}

downloadAll().catch(console.error); 