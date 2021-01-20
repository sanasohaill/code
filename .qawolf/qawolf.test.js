const qawolf = require("qawolf");
let browser;
let context;
beforeAll(async () => {
  browser = await qawolf.launch({slowMo: 3000});
  context = await browser.newContext();
  await qawolf.register(context);
});
afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});
test("Login", async () => {
  const page = await context.newPage();
  await page.goto("https://tailwinduikit.com/", { waitUntil: "domcontentloaded" });
  await page.click("a.cursor-pointer.flex.font-bold.h-full.items-center.mr-2.text-gray-800.tracking-normal.uppercase");
  await page.click("#email");
  await page.fill("#email", "basit@iintellect.co.uk");
  await page.click("#password");
  await page.fill("#password", "test123");
  await page.click(".uppercase",{ waitUntil: "domcontentloaded" });
  // await sleep(2000);
  // await qawolf.scroll(page, "html", { x: 12, y: 3});
});