import React, {useState} from 'react'
import {ItemCard} from '../../../components/cards/Cards'
import { Form, FormGroup, Label, Input, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import {SecondaryBtn, PrimaryBtn, WaringBtn} from '../../../components/Buttons/Buttons'
export default function AddMenuForm() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
        <ItemCard style= {{marginTop: '15px'}}>
            <Form>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="nombre">Nombre del menu</Label>
                            <Input type="text" name="nombre" id="nombre" placeholder="Ej: Desayuno, Almuerzo , Desatuno Continental etc." />
                        </FormGroup>
                        
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="precio">Precio</Label>
                            <Input type="number" name="precio" id="precio" placeholder="Precio"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroupItem style={{backgroundColor: '#fff0'}}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                    <ListGroupItemHeading>Arroz</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        Arroz jugueteado
                                    </ListGroupItemText>
                                    </div>  
                                    <WaringBtn type="button">Quitar</WaringBtn>    
                                </div>
                                
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row style={{marginBlock: '15px'}}>
                    <Col>
                        <PrimaryBtn type="button" onClick={toggle}>Crear</PrimaryBtn>
                    </Col>
                </Row>
            </Form>
        </ItemCard>
        <Row >
            <Col xs={12} style={{marginBlock: '10px'}}>
                <SecondaryBtn type="button" onClick={toggle}>Crear nuevo plato</SecondaryBtn>{' '}
                <AddDishesModal modal={modal} toggle={toggle}/>
            </Col>
            <Col>
                <ItemCard>
                    <h6>Nombre plato</h6>
                    <p>descripcion</p>
                    <SecondaryBtn type="button" onClick={toggle}>Agregar</SecondaryBtn>
                </ItemCard>
                
            </Col>
            <Col>
                <ItemCard>
                    <h6>Nombre plato</h6>
                    <p>descripcion</p>
                    <SecondaryBtn type="button" onClick={toggle}>Agregar</SecondaryBtn>
                </ItemCard>
            </Col>
        </Row>
        </>
    )
}


const AddDishesModal=({modal,toggle})=>(
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Crear Plato</ModalHeader>
        <Form>
            <ModalBody>
                <FormGroup>
                    <Label for="nombre">Nombre del Plato</Label>
                    <Input type="text" name="nombre" id="nombre" placeholder="Ej: Seco de Pollo, Encebollado, Coca Cola, Jugo etc." />
                </FormGroup>
                <FormGroup>
                    <Label for="descripcion">Descripcion del plato</Label>
                    <Input type="text" name="descripcion" id="descripcion" placeholder="Ej: Arroz con pollo al jugo, Jugo de naranja etc." />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <PrimaryBtn onClick={toggle}>Crear</PrimaryBtn>{' '}
                <SecondaryBtn type="button" onClick={toggle}>Cancelar</SecondaryBtn>
            </ModalFooter>
            
        </Form>
        
      </Modal>
    </div>
)