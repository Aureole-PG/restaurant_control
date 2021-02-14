import React from 'react'
import {ItemCard} from '../../../components/cards/Cards'
import { Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
import {PrimaryBtn} from '../../../components/Buttons/Buttons'
export default function userForm() {
    return (
        <ItemCard style= {{marginTop: '15px'}}>
            <Form>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="nombre">Usuario</Label>
                            <Input type="text" name="nombre" id="nombre" placeholder="" />
                        </FormGroup>
                        
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="email">Correo</Label>
                            <Input type="email" name="email" id="email" placeholder="ejemplo@email.com"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="password">Contraseña</Label>
                            <Input type="password" name="password" id="password" placeholder="" />
                        </FormGroup>
                        
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="Cargo">Precio</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option selected disabled>Eliga un Cargo</option>
                                <option value="Cocinero">Cocinero</option>
                                <option value="Mesero">Mesero</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row style={{marginBlock: '15px'}}>
                    <Col>
                        <PrimaryBtn type="button">Crear</PrimaryBtn>
                    </Col>
                </Row>
            </Form>
        </ItemCard>
    )
}
