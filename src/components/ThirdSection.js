import { memo } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { arrow } from "./Images"

function ThirdSection()
{
    return <>
    <section id="network" className="section second-sec bottom-padding">
	    <Container fluid>
		<Row>
		    <Col lg={6} md={6}>
			<div className="list-box">
			    <h3 className="section-h3">OPEN SOURCE SOFTWARE</h3>
			    <h2 className="section-h2">Transparent code open to contributors.</h2>
			    <p>Cyberyen is an open source software project released under the MIT/X11 license which gives you the power to run, modify, and copy the software and to distribute, at your option, modified copies of the software. The software is released in a transparent process that allows for independent verification of binaries and their corresponding source code.</p>
			</div>
		    </Col>
		    <Col lg={6} md={6}>
			<div className="list-box">
			    <h3 className="section-h3">BLOCKCHAIN</h3>
			    <h2 className="section-h2">Blocks generation.</h2>
			    <p>Cyberyen uses a simplified variant of the scrypt key derivation function as its proof of work with a target time of one minute per block and difficulty readjustment after every block.</p>
			</div>
		    </Col>
		    <Col lg={6} md={6}>
			<div className="list-box">
			    <h3 className="section-h3">MINING</h3>
			    <h2 className="section-h2">Network support principle.</h2>
			    <p>The block rewards are fixed. Miners will be awarded with 10000 new cyberyens starting from 600000 block. Cyberyen is therefore scheduled to produce unlymited amount cyberyens.</p>
			</div>
		    </Col>
		    <Col lg={6} md={6}>
			<div className="list-box">
			    <h3 className="section-h3">MWEB</h3>
			    <h2 className="section-h2">Confidential transactions.</h2>
			    <p>MimbleWimble Extension Block is provid users the option of sending confidential Cyberyen transactions, in which the amount being sent is only known between the sender and receiver, as well as the benefit of having private address balances and increasing Cyberyen’s transaction throughput.</p>
			</div>
		    </Col>
		    <Col lg={6} md={6}>
			<div className="list-box">
			    <h3 className="section-h3">C¥ WALLETS</h3>
			    <h2 className="section-h2">Transactions and account balance.</h2>
			    <p>Cyberyen Core is a full Cyberyen client and builds the backbone of the network. It offers high levels of security, privacy, and stability. Based on the open source Cyberyen Core, any developer can create an encrypted wallet synchronized with the Cyberyen blockchain to work with C¥s.</p>
			</div>
		    </Col>
		    <div className="contribute">
			    <a href="https://github.com/cyberyen/cyberyen/" target="_blank" rel="noreferrer" className="normal-btn-with-icon"><span>Cyberyen Core</span> <img src={arrow}/></a>
		    </div>
		</Row>
	    </Container>
	</section>
    </>
}

export default memo(ThirdSection)
