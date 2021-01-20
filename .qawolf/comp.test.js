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

test("comp", async () => {
  const page = await context.newPage();
  await page.goto("https://tailwinduikit.com/components", { waitUntil: "domcontentloaded" });
  await page.click(".hover\:text-brand");
  await page.click("#email");
  await page.fill("#email", "sana.alphasquad@gmail.com");
  await page.click("#password");
  await page.fill("#password", "sana@4466");
  await page.click(".icon");
  await page.click(".uppercase");
  await page.click(".icon");
  await page.click("html");
  await page.click("html");
  await page.click(".icon-tabler-chevron-down");
  await page.click('text="Sign Out"');
});