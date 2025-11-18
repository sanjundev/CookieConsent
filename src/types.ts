import React from 'react';

export interface CookieConsentOptions {
  background?: string;
  title?: string;
  textcolor?: string;
  position?: 'top' | 'bottom';
  buttonColor?: string;
  buttonText?: string;
  closeText?: string;
  onAccept?: () => void;
  onClose?: () => void;
}

export interface CookieConsentProps extends CookieConsentOptions {
}
