import { closeicon, logo, showicon } from "./Images"
import '../assets/css/header.css'
import { memo, useContext } from "react"
import GlobalState from "../Context"

function Header() {
    const { isShow, setIsShow } = useContext(GlobalState)
    return <>
	<header>
	    <div className="custom-header">
		<div className="head-flex">
		    <div className="logo-section">
			<img src={logo} alt="logo" />
		    </div>
		    <img src={showicon} alt="showicon" className="mobile-head-open" onClick={(e) => setIsShow(true)}/>
		</div>
		<div className="header-100-vh">
		<div className={isShow ? "header-body nav-open" : "header-body nav-close"}>
		    <div className="mobile-head">
			<img src={logo} alt="logo" className="sm-logo"/>
			<img src={closeicon} alt="closeicon" className="close-icon" onClick={(e) => setIsShow(false)}/>
		    </div>
		    <ul className="ul">
			<li className="custom-order-3">
			    <a href="#home" >Home</a>
			</li>
			<li className="custom-order-3">
			    <a href="#about" >About</a>
			</li>
			<li className="custom-order-3">
			    <a href="#network" >Network</a>
			</li>
			<li className="custom-order-3">
			    <a href="https://cypedia.cyberyen.org/" target="_blank" rel="noreferrer">Documentation</a>
			</li>
			<div className="custom-order-4 m-d-none">
			    <li >
				<a href="mailto:contact@cyberyen.org" target="_blank" rel="noreferrer"><i class="fa-solid fa-envelope"></i></a>
			    </li>
			    <li>
				<a href="https://matrix.to/#/#cyberyen:matrix.org" target="_blank" rel="noreferrer"><i class="fa fa-matrix-org fa-2x"></i></a>
			    </li>
			</div>
		    </ul>
		    <ul className="ul mobile-social">
			    <li >
				<a href="mailto:contact@cyberyen.org" target="_blank" rel="noreferrer"><i class="fa-solid fa-envelope"></i></a>
			    </li>
			    <li>
				<a href="https://matrix.to/#/#cyberyen:matrix.org" target="_blank" rel="noreferrer"><i class="fa fa-matrix-org fa-lg"></i></a>
			    </li>
		    </ul>
		</div>
		</div>
	    </div>
	</header>
    </>
}

export default memo(Header)
