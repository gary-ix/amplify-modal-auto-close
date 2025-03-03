# AWS Modal Auto Close Chrome Extension

A simple Chrome extension that automatically closes modals on AWS Console pages.

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing these files
5. The extension should now appear in your Chrome extensions list

## Usage

The extension will automatically run on any AWS Console page. It will:
- Attempt to close modals as soon as they appear
- Watch for dynamically added modals
- Periodically check for new modals

## Note

You'll need to add icon files (icon48.png and icon128.png) to the extension directory for it to work properly. These can be any PNG images of the corresponding sizes (48x48 and 128x128 pixels). 