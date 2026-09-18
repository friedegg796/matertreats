import { useState } from 'react'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">

        </div>
        <div>
          <h1>Matertreats</h1>
          <p>
            Heavy WIP

            <br/>

           Was going to be the website for my shop at Mater Brighton Lakes Academy.

           Was told I can't make the shop, but I still wanna make the website

          </p>
        </div>

      </section>



      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Learn more about this place</p>
          <ul>
            <li>
              <a href="https://cash.app/$HasnainAlahi" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href=""></use>
                </svg>
                Cash app
              </a>
            </li>

          </ul>
        </div>
      </section>

      <section id="spacer"></section>

     <Footer/>

    </>
  )
}

export default App
