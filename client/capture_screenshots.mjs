import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const SCREENSHOTS_DIR = 'C:/Users/Rishabh/.gemini/antigravity/brain/24568188-ed34-4707-b401-c7c74804adc1/screenshots';

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '1920', width: 1920, height: 1080 },
  { name: '768', width: 768, height: 1024 },
  { name: '390', width: 390, height: 844 },
];

const ROUTES = [
  { path: '/', name: 'home' },
  { path: '/platform', name: 'platform' },
  { path: '/solutions', name: 'solutions' },
  { path: '/network', name: 'network' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
  { path: '/login', name: 'login' },
  { path: '/test-404', name: '404' },
];

async function capture() {
  console.log('Launching Chrome for visual inspection...');
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
  });

  for (const vp of VIEWPORTS) {
    console.log(`\n--- Capturing viewport: ${vp.name} (${vp.width}x${vp.height}) ---`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    for (const route of ROUTES) {
      const url = `http://localhost:5173${route.path}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
        await page.waitForTimeout(400);

        // Scroll through the page naturally to trigger all in-view animations
        if (['home', 'platform', 'solutions', 'network', 'about', 'contact'].includes(route.name)) {
          await page.evaluate(async () => {
            await new Promise((resolve) => {
              const step = window.innerHeight * 0.7;
              const timer = setInterval(() => {
                window.scrollBy(0, step);
                if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
                  clearInterval(timer);
                  resolve();
                }
              }, 70);
            });
          });
          await page.evaluate(() => window.scrollTo(0, 0));
          await page.waitForTimeout(400); // Allow animations to settle
        }

        const filename = `${route.name}_${vp.name}.png`;
        const filePath = path.join(SCREENSHOTS_DIR, filename);

        // Full-page for scrolling pages, viewport for login & 404
        const fullPage = ['home', 'platform', 'solutions', 'network', 'about', 'contact'].includes(route.name);
        await page.screenshot({ path: filePath, fullPage });
        console.log(`✓ ${filename}`);
      } catch (err) {
        console.error(`✗ Failed ${url} @ ${vp.name}:`, err.message);
      }
    }
    await context.close();
  }

  await browser.close();
  console.log('\nAll Visual QA screenshots successfully captured.');
}

capture().catch((e) => {
  console.error('Capture script error:', e);
  process.exit(1);
});
