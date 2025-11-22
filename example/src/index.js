import React from 'react';
import { createRoot } from 'react-dom/client';
import MyCookie from 'react-cookie-consent';

function App() {
  const showDefault = () => {
    MyCookie.show();
  };

  const showCustomTop = () => {
    MyCookie.show({
      title: 'We use cookies',
      position: 'top',
      background: '#2c3e50',
      textcolor: '#ecf0f1',
      buttonColor: '#e74c3c',
      buttonText: 'I Agree',
      closeText: 'Decline'
    });
  };

  const showWithCallbacks = () => {
    MyCookie.show({
      title: 'Cookie Policy',
      position: 'bottom',
      background: '#34495e',
      textcolor: '#ffffff',
      buttonColor: '#27ae60',
      buttonText: 'Accept',
      closeText: 'Decline',
      onAccept: () => {
        alert('Cookies accepted! You can now proceed.');
      },
      onClose: () => {
        alert('Banner closed without accepting cookies.');
      }
    });
  };

  const hideBanner = () => {
    MyCookie.hide();
  };

  const resetConsent = () => {
    MyCookie.reset();
    alert('Cookie consent has been reset! You can now show the banner again.');
  };

  return (
    <div>
      <h1>react-cookie-consent Demo</h1>
      
      <div className="demo-section" style={{ backgroundColor: '#fffbea', border: '2px solid #f59e0b' }}>
        <h2>🆕 Persistent Consent</h2>
        <p>
          <strong>New Feature:</strong> Once you accept the cookie consent, it will be saved to localStorage 
          and the banner won't show again, even after page refresh! Try accepting and then refreshing the page 
          or clicking the buttons below again.
        </p>
        <button onClick={resetConsent} style={{ backgroundColor: '#f59e0b' }}>Reset Consent State</button>
        <pre>MyCookie.reset();</pre>
      </div>

      <div className="demo-section">
        <h2>Default Banner</h2>
        <p>Show the banner with default settings:</p>
        <button onClick={showDefault}>Show Default Banner</button>
        <pre>MyCookie.show();</pre>
      </div>

      <div className="demo-section">
        <h2>Custom Banner (Top Position)</h2>
        <p>Show the banner at the top with a custom title and colors:</p>
        <button onClick={showCustomTop}>Show Top Banner</button>
        <pre>{`MyCookie.show({
  title: 'We use cookies',
  position: 'top',
  background: '#2c3e50',
  textcolor: '#ecf0f1',
  buttonColor: '#e74c3c',
  buttonText: 'I Agree',
  closeText: 'Decline'
});`}</pre>
      </div>

      <div className="demo-section">
        <h2>Custom Banner with Callbacks</h2>
        <p>Show banner with event callbacks:</p>
        <button onClick={showWithCallbacks}>Show Banner with Callbacks</button>
        <pre>{`MyCookie.show({
  title: 'Cookie Policy',
  position: 'bottom',
  background: '#34495e',
  buttonColor: '#27ae60',
  onAccept: () => alert('Cookies accepted!'),
  onClose: () => alert('Banner closed!')
});`}</pre>
      </div>

      <div className="demo-section">
        <h2>Manual Hide</h2>
        <p>Manually hide the currently displayed banner:</p>
        <button onClick={hideBanner}>Hide Banner</button>
        <pre>MyCookie.hide();</pre>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
