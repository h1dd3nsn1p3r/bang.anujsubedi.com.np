import "./App.css";
import { bangs } from "./bangs/index";
import { engines } from "./utils/engines";
import { home as homeContent } from "./templates/home";

const defaultBangSearchEngine = localStorage.getItem("default-engine") ?? "g";

const defaultBang = bangs.find((b) => b.t === defaultBangSearchEngine);

/**
 * Renders HTML template.
 *
 * @since 1.0.0
 */
function renderTemplate() {
	const app = document.querySelector<HTMLDivElement>("#app")!;

	app.innerHTML = homeContent;

	const copyButton = app.querySelector<HTMLButtonElement>(".copy-button")!;

	const copyIcon = copyButton.querySelector("img")!;

	const urlInput = app.querySelector<HTMLInputElement>(".url-input")!;

	copyButton.addEventListener("click", async () => {
		await navigator.clipboard.writeText(urlInput.value);

		copyIcon.src = "/clipboard-check.svg";

		setTimeout(() => {
			copyIcon.src = "/clipboard.svg";
		}, 2000);
	});
}

/**
 * Gets the redirect URL.
 *
 * @since 1.0.0
 */
function getBangRedirectURL() {
	const url = new URL(window.location.href);

	const query = url.searchParams.get("q")?.trim() ?? "";

	if (!query) {
		renderTemplate();
		return null;
	}

	const match = query.match(/!(\S+)/i);

	const bangCandidate = match?.[1]?.toLowerCase();

	const selectedBang = bangs.find((b) => b.t === bangCandidate) ?? defaultBang;

	// Remove the first bang from the query
	const cleanQuery = query.replace(/!\S+\s*/i, "").trim();

	// Format of the url is:
	// https://www.google.com/search?q={{{s}}}
	const searchUrl = selectedBang?.u.replace(
		"{{{s}}}",
		// Replace %2F with / to fix formats like "!ghr+t3dotgg/unduck"
		encodeURIComponent(cleanQuery).replace(/%2F/g, "/")
	);

	if (!searchUrl) return null;

	return searchUrl;
}

/**
 * Handles the redirect.
 *
 * @since 1.0.0
 */
function handleRedirect() {
	const searchUrl = getBangRedirectURL();

	if (!searchUrl) return;

	window.location.replace(searchUrl);
}

/**
 * Listens to search engine change events.
 *
 * @since 1.0.0
 */
function listenSearchEngineChangeEvents() {
	const options = document.querySelectorAll<HTMLInputElement>(
		".search-engine-option"
	);

	if (!options || !options.length) return;

	options.forEach((item) => {
		item.addEventListener("change", (e) => {
			const target = e.target as HTMLInputElement;

			const acceptedEngines = engines.map((e) => e.value);

			if (!acceptedEngines.includes(target.value)) return;

			localStorage.setItem("default-engine", item.value);
		});
	});
}

/**
 * Sets the search engine preference.
 *
 * @since 1.0.0
 */
function setSearchEnginePreference() {
	const defaultEngine = localStorage.getItem("default-engine") ?? "g";

	const selectedEngine = engines.find((e) => e.value === defaultEngine);

	if (!selectedEngine) return;

	const selectedOption = document.querySelector<HTMLInputElement>(
		`#search-engine-${selectedEngine.name.toLowerCase()}`
	);

	if (!selectedOption || !selectedOption) return;

	selectedOption.checked = true;
}

/**
 * Run the functions.
 *
 * @since 1.0.0
 */
handleRedirect();
setSearchEnginePreference();
listenSearchEngineChangeEvents();
