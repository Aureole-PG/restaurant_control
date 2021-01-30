import React from 'react'
import {
    Container , Row, Col, Form, 
    FormGroup, Label, Input
} from 'reactstrap';
import Blinking from '../../components/animations/blinking'
import SipleCard from '../../components/cards/simpleCard'
import PrimaryBtn from '../../components/Buttons/primaryBtn'
export default function Login() {
    return (
        <Container>
            <Row>
                <Col className='d-flex align-items-center' style={{height: '100vh'}}>
                    <div>
                        <Blinking>
                            <h1>Restaurant</h1>
                        </Blinking>
                        
                        <Blinking>
                            <h3>Disfruta tu estadia</h3>
                        </Blinking>
                    </div>
                </Col>
                <Col className='d-flex align-items-center' style={{height: '100vh'}}>
                    <SipleCard >
                        <Form >
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                            </FormGroup>
                            <PrimaryBtn  type='submit' >Ingresar</PrimaryBtn>
                        </Form>
                    </SipleCard>
                    
                </Col>
            </Row>
        </Container>
        
    )
}
