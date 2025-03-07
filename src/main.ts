import "./App.css";
import { bangs } from "./bang";

function Home() {
	const app = document.querySelector<HTMLDivElement>("#app")!;
	app.innerHTML = `
    <div class="container">
      <div class="content-container">
        <a href="https://bang.anujsubedi.com.np" class="logo-link">
					<img src="/logo.svg" alt="Branding" class="logo" />
				</a>
        <p class="hero">
					DuckDuckGo's bang redirects are slow. Replace <a href="https://duckduckgo.com/bang.html" target="_blank">DuckDuckGo's</a> bangs with my bang handler.
				</p>
        <div class="url-container"> 
          <input 
            type="text" 
            class="url-input"
            value="https://bang.anujsubedi.com.np?q=%s"
            readonly 
          />
          <button class="copy-button">
            <img src="/clipboard.svg" alt="Copy" />
          </button>
        </div>
      </div>
      <footer class="colophon">
        <p class="colophon-text">
          With 🤎 by <a href="https://anujsubedi.com.np" target="_blank">Anuj Subedi</a>
        </p>
      </footer>
    </div>
  `;

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

const LS_DEFAULT_BANG = localStorage.getItem("default-bang") ?? "g";
const defaultBang = bangs.find((b) => b.t === LS_DEFAULT_BANG);

function getBangRedirectURL() {
	const url = new URL(window.location.href);
	const query = url.searchParams.get("q")?.trim() ?? "";
	if (!query) {
		Home();
		return null;
	}

	const match = query.match(/!(\S+)/i);

	const bangCandidate = match?.[1]?.toLowerCase();
	const selectedBang =
		bangs.find((b) => b.t === bangCandidate) ?? defaultBang;

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

function handleRedirect() {
	const searchUrl = getBangRedirectURL();
	if (!searchUrl) return;
	window.location.replace(searchUrl);
}

handleRedirect();
