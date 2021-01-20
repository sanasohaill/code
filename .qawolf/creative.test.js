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

test("creative", async () => {
  const page = await context.newPage();
  await page.goto("https://www.creativesedge.co/", { waitUntil: "domcontentloaded" });
  await page.click(".elementor-item-active");
  // 🐺 create code here
});