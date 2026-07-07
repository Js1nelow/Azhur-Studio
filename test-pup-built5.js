import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'screenshot.png' });
  const content = await page.content();
  console.log("HTML length:", content.length);
  console.log("Has #root content:", content.includes('id="root"></div>') ? "NO" : "YES");
  await browser.close();
  process.exit(0);
})();
