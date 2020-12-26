const puppeteer = require("puppeteer");
const data = require("./config.json");

const instagram = async () => {
	try {
		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();
		// Go To Instagram
		await page.goto("https://instagram.com", {
			waitUntil: "networkidle0",
			timeout: 0,
		});
		// Login To Instagram
		await page.type(`${data.username}`, data.username_value, {
			delay: 150,
		});
		await page.type(`${data.password}`, data.password_value, {
			delay: 100,
		});
		await Promise.all([
			page.waitForNavigation({ waitUntil: "networkidle0" }),
			page.click(`${data.login}`, {
				delay: 100,
			}),
		]);

		page.type(`${data.search}`, "bballfinesse", {
			delay: 100,
		}),
			await page.waitForSelector("div.drKGC .fuqBx a", {
				visible: true,
			});

		await Promise.all([
			page.waitForNavigation({ delay: 100 }),
			page.click(".drKGC .fuqBx a"),
		]);

		// After coming to the main page
		let i = 0;
		let arr = [];
		await page.waitForSelector("._9AhH0", { visible: true });
		await Promise.all([
			page.waitForNavigation({ waitUntil: "networkidle0" }),
			page.click("._9AhH0"),
		]);
		do {
			await page.waitForSelector(".fr66n button", { visible: true });
			const url = await page.url();
			arr.push(url);
			// await page.click(".fr66n button", { delay: 100 });
			await Promise.all([
				page.waitForNavigation({ waitUntil: "networkidle2" }),
				page.click("._65Bje.coreSpriteRightPaginationArrow"),
			]);
			i++;
		} while (i < 5);
		console.log(arr);
		await browser.close();
	} catch (error) {
		console.log(error);
	}
};

instagram();
