
import { Col, Row, Card } from 'react-bootstrap'

const Skills = () => {
    return (
        <>
            <div className='text-center mt-5 mb-3'>
                <h3>Skills: </h3>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='text-center mt-5 mb-5 col-8'>
                    <Row className="justify-content-center">
                        <Col className="d-flex justify-content-center mb-4">
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>HTML5</Card.Title>
                                    <Card.Img src="https://cdn-icons-png.flaticon.com/256/226/226269.png" />
                                    

                                </Card.Body>
                                
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center mb-4">
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>CSS</Card.Title>
                                    <Card.Img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" />

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center mb-4">
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>JavaScript</Card.Title>
                                    <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center mb-4">
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>React</Card.Title>
                                    <Card.Img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" />

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </div>
                <div className='text-center mt-5 mb-5 col-8'>
                    <Row className="justify-content-center">
                        <Col className="d-flex justify-content-center mb-4">
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>TipeScript</Card.Title>
                                    <Card.Img src="https://static-00.iconduck.com/assets.00/typescript-icon-icon-512x512-yh0yu3ta.png" />

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center mb-4">
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>Bootstrap</Card.Title>
                                    <Card.Img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" />

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center mb-4">
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>MySql</Card.Title>
                                    <Card.Img src="https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png" />

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center mb-4">
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>C#</Card.Title>
                                    <Card.Img src="https://cdn.iconscout.com/icon/free/png-256/free-csharp-1175240.png?f=webp&w=256" />

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </div>

            </div>


        </>
    )
}

export default Skills