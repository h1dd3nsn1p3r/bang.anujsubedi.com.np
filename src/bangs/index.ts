import { customBangs } from "./custom";
import { duckDuckGoBangs } from "./duckduckgo";

/**
 * Merge the custom and DuckDuckGo bangs.
 *
 * @since 1.0.0
 */
export const bangs = [...duckDuckGoBangs, ...customBangs];
