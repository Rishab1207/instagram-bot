const puppeteer = require("puppeteer");

(async () => {
	try {
		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();
		await page.goto("https://www.youtube.com/", {
			waitUntil: "networkidle2",
			timeout: 0,
		});

		await page.type("input#search", "i got summer on my mind", { delay: 300 });

		await Promise.all([
			page.waitForNavigation({ waitUntil: "networkidle2" }),
			page.click("button#search-icon-legacy", {
				delay: 100,
			}),
		]);
		await page.click("a#video-title");
	} catch (error) {
		console.log("Error", error);
	}
})();
