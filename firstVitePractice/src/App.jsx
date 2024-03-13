import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='mainContainer'>
        <div>
        <p>Vite </p>
          <p>Next Generation Frontend Tooling</p>
          <p>Get ready for a development environment that can finally catch up with you.</p>
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
        <p>
        💡Instant Server Start
        On demand file serving over native ESM, no bundling required!</p>
        <p>⚡️Lightning Fast HMR Hot Module Replacement (HMR) that stays fast regardless of app size.</p>
        <p>Rich Features Out-of-the-box support for TypeScript, JSX, CSS and more.</p>
        <p>Optimized Build Pre-configured Rollup build with multi-page and library mode support.</p>
        <p>Universal Plugins Rollup-superset plugin interface shared between dev and build.</p>
        <p>Fully Typed APIs Flexible programmatic APIs with full TypeScript typing.</p>
      </div>
    </>
  )
}

export default App
