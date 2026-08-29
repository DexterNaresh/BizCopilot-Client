const https = require('https');
const fs = require('fs');
const path = require('path');

const products = {
    'Carrot': 'Carrot',
    'Potato': 'Potato',
    'Onion': 'Onion',
    'Apple': 'Apple',
    'Banana': 'Banana',
    'Mango': 'Mango',
    'Basmati Rice': 'Rice',
    'Sugar': 'Sugar',
    'Salt 1kg': 'Salt',
    'Cooking Oil': 'Cooking_oil',
    'Pure Ghee': 'Ghee',
    'Amul Milk 1L': 'Milk',
    'Fresh Paneer': 'Paneer',
    'Curd 500g': 'Curd',
    'Tata Tea Premium 250g': 'Tea',
    'Coca Cola 500ml': 'Coca-Cola',
    'Lux Soap 125g': 'Soap',
    'Shampoo 500ml': 'Shampoo',
    'Electrical Wire': 'Wire',
    'Screwdriver Set': 'Screwdriver',
    'Parle-G Biscuit 150g': 'Biscuit',
    'Lays Classic Salted': 'Potato_chip',
    'Brown Bread': 'Bread',
    'USB-C Cable': 'USB-C',
    'Ruled Notebook': 'Notebook'
};

async function getWikiImage(title) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=200`;
    return new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'BizCopilotTestBot/1.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    const pages = json.query.pages;
                    const pageId = Object.keys(pages)[0];
                    if (pages[pageId].thumbnail) {
                        resolve(pages[pageId].thumbnail.source);
                    } else {
                        resolve(null);
                    }
                } catch(e) {
                    resolve(null);
                }
            });
        }).on('error', () => resolve(null));
    });
}

async function run() {
    const map = {};
    for (const [productName, wikiTitle] of Object.entries(products)) {
        const url = await getWikiImage(wikiTitle);
        if (url) {
            map[productName] = url;
        }
    }
    console.log(JSON.stringify(map, null, 2));
}

run();
