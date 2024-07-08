// Api/generatePdf.js
const puppeteer = require('puppeteer');

const generatePdf = async (htmlContent) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });
  const page = await browser.newPage();

  // Set content with CSS
  await page.setContent(`
    <style>
        
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    
}



.container1 {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 60%;
    width: 50%;
    position: relative;
    left: 230px;
    top: 30px
    

}

header {
    text-align: center;
    margin-bottom: 20px;
}

header h1 {
    margin: 0;
    font-size: 2.5em;
}

header p {
    margin: 5px 0;
}

header a {
    color: #0066cc;
    text-decoration: none;
}

header a:hover {
    text-decoration: underline;
}

section {
    margin-bottom: 20px;
}

h2 {
    border-bottom: 2px solid #000;
    padding-bottom: 5px;
    color: #000;
}

.subheading {
    margin-top: 10px;
    margin-bottom: 10px;
}

.subheading h3 {
    margin: 0;
    font-size: 1.2em;
}

.subheading p {
    margin: 5px 0;
}

ul {
    list-style-type: disc;
    padding-left: 20px;
}

ul li {
    margin-bottom: 10px;
}

strong {
    color: #000;
}

a {
    color: #0066cc;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

    </style>
    ${htmlContent}
  `);

  // Increase timeout to 60 seconds (60000 milliseconds)
  const pdfBuffer = await page.pdf({ format: 'A4', timeout: 60000 });
  await browser.close();

  return pdfBuffer;
};

module.exports = generatePdf;
