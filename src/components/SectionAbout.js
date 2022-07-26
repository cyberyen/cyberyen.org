import React from 'react'
import './css/section.css'

function SectionAbout({
  lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, text, img
}) {
    return (
      <>
      <div className={ lightBg ? 'home__cy-section' : 'home__cy-section darkBg' }>
      <div>
      <div style={{textAlign: 'center'}} >
      <h1 id="about" className={ lightText ? 'heading' : 'heading dark' }>{headline}</h1>
      </div>

      <div className='light'>
      <h3 style={{color:'#111'}}>{text}</h3>
      </div>

      </div>
      </div>
      </>
    )
}

export default SectionAbout
