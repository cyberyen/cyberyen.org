import React from 'react'
import './css/section.css'

function SectionOne({
  lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel,
  topLine1, headline1, description1,
  topLine2, headline2, description2,
  topLine3, headline3, description3,
  topLine4, headline4, description4,
  img, imgStart
}) {
  return (
    <>
    <div className={ lightBg ? 'home__cy-section' : 'home__cy-section darkBg' }>
    <div className="container">
    <div className="row home__hero-row"
    style={{display: 'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
    <div className='col'>
    <div className="home__cy-text-wrapper">
    <div className="top-line">{topLine1}</div>
    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline1}</h1>
    <p className={lightTextDesc ? 'home__cy-subtitle' : 'home__cy-subtitle dark'}>{description1}</p>
    </div>
    </div>

    <div className='col'>
    <div className="home__cy-text-wrapper">
    <div className="top-line">{topLine2}</div>
    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline2}</h1>
    <p className={lightTextDesc ? 'home__cy-subtitle' : 'home__cy-subtitle dark'}>{description2}</p>
    </div>
    </div>

    <div className='col'>
    <div className="home__cy-text-wrapper">
    <div className="top-line">{topLine3}</div>
    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline3}</h1>
    <p className={lightTextDesc ? 'home__cy-subtitle' : 'home__cy-subtitle dark'}>{description3}</p>
    </div>
    </div>

    <div className='col'>
    <div className="home__cy-text-wrapper">
    <div className="top-line">{topLine4}</div>
    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline4}</h1>
    <p className={lightTextDesc ? 'home__cy-subtitle' : 'home__cy-subtitle dark'}>{description4}</p>
    </div>
    </div>

    </div>
    </div>
    </div>
    </>
  )
}

export default SectionOne
