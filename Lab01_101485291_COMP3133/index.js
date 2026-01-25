const fs = require('fs');
const csv = require('csv-parser');

const INPUT_FILE = 'input_countries.csv';
const CANADA_FILE = 'canada.txt';
const USA_FILE = 'usa.txt';

// Delete files if they exist 
[CANADA_FILE, USA_FILE].forEach(file => {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
    }
});

// Write headers
fs.writeFileSync(CANADA_FILE, 'country,year,population\n');
fs.writeFileSync(USA_FILE, 'country,year,population\n');

// Filtering and writing
fs.createReadStream(INPUT_FILE)
    .pipe(csv())
    .on('data', (row) => {
        const country = row.country.toLowerCase();
        const line = `${row.country},${row.year},${row.population}\n`;

        if (country === 'canada') {
            fs.appendFileSync(CANADA_FILE, line);
        }

        if (country === 'united states' || country === 'usa') {
            fs.appendFileSync(USA_FILE, line);
        }
    })
    .on('end', () => {
        console.log('CSV processing complete');
    });
