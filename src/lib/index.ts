export function waitForWindow(): Promise<Window> {
	return new Promise((resolve) => {
		if (window) {
			return resolve(window);
		}
		const observer = new MutationObserver((_, observer: MutationObserver) => {
			if (window) {
				observer.disconnect();
				resolve(window);
			}
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	});
}

export function waitForElem(selector: string): Promise<Element | null> {
	return new Promise((resolve) => {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector));
		}
		const observer = new MutationObserver((_, observer: MutationObserver) => {
			if (document.querySelector(selector)) {
				observer.disconnect();
				resolve(document.querySelector(selector));
			}
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	});
}
