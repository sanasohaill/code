const qawolf = require("qawolf");

let browser;
let context;

beforeAll(async () => {
  browser = await qawolf.launch({slowMo: 500});
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("comps", async () => {
  const page = await context.newPage();
  await page.goto("https://tailwinduikit.com/components", { waitUntil: "domcontentloaded" });
  await page.click(".btn");
  await page.click("html");
  await page.click("html");
  await page.click("html");
  await page.click("html");
  await page.click("html");
  await page.click('text="Get Free Components"');
  await page.click("#email");
  await page.fill("#email", "sana.alphasquad@gmail.com");
  await page.click("div:nth-of-type(3)");
  await page.click("div:nth-of-type(3)");
  await page.click("#name");
  await page.fill("#name", "sana@4466");
  await page.click("html");
  await page.click("html");
  await page.click('[href="/"]');
  await page.click(".flex");
  await page.click("#email");
  await page.fill("#email", "sana.alphasquad@gmail.com");
  await page.click("#password");
  await page.fill("#password", "sana@4466");
  await page.press("#password", "Enter");
});