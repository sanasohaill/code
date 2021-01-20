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

test("laptop", async () => {
  const page = await context.newPage();
  await page.goto("https://www.laptab.com.pk/", { waitUntil: "domcontentloaded" });
  await page.click(".fa-user");
  await page.click("#email");
  await page.fill("#email", "sana.sohail4466@gmail.com");
  await page.click("#password");
  await page.fill("#password", "sana@4466");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click(".fa-sign-in");
  await page.click("html");
});