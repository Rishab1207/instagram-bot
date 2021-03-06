const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto("", {
		waitUntil: "networkidle2",
		timeout: 0,
	});

	await page.type("#ReduxFormInput1", "", { delay: 200 });

	await page.click(".app-ui-components-Button-Button_button_1_MpP", {
		delay: 100,
	});
})();
