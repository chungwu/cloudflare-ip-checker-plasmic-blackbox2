import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import { ScreenVariantProvider } from './components/plasmic/PlasmicGlobalVariant__Screen';

function App() {
  return (
    <div className="App">
      <ScreenVariantProvider>
        <MainPage />
      </ScreenVariantProvider>
    </div>
  );
}

export default App;
