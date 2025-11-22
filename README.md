# react-cookie-consent

A React component library for displaying cookie consent banners with customizable options and **automatic persistence**.

## Features

- 🎨 Fully customizable appearance
- 💾 **Automatic consent persistence** - Once accepted, the banner won't show again
- 🔄 Built-in reset functionality
- 📱 Responsive design
- ⚡ Easy to integrate
- 🎯 TypeScript support

## Installation

Install the library using yarn:

```bash
yarn add react-cookie-consent
```

Or using npm:

```bash
npm install react-cookie-consent
```

## Usage

The library exports a default `MyCookie` object with a `show()` method that displays a cookie consent banner injected into the DOM using a React portal. **When a user accepts the cookies, their choice is automatically saved to localStorage, preventing the banner from showing again on subsequent visits.**

### Basic Usage

```javascript
import MyCookie from 'react-cookie-consent';

// Show the cookie consent banner with default settings
MyCookie.show();
```

### Custom Options

```javascript
import MyCookie from 'react-cookie-consent';

MyCookie.show({
  background: '#1a1a1a',        // Background color (default: '#1a1a1a')
  title: 'Cookie Consent',      // Title text (default: '')
  textcolor: '#fff',            // Text color (default: '#fff')
  position: 'bottom',           // Position: 'top' or 'bottom' (default: 'bottom')
  buttonColor: '#4CAF50',       // Accept button color (default: '#4CAF50')
  buttonText: 'Accept all',     // Accept button text (default: 'Accept all')
  closeText: 'Close',           // Close button text (default: 'Close')
  onAccept: () => {             // Callback when accept is clicked
    console.log('Cookies accepted!');
  },
  onClose: () => {              // Callback when close is clicked
    console.log('Banner closed');
  }
});
```

### Hiding the Banner

```javascript
import MyCookie from 'react-cookie-consent';

// Manually hide the banner
MyCookie.hide();
```

### Resetting Consent

```javascript
import MyCookie from 'react-cookie-consent';

// Clear the saved consent state
MyCookie.reset();

// Now the banner will show again
MyCookie.show();
```

## API

### MyCookie.show(options)

Displays the cookie consent banner with optional customization. **The banner will automatically be suppressed if the user has already accepted cookies** (stored in localStorage).

#### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `background` | string | `'#1a1a1a'` | Background color of the banner |
| `title` | string | `''` | Title text displayed in the banner |
| `textcolor` | string | `'#fff'` | Text color for the banner content |
| `position` | `'top'` \| `'bottom'` | `'bottom'` | Position of the banner on the page |
| `buttonColor` | string | `'#4CAF50'` | Background color of the accept button |
| `buttonText` | string | `'Accept all'` | Text for the accept button |
| `closeText` | string | `'Close'` | Text for the close button |
| `onAccept` | function | `undefined` | Callback function when accept button is clicked |
| `onClose` | function | `undefined` | Callback function when close button is clicked |
| `storageKey` | string | `'cookie-consent-accepted'` | Custom localStorage key for storing consent state |

### MyCookie.hide()

Removes the cookie consent banner from the DOM.

### MyCookie.reset(storageKey?)

Clears the saved consent state from localStorage, allowing the banner to be displayed again.

**Parameters:**
- `storageKey` (optional): The localStorage key to clear. If not provided, uses the default `'cookie-consent-accepted'`.

## Advanced Usage

### Using the Component Directly

If you prefer to use the React component directly instead of the portal approach:

```javascript
import { CookieConsentBanner } from 'react-cookie-consent';

function App() {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <CookieConsentBanner
      title="Cookie Consent"
      background="#1a1a1a"
      textcolor="#fff"
      position="bottom"
      buttonColor="#4CAF50"
      buttonText="Accept all"
      closeText="Close"
      onAccept={() => {
        console.log('Accepted');
        setShowBanner(false);
      }}
      onClose={() => {
        console.log('Closed');
        setShowBanner(false);
      }}
    />
  );
}
```

## TypeScript Support

This library includes TypeScript definitions. Import types as needed:

```typescript
import MyCookie, { CookieConsentOptions, CookieConsentProps } from 'react-cookie-consent';

const options: CookieConsentOptions = {
  background: '#1a1a1a',
  title: 'Cookie Consent',
  position: 'bottom'
};

MyCookie.show(options);
```

## License

MIT
