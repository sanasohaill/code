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

test("tuk6", async () => {
  const page = await context.newPage();
  await page.goto("https://tailwinduikit.com/", { waitUntil: "domcontentloaded" });
  await page.click(".icon-tabler-credit-card");
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
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.press("body", "ArrowUp");
  await page.click('text="Kickstart your next Project"');
  const frame = await (await page.waitForSelector(".gumroad-overlay-iframe")).contentFrame();
  await frame.click(".preview");
  await frame.press("body", "ArrowDown");
  await frame.press("body", "ArrowDown");
  await frame.press("body", "ArrowDown");
  await frame.press("body", "ArrowDown");
  await frame.press("body", "ArrowDown");
  await frame.press("body", "ArrowDown");
  await frame.press("body", "ArrowDown");
  await frame.press("body", "ArrowDown");
  await frame.press("body", "ArrowDown");
  await frame.press("body", "ArrowDown");
  await frame.press("body", "ArrowDown");
  await frame.click(".i_want_this_button");
  await frame.click("div:nth-of-type(2).envelope .first");
  await frame.fill("div:nth-of-type(2).envelope .first", "sana.alphasquad@gmail.com");
  await page.waitForSelector('[aria-label="Credit or debit card number"]');
  await page.fill('[aria-label="Credit or debit card number"]', "1936 7901 5453 3031");
  await frame.click("#buy-form-main");
  await frame.click("div:nth-of-type(2).flipper .expiry-date-p");
  await frame.click("div:nth-of-type(2).flipper .expiry-date-p");
  await page.click('[aria-label="Credit or debit card expiration date"]');
  await page.fill('[aria-label="Credit or debit card expiration date"]', "11 / 22");
  await frame.fill('[name="full_name"]', "Sana Sohail");
  await page.click('[aria-label^="Credit or debit card "]');
  await page.fill('[aria-label^="Credit or debit card "]', "123");
  await frame.click("div:nth-of-type(5) .button");
  await page.click("html");
  await frame.click("xpath=//*[@id='overlay-page']/div[5]/div[1]");
  await page.click("html");
});