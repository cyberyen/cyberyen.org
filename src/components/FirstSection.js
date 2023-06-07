import { memo } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { arrow, c, cmobile } from "./Images"

function FirstSection()
{
    return <>
    <section id="home" className="section common-bottom-padding bottom-padding">
	    <Container fluid>
		<Row className="align-items-center">
		    <Col lg={6} md={6}>
			<div className="daul-flex">
			    <h3 className="section-h3">PRIVATE AND SECURE</h3>
			</div>
			<div className="daul-flex">
			    <h2 className="section-h2">PEER-TO-PEER DECENTRALIZED DIGITAL CURRENCY</h2>
			</div>
			<p className="normal-p p-mt">Cyberyen [C¥] is the cryptocurrency for payments based on Blockchain Technology</p>
			<div className="contribute">
			<a href="https://github.com/cyberyen/cyberyen/" target="_blank" rel="noreferrer" className="normal-btn-with-icon"><span>Contribute</span> <img src={arrow} alt="arroe" /></a>
			</div>
			<div className="contribute">
	<a href="https://github.com/cyberyen/cyberyen/releases/tag/v0.21.2.5" target="_blank" rel="noreferrer" className="normal-btn-with-icon"><span>Download<br/> Cyberyen Core 0.21.2.5</span> <img src={arrow} alt="arrow" /></a>
			</div>
		    </Col>
		    <Col lg={6} md={6}>
			<div className="c-img-section">
			<img src={c} alt="cy" className="c-desktop"/>
			<img src={cmobile} alt="cy-mobile" className="c-mobile"/>

			</div>
		    </Col>
		</Row>
	    </Container>
	</section>
    </>
}

export default memo(FirstSection)
