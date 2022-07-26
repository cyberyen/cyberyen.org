import React from 'react'
import { Button } from './Button'
import './css/section.css'

function SectionZero({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, imgStart
}) {
    return (
	<>
	<div className={ lightBg ? 'home__cy-section' : 'home__cy-section darkBg' }>
	    <div className="container">
		<div className="row home__cy-row"
		style={{display: 'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
		    <div className='col'>
			<div className="home__cy-text-wrapper">
			    <div id={"home"} className="top-line">{topLine}</div>
			    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
			    <p className={lightTextDesc ? 'home__cy-subtitle' : 'home__cy-subtitle dark'}>{description}</p>
			    <a href="https://github.com/cyberyen" target="_blank" rel="noreferrer">

				<Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
				</a>
			</div>
		    </div>
		    <div className='col'>
			<div className="home__cy-img-wrapper">
			    <img src={img} className="home__cy-img" alt="logo" />
			</div>
		    </div>
		</div>
	    </div>
	</div>
	</>
    )
}

export default SectionZero
