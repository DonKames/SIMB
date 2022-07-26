import { Carousel, Container } from "react-bootstrap"

export const HomeScreen = () => {
    return (
        <>
            <Container className='animate__animated animate__fadeIn animate__faster h-100'>
                <h1 className='text-center'>Sistema Inventario Multi Bodega</h1>
                <Carousel fade className="shadow-sm mb-5">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/cloud-kames/image/upload/v1656463719/SIMB/Logistic_1_800x400_xwqdte.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/cloud-kames/image/upload/v1656463719/SIMB/Logistic_7_800x400_yg5a3b.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/cloud-kames/image/upload/v1656463719/SIMB/Office_1_800x400_a6qsgh.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}