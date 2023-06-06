import { Container} from "react-bootstrap"
import '../assets/css/footer.css'

function Footer() {
    return <>
	<footer>
	    <Container fluid>
		<div className="footer-bottom">
		    <div>
			<p className="text-white">&copy; Cyberyen Core 2022-{new Date().getFullYear()} Released under the MIT license</p>
		    </div>
		    <ul className="social-links">
			<li>
			    <a href="mailto:contact@cyberyen.org" target="_blank" rel="noreferrer"><i class="fa-solid fa-envelope"></i></a>
			</li>
			<li>
			    <a href="https://matrix.to/#/#cyberyen:matrix.org" target="_blank" rel="noreferrer"><i class="fa fa-matrix-org fa-lg"></i></a>
			</li>
			<li>
			    <a href="https://cypedia.cyberyen.org" target="_blank" rel="noreferrer"><i class="fa-solid fa-book"></i></a>
			</li>
			<li>
			    <a href="https://github.com/cyberyen" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
			</li>
		    </ul>
		</div>
	    </Container>
	</footer>
    </>
}

export default Footer
