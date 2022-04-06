import { Container, UncontrolledCarousel } from "reactstrap"

export const HomeScreen = () => {
    return (
        <>
            <Container className='h-100 pt-5 bg-white'>
                <h1 className='pt-1 text-center'>Sistema de Inventario - Multi Bodega</h1>
                <UncontrolledCarousel
                    items={[
                        {
                            altText: 'Slide 1',
                            caption: 'Slide 1',
                            key: 1,
                            src: 'https://picsum.photos/id/123/1200/600'
                        },
                        {
                            altText: 'Slide 2',
                            caption: 'Slide 2',
                            key: 2,
                            src: 'https://picsum.photos/id/456/1200/600'
                        },
                        {
                            altText: 'Slide 3',
                            caption: 'Slide 3',
                            key: 3,
                            src: 'https://picsum.photos/id/678/1200/600'
                        }
                    ]}
                />
            </Container>
        </>
    )
}