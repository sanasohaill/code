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

test("tuk3", async () => {
  const page = await context.newPage();
  await page.goto("https://tailwinduikit.com/", { waitUntil: "domcontentloaded" });
  await page.click(".icon-tabler-credit-card");
  await page.click("html");
  await page.click("html");
  await page.click("html");
  await page.click("html");
  await page.click("html");
  await page.click("html");
  await page.click("#email");
  await page.click("#email");
  await page.fill("#email", "sana.alphasquad@gmail.com");
  await page.click(".absolute");
});