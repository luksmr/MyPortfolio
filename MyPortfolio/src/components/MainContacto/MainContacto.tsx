import { Col, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../css/Contacto.css'
const MainContacto = () => {
    return (
        <>
            <div className='text-center mt-5 mb-5'>
                <h3>Mis Redes</h3>
            </div>
            <div className='d-flex flex-column align-items-center'>
                
                <div className='text-center mt-5 mb-5 col-7'>
                    <Row className="justify-content-center">
                        <Col className="d-flex justify-content-center mb-4">
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>Linkedin</Card.Title>
                                    <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" />
                                    <div className='mt-3 mb-3'>
                                        <Link to='https://www.linkedin.com/in/lucas-romero-3a214b251/' className='btn btn-primary'>Contactar</Link>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center mb-4">
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>Github</Card.Title>
                                    <Card.Img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                                    <div className='mt-3 mb-3'>
                                        <Link to='https://github.com/luksmr' className='btn btn-dark'>Contactar</Link>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center mb-4">
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>Gmail</Card.Title>
                                    <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
                                    <Link to='mailto:lucasmatiasr17@gmail.com' className='btn btn-danger'>Contactar</Link>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </div>
                <div className='mt-5 mb-5'>
                    <Link to='/' className='btn btn-info'>Volver</Link>
                </div>

            </div>

        </>
    )
}

export default MainContacto