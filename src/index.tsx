import React from 'react';
import ReactDOM from 'react-dom/client';
import CookieConsentBanner from './CookieConsentBanner';
import { CookieConsentOptions } from './types';

class MyCookieClass {
  private container: HTMLDivElement | null = null;
  private root: ReactDOM.Root | null = null;

  show(options: CookieConsentOptions = {}): void {
    // If already showing, don't create another
    if (this.container) {
      return;
    }

    // Create container div for portal
    this.container = document.createElement('div');
    this.container.id = 'cookie-consent-portal';
    document.body.appendChild(this.container);

    // Default callbacks
    const handleAccept = () => {
      if (options.onAccept) {
        options.onAccept();
      }
      this.hide();
    };

    const handleClose = () => {
      if (options.onClose) {
        options.onClose();
      }
      this.hide();
    };

    // Render the banner using React 18 createRoot
    this.root = ReactDOM.createRoot(this.container);
    this.root.render(
      <CookieConsentBanner
        {...options}
        onAccept={handleAccept}
        onClose={handleClose}
      />
    );
  }

  hide(): void {
    if (this.root && this.container) {
      this.root.unmount();
      document.body.removeChild(this.container);
      this.container = null;
      this.root = null;
    }
  }
}

const MyCookie = new MyCookieClass();

export default MyCookie;
export { CookieConsentBanner };
export type { CookieConsentOptions, CookieConsentProps } from './types';
