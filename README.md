# Tenno Tracker Browser Extension

A cross-browser extension designed to help Warframe players securely access their GID (Global ID) for use with the [Tenno Tracker](https://tennotracker.com/) website.

## Features

- Secure GID cookie access from warframe.com
- One-click GID copying functionality
- Privacy-focused with minimal permissions
- Cross-browser compatibility (Chrome, Firefox, Edge)
- Security-compliant DOM manipulation

## Installation

### From Source

#### For Chrome/Edge:
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/tenno-tracker-browser-extension.git
   ```

2. Open Chrome/Edge and navigate to `chrome://extensions/` or `edge://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the `tenno-tracker-browser-extension` directory

#### For Firefox:
1. Clone this repository (same as above)

2. Open Firefox and navigate to `about:debugging`

3. Click "This Firefox" in the sidebar

4. Click "Load Temporary Add-on..."

5. Select the `manifest.json` file in the `tenno-tracker-browser-extension` directory

### Usage

1. Log in to [warframe.com](https://www.warframe.com)
2. Click the Tenno Tracker extension icon in your browser toolbar
3. Click "Check GID" to retrieve your GID
4. Use the copy button to copy your GID for use with Tenno Tracker

## Privacy & Security

This extension:
- Only requests access to cookies from warframe.com
- Only reads the specific GID cookie needed for authentication
- Does not store or transmit any personal data
- Runs entirely in your browser

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Test on multiple browsers (Chrome, Firefox, Edge)
5. Follow security best practices (no `innerHTML`, sanitize user input)
6. Commit your changes (`git commit -am 'Add new feature'`)
7. Push to the branch (`git push origin feature/improvement`)
8. Create a Pull Request

### Development Guidelines
- Use secure DOM manipulation methods
- Test cross-browser compatibility
- Follow Mozilla and Chrome store guidelines
- Keep dependencies minimal


## Dependencies

This extension is built with vanilla JavaScript and has no external dependencies.

## Browser Support

- **Google Chrome** (Version 88+)
- **Mozilla Firefox** (Version 109+) 
- **Microsoft Edge** (Version 88+)
- **Other Chromium-based browsers** (should work but not officially tested)

### Technical Requirements
- Manifest V3 support
- Cookie API support
- Modern JavaScript features (ES6+)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to Digital Extremes for creating Warframe
- Built for the Tenno Tracker community

## Support

If you encounter any issues or have questions:
1. Check the Issues page
2. Create a new issue if your problem isn't already listed
3. Provide as much detail as possible, including:
   - Browser name and version
   - Operating system
   - Steps to reproduce
   - Expected vs actual behavior
   - Console errors (if any)

## Changelog

### v1.1.0 (Latest)
- Added Firefox compatibility
- Replaced unsafe innerHTML with secure DOM methods
- Updated manifest for cross-browser support
- Added Mozilla store compliance
- Security improvements and vulnerability fixes

### v1.0.0
- Initial Chrome Web Store release
- Core GID fetching functionality
- Secure cookie access from warframe.com
- One-click GID copying