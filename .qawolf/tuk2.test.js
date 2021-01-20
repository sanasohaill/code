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

test("tuk2", async () => {
  const page = await context.newPage();
  await page.goto("https://tailwinduikit.com/", { waitUntil: "domcontentloaded" });
  await page.click(".icon-tabler-credit-card");
  await page.click("html");
  await page.click("html");
  await page.click('text="Get Free Components"');
  await page.click("html");
  await page.click("#email");
  await page.fill("#email", "sana.sohail4466@gmail.com");
  await page.click("#name", { waitUntil: "domcontentloaded" });
  await page.fill("#name", "Sana Sohail");
  await page.click("#password");
  await page.fill("#password", "sana@4466");
  await page.click(".relative .custom-bg-brand-color");
  await page.fill(".relative .custom-bg-brand-color", "sana@4466");
  await page.click("#terms");
  await page.click(".uppercase", { waitUntil: "domcontentloaded" });
});