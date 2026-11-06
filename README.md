# InstaDe-tox

InstaDe-tox is an open source Instagram Reels blocker and anti-doomscrolling browser extension for Chromium browsers. The extension strips distracting elements from Instagram Web, including short-form video reels, explore feeds, and algorithmic recommendations. Users install it as a lightweight Chrome focus extension to browse direct messages and profile pages without algorithmic retention loops.

## Purpose

Instagram Web presents algorithmic feeds designed to maximize user session time. InstaDe-tox removes these retention hooks directly in the client document.

- **Instagram Reels blocker.** Removes short-form video feeds and infinite scroll reels containers.
- **Explore feed removal.** Strips the explore recommendation feed from the DOM.
- **Anti-doomscrolling controls.** Blocks algorithmic content while leaving messages, notifications, and profile pages accessible.
- **Zero data collection.** Runs entirely on the local device with zero tracking, external telemetry, or network calls.

## Architecture

InstaDe-tox uses browser extension APIs and client-side JavaScript to modify the Instagram document object model.

- **Manifest declaration.** The `manifest.json` file configures extension metadata, icon assets, and host permissions for `https://www.instagram.com/`.
- **Content script injection.** The browser injects `init.js` into matching Instagram pages at document load.
- **DOM element removal.** The script evaluates document structure via XPath and removes target elements from the document tree.
- **Client execution.** The extension operates without background worker processes, remote dependencies, or persistent background memory overhead.

## Setup

Load InstaDe-tox into any Chromium browser, such as Google Chrome, Brave, Microsoft Edge, or Opera.

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/devsanthoshmk/InstaDe-tox.git
   ```
2. Open your browser and go to `chrome://extensions`.
3. Turn on the Developer mode toggle in the top right corner.
4. Click the Load unpacked button.
5. Select the cloned `InstaDe-tox` directory.

## Usage

1. Open `https://www.instagram.com` in your browser.
2. The extension injects its content script automatically when the page loads.
3. Access direct messages and profiles without recommendation feeds or reels.

To reload the extension after editing source code, return to `chrome://extensions` and click the reload icon on the InstaDe-tox card.

## Configuration

InstaDe-tox runs without external configuration files or options pages.

- **Target selectors.** Edit the XPath expression in `init.js` to change which DOM nodes the script removes.
- **URL matching.** Adjust the `matches` array in `manifest.json` to alter the URLs where the browser loads `init.js`.
- **Permissions.** The extension requests access only to active tabs and `https://www.instagram.com/`.

## License

This project is open source under the MIT License.
