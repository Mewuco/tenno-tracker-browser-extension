# Tenno Tracker Chrome Extension

A Chrome extension designed to help Warframe players securely access their GID (Global ID) for use with the [Tenno Tracker](https://tennotracker.com/) website.

## Features

- 🔒 Secure GID cookie access from warframe.com
- 📋 One-click GID copying functionality
- 🛡️ Privacy-focused with minimal permissions

## Installation

### From Source

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/tenno-tracker-chrome-extension.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the `tenno-tracker-chrome-extension` directory

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
4. Run tests (if available)
5. Commit your changes (`git commit -am 'Add new feature'`)
6. Push to the branch (`git push origin feature/improvement`)
7. Create a Pull Request


## Dependencies

This extension is built with vanilla JavaScript and has no external dependencies.

## Browser Support

- Google Chrome (Version 88+)
- Microsoft Edge (Version 88+)
- Other Chromium-based browsers should work but are not officially supported

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
   - Browser version
   - Steps to reproduce
   - Expected vs actual behavior 