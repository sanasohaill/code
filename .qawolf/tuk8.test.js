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

test("tuk8", async () => {
  const page = await context.newPage();
  await page.goto("https://tailwinduikit.com/", { waitUntil: "domcontentloaded" });
  await page.click("a.cursor-pointer.flex.items-center.font-bold.h-full.mr-10.text-gray-800.tracking-normal.uppercase");
  await page.click(".sm\:flex-row");
  await page.click(".btn");
  await page.click(".container .flex-col");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowDown");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.click(".thumb_range");
  await page.fill(".thumb_range", "120");
  await page.click(".justify-start div");
  await page.fill(".thumb_range", "190");
  await page.click(".thumb_range#myRange");
  await page.fill(".thumb_range#myRange", "144");
});