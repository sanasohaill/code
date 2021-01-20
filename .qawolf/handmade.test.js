const qawolf = require("qawolf");

let browser;
let context;

beforeAll(async () => {
  browser = await qawolf.launch();
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("handmade", async () => {
  const page = await context.newPage();
  await page.goto("https://www.harbourukbracelets.com/?v=d71bdd22c8bb", { waitUntil: "domcontentloaded" });
  await page.click(".animated i");
  await qawolf.scroll(page, "html", { x: 0, y: 1650 });
  await page.click(".elementor-content-item .elementor-size-sm");
  await qawolf.scroll(page, "html", { x: 0, y: 655 });
  await page.click('[aria-label*="Thin Rope Bracelet with Small Rose Gold "]');
  await qawolf.scroll(page, "html", { x: 0, y: 1059 });
  await page.selectOption("#pa_colour", "apple-green");
  await page.selectOption("#pa_size", "women-l");
  await qawolf.scroll(page, "html", { x: 0, y: 845 });
  await page.click(".alt");
});