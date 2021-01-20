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

test("handmade1", async () => {
  const page = await context.newPage();
  await page.goto("https://www.harbourukbracelets.com/?v=d71bdd22c8bb", { waitUntil: "domcontentloaded" });
  await page.click(".animated i");
  await page.click(".elementor-nav-menu");
  await page.click('text="MEN"',{ waitUntil: "domcontentloaded" });
  await qawolf.scroll(page, "html", { x: 0, y: 3937 });
  await page.click('[href="https://www.harbourukbracelets.com/product/hamsa-bracelet/?v=d71bdd22c8bb"][aria-label*=" Rope "]',{ waitUntil: "domcontentloaded" });
  await qawolf.scroll(page, "html", { x: 0, y: 954 });
  await page.selectOption("#pa_size", "men-l");
  await page.selectOption("#pa_colour", "aqua-green");
  await page.click(".alt");
  await page.click(".button",{ waitUntil: "domcontentloaded" });
  await qawolf.scroll(page, "html", { x: 0, y: 6 },{ waitUntil: "domcontentloaded" });
});