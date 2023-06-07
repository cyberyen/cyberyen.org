import { memo } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { arrow } from "./Images"

function SecondSection()
{
    return <>
    <section id="about" className="section second-sec bottom-padding">
	    <Container fluid>
	    <h2 className="section-h2">WHAT IS CYBERYEN</h2>
		<Row>
		    <Col lg={10} md={10}>
		    <div className="list-box-about">
			    <p>Cyberyen is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. Cyberyen is an open source, global payment network that is fully decentralized without any central authorities. Mathematics secures the network and empowers individuals to control their own finances. Cyberyen is a hybrid grown from the Litecoin MWEB fork with grafted new block parameters, which is an expedient component for future blockchain development..</p>
		    </div>

		    </Col>
		    <div className="contribute">
			    <a href="https://cypedia.cyberyen.org/" target="_blank" rel="noreferrer" className="normal-btn-with-icon"><span>More information</span> <img src={arrow} alt="arrow" /></a>
		    </div>
		</Row>
	    </Container>
	</section>
    </>
}

export default memo(SecondSection)
