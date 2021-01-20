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

test("property", async () => {
  const page = await context.newPage();
  await page.goto("https://abethcopropertymasters.com/", { waitUntil: "domcontentloaded" });
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
  await page.click('text="Tiles & Marble Installation"', { waitUntil: "domcontentloaded" });
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
});