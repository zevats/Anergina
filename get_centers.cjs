const fs = require('fs');
const { chromium } = require('playwright');

async function run() {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
  });
  const page = await browser.newPage();
  const fileContent = fs.readFileSync('client/src/data/indiaMapData.ts', 'utf8');
  const jsonStart = fileContent.indexOf('[');
  const jsonEnd = fileContent.lastIndexOf(']');
  const states = JSON.parse(fileContent.slice(jsonStart, jsonEnd + 1));
  
  const svgHtml = `
    <svg viewBox="0 0 612 696" width="612" height="696">
      ${states.map(s => `<path id="${s.id}" d="${s.path}" />`).join('')}
    </svg>
  `;
  await page.setContent(svgHtml);
  
  const centers = await page.evaluate(() => {
    const paths = Array.from(document.querySelectorAll('path'));
    const res = {};
    for (const p of paths) {
      const bbox = p.getBBox();
      res[p.id] = {
        cx: Math.round((bbox.x + bbox.width / 2) * 10) / 10,
        cy: Math.round((bbox.y + bbox.height / 2) * 10) / 10,
        width: Math.round(bbox.width * 10) / 10,
        height: Math.round(bbox.height * 10) / 10,
      };
    }
    return res;
  });
  
  console.log('Calculated centers for:', Object.keys(centers).length, 'states');
  const centersCode = '\nexport const STATE_CENTERS: Record<string, { cx: number; cy: number; width: number; height: number }> = ' + JSON.stringify(centers, null, 2) + ';\n';
  fs.appendFileSync('client/src/data/indiaMapData.ts', centersCode, 'utf8');
  console.log('Appended STATE_CENTERS successfully!');
  await browser.close();
}

run().catch(console.error);
