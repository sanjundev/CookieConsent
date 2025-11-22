import React from 'react';
import ReactDOM from 'react-dom/client';
import CookieConsentBanner from './CookieConsentBanner';
import { CookieConsentOptions } from './types';

class MyCookieClass {
  private container: HTMLDivElement | null = null;
  private root: ReactDOM.Root | null = null;
  private readonly defaultStorageKey = 'cookie-consent-accepted';
  private readonly consentValue = 'true';

  private hasConsent(storageKey: string): boolean {
    try {
      return localStorage.getItem(storageKey) === this.consentValue;
    } catch (error) {
      // localStorage might not be available (e.g., in private browsing mode)
      return false;
    }
  }

  private saveConsent(storageKey: string): void {
    try {
      localStorage.setItem(storageKey, this.consentValue);
    } catch (error) {
      // Silently fail if localStorage is not available
      console.warn('Unable to save cookie consent to localStorage');
    }
  }

  show(options: CookieConsentOptions = {}): void {
    const storageKey = (options.storageKey && options.storageKey.trim()) || this.defaultStorageKey;

    // Check if consent was already given
    if (this.hasConsent(storageKey)) {
      return;
    }

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
      // Save consent to localStorage
      this.saveConsent(storageKey);
      
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

  reset(storageKey?: string): void {
    const key = (storageKey && storageKey.trim()) || this.defaultStorageKey;
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('Unable to reset cookie consent in localStorage');
    }
  }
}

const MyCookie = new MyCookieClass();

export default MyCookie;
export { CookieConsentBanner };
export type { CookieConsentOptions, CookieConsentProps } from './types';
