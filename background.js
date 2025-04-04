/**
 * Chrome Extension Background Script
 * 
 * This background script handles the core functionality of the Tenno Tracker Chrome extension.
 * It manages cookie access and authentication state with warframe.com.
 * 
 * Features:
 * - Listens for extension icon clicks
 * - Checks for Warframe authentication cookies
 * - Manages user session state
 * 
 * Security:
 * - Only accesses specific cookies from warframe.com domain
 * - Handles cookie permissions securely
 * 
 * The script acts as a bridge between the Warframe website and
 * the Tenno Tracker (tennotracker.com) for authentication purposes.
 */

chrome.action.onClicked.addListener((tab) => {
  console.log('Extension clicked');
  checkCookie();
});

function checkCookie() {
  chrome.cookies.get(
    { url: "https://warframe.com", name: "gid" },
    (cookie) => {
      if (cookie) {
        console.log("GID Cookie found:", cookie.value);
        // Show the GID in the popup
      } else {
        console.log("No GID cookie found or not logged in to warframe.com");
      }
    }
  );
}
