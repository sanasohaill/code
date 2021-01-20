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

test("tuk", async () => {
  const page = await context.newPage();
  await page.goto("https://tailwinduikit.com/", { waitUntil: "domcontentloaded" });
  await page.click("a.cursor-pointer.flex.font-bold.h-full.items-center.mr-2.text-gray-800.tracking-normal.uppercase");
  await page.click("#email");
  await page.fill("#email", "sana.alphasquad@gmail.com");
  await page.click("#password");
  await page.fill("#password", "sana@4466");
  await page.click(".uppercase",{ waitUntil: "domcontentloaded" });
});