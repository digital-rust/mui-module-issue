import MyButton from '_components/MuiButton';
import React, { useEffect } from 'react';

function App(): JSX.Element {
  useEffect(() => {
    window.ipcAPI?.rendererReady();
  }, []);

  return (
    <div className="app">
      <h4>Welcome to React, Electron and TypeScript</h4>
      <p>Hello</p>
      <MyButton />
    </div>
  );
}

export default App;
