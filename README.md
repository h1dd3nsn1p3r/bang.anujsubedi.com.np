# Bang search!

DuckDuckGo's bang redirects are slow. Add the following URL as a custom search engine to your browser. Enables all of DuckDuckGo's bangs to work, but much faster.

```
https://bang.anujsubedi.com.np/?q=%s
```

## How is it that much faster?

DuckDuckGo does their redirects server side. Their DNS is...not always great. Result is that it often takes ages.

I solved this by doing all of the work client side. Once you've went to https://bang.anujsubedi.com.np/ once, the JS is all cache'd and will never need to be downloaded again. Your device does the redirects, not me.

## How to use it?

Add the following URL as a custom search engine to your browser.

```
https://bang.anujsubedi.com.np/?q=%s
```

Here's how to do it in some popular browsers:

### Chrome

1. Go to Google Chrome and enter this in URL bar `chrome://settings/search`
2. Click on `Manage search engines and site search`
3. Scroll down to `Site search`
4. Click on add.

```
Name: Bang Search
Keyword: !
URL: https://bang.anujsubedi.com.np/?q=%s
```
5. Click on `Add`
6. Click on three dots on the right side of the search engine you just added and click on `make default`.
7. Done.

Close the settings tab and try searching for `!yt adele set fire to the rain`. It should redirect you to the YouTube search results for "adele set fire to the rain". All [DuckDuckGo bangs](https://duckduckgo
.com/bangs) should work.

### Firefox

1. Go to Firefox and click settings.
2. Click on `Search`
3. Scroll down to `Search Shortcuts`
4. Click on `Add search engine`

```
Name: Bang Search
Keyword: !
URL: https://bang.anujsubedi.com.np/?q=%s
````

5. Click on `Add`
6. Scroll up and select `Bang Search` as the default search engine.
7. Done.

Close the settings tab and try searching for `!yt adele set fire to the rain`. 

### Change default search engine

The default search engine is Google. If you want to change it to DuckDuckGo, Yahoo or Bing, follow the steps below:

1. Navigate to [https://bang.anujsubedi.com.np/](bang search) homepage.
2. Hit `CRTL + SHIFT + I` to open developer tools.
3. Go to `Application` tab.
4. Go to `Storage` > `Local Storage`.
5. Create a new key `default-engine` and set following values.

```
Google: `g`
DuckDuckGo: `ddg`
Yahoo: `y`
Bing: `b`
```
