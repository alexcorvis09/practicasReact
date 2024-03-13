import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='mainContainer'>
        <div>
        <h1>Vite </h1>
          <h3>Next Generation Frontend Tooling</h3>
          <h3>Get ready for a development environment that can finally catch up with you.</h3>
            <a className='purpleButton'>Get Started</a>
            <a className='greyButton'>Why Vite?</a>
            <a className='greyButton'>View on Github</a>
            <a className='purpleButton'>🎉 ViteConf 23!</a>
        </div>
        <div>
        <h1 href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        </h1>
        </div>
      </div>
      <div className='mainGrid'>
        <div className='smallerContainer'>
          <p>💡</p>
          <p>Instant Server</p>
          <p> Start On demand file serving over native ESM, no bundling required!</p>
        </div>
        <div className='smallerContainer'>
          <p>⚡️</p>
          <p>Lightning Fast</p> 
          <p>HMR Hot Module Replacement (HMR) that stays fast regardless of app size.</p>
        </div>
        <div className='smallerContainer'>
          <p>🛠️</p>
          <p>Rich Features</p>
          <p>Out-of-the-box support for TypeScript, JSX, CSS and more.</p>
        </div>
        <div className='smallerContainer'>
          <p>📦</p>
          <p>Optimized Build</p>
          <p>Pre-configured Rollup build with multi-page and library mode support.</p>
        </div>
        <div className='smallerContainer'>
          <p>🔩</p>
          <p>Universal Plugins</p>
          <p>Rollup-superset plugin interface shared between dev and build.</p>
        </div>
        <div className='smallerContainer'>
          <p>🔑</p>
          <p>Fully Typed APIs</p>
          <p>Flexible programmatic APIs with full TypeScript typing.</p>
        </div>
      </div>
    </>
  )
}

export default App
