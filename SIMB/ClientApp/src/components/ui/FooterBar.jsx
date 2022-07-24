import { Row, Col, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const FooterBar = () => {
  return (
    <>
	    {/* <Row className="bg-light py-3 mt-auto bg-gradient"> */}
		<Row className="bg-light mt-auto py-3 bg-gradient" fixed="bottom">
			<Navbar>
				<Container>
					<Col md="6">
						<h4 className="text-muted align-middle">SIMB</h4>
					</Col>
					<Col md="2">
						Paginas
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
						</ul>
					</Col>
					<Col md="2">Redes</Col>
					<Col md="2">Política de Privacidad</Col>
				</Container>
			</Navbar>
			{/* <div class="container">
                <span class="text-muted">Place sticky footer content here.</span>
            </div> */}
        {/* <footer class="footer mt-auto py-3 bg-light">
            <div class="container">
                <span class="text-muted">Place sticky footer content here.</span>
            </div>
        </footer> */}
		</Row>
    </>
  )
}
