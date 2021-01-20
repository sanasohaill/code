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

test("tuk4", async () => {
  const page = await context.newPage();
  await page.goto("https://tailwinduikit.com/", { waitUntil: "domcontentloaded" });
  await page.click("a.cursor-pointer.flex.items-center.font-bold.h-full.mr-10.text-gray-800.tracking-normal.uppercase");
  await page.click(".capitalize");
  await page.press("body", "ArrowDown", { waitUntil: "domcontentloaded" });
  await page.press("body", "ArrowDown", { waitUntil: "domcontentloaded" });
  await page.press("body", "ArrowDown", { waitUntil: "domcontentloaded" });
  await page.press("body", "ArrowDown", { waitUntil: "domcontentloaded" });
  await page.press("body", "ArrowDown", { waitUntil: "domcontentloaded" });
  await page.press("body", "ArrowDown", { waitUntil: "domcontentloaded" });
  await page.press("body", "ArrowDown", { waitUntil: "domcontentloaded" });
  await page.press("body", "ArrowDown", { waitUntil: "domcontentloaded" });
  await page.press("body", "ArrowDown", { waitUntil: "domcontentloaded" });
  await page.click("h4.font-semibold.text-base.pt-1.capitalize");
  await page.click(".flex div .container", { waitUntil: "domcontentloaded" });
  await page.press("body", "ArrowDown", { waitUntil: "domcontentloaded" });
  await page.press("body", "ArrowDown", { waitUntil: "domcontentloaded" });
  await page.press("body", "ArrowDown", { waitUntil: "domcontentloaded" });
  await page.press("body", "ArrowDown", { waitUntil: "domcontentloaded" });
 
});