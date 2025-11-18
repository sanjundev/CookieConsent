import React from 'react';
import { CookieConsentProps } from './types';

const CookieConsentBanner: React.FC<CookieConsentProps> = ({
  background = '#1a1a1a',
  title = '',
  textcolor = '#fff',
  position = 'bottom',
  buttonColor,
  buttonText = 'Accept all',
  closeText = 'Close',
  onAccept,
  onClose
}) => {
  const bannerStyle: React.CSSProperties = {
    position: 'fixed',
    left: 0,
    right: 0,
    [position]: 0,
    backgroundColor: background,
    color: textcolor,
    padding: '20px',
    zIndex: 9999,
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    fontFamily: 'Arial, sans-serif'
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '15px'
  };

  const textContainerStyle: React.CSSProperties = {
    flex: 1,
    minWidth: '200px'
  };

  const titleStyle: React.CSSProperties = {
    margin: '0 0 8px 0',
    fontSize: '18px',
    fontWeight: 'bold'
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'opacity 0.2s'
  };

  const acceptButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: buttonColor || '#4CAF50',
    color: '#fff'
  };

  const closeButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    color: textcolor,
    border: `1px solid ${textcolor}`
  };

  return (
    <div style={bannerStyle}>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          {title && <h3 style={titleStyle}>{title}</h3>}
          <p style={{ margin: 0, fontSize: '14px' }}>
            We use cookies to enhance your browsing experience and analyze our traffic.
            By clicking "Accept all", you consent to our use of cookies.
          </p>
        </div>
        <div style={buttonContainerStyle}>
          <button
            style={acceptButtonStyle}
            onClick={onAccept}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {buttonText}
          </button>
          <button
            style={closeButtonStyle}
            onClick={onClose}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {closeText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
