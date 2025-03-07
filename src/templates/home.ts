/**
 * Home template.
 *
 * @returns {string} The home template.
 * @since 1.0.0
 */
export const home = `
	<div class="container">
		<div class="content-container">
			<a href="https://bang.anujsubedi.com.np" class="logo-link">
				<img src="/logo.svg" alt="Branding" class="logo" />
			</a>
			<p class="hero">
				DuckDuckGo's bangs redirects are slow. Replace <a href="https://duckduckgo.com/bang.html" target="_blank">DuckDuckGo's</a> bangs with my ── <a href="https://anujsubedi.com.np/blog/bang-search-a-simple-yet-powerful-way-to-search-the-web" target="_blank">BangSearch Tool!</a>
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
			<div class="search-engine-container">
				<p class="search-engine-text">
					Default search via
				</p>
				<div class="search-engine-options">
					<div class="flex">
						<input type="radio" id="search-engine-google" name="search-engine-option" class="search-engine-option" checked="true" value="g">
						<label for="search-engine-google">
							<img src="/brands/google.svg" alt="Google" />
							Google
						</label>
					</div>
					<div class="flex">
						<input type="radio" id="search-engine-bing" name="search-engine-option" class="search-engine-option" value="b">
						<label for="search-engine-bing">
							<img src="/brands/bing.svg" alt="Bing" />
							Bing
						</label>
					</div>
					<div class="flex">
						<input type="radio" id="search-engine-duckduckgo" name="search-engine-option" class="search-engine-option" value="ddg">
						<label for="search-engine-duckduckgo">
							<img src="/brands/duckduckgo.svg" alt="DuckDuckGo" />
							DuckDuckGo
						</label>
					</div>
					<div class="flex">
						<input type="radio" id="search-engine-baidu" name="search-engine-option" class="search-engine-option" value="baidu">
						<label for="search-engine-baidu">
							<img src="/brands/baidu.svg" alt="Baidu" />
							Baidu
						</label>
					</div>
				</div>
			</div>
		</div>
		<footer class="colophon">
			<p class="colophon-text">
				With 🤎 by <a href="https://anujsubedi.com.np" target="_blank">Anuj Subedi</a>
			</p>
		</footer>
  </div>
`;
