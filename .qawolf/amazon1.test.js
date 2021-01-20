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

test("amazon1", async () => {
  const page = await context.newPage();
  await page.goto("https://www.amazon.com/", { waitUntil: "domcontentloaded" });
  await page.click(setTimeout(waitForIt,expected. ts(120)));
  await page.click(".a-button-input");
  await page.click(`text="Today's Deals"`);
});