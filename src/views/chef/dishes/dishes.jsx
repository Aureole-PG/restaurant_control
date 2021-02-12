import React from 'react'
import {Col, Row, CardTitle,CardSubtitle,CardText} from 'reactstrap';
import {SecondaryBtn, WaringBtn} from '../../../components/Buttons/Buttons';
import {ItemCard} from '../../../components/cards/Cards'
export default function dishes() {
    return (
        <>
            <Row style={{marginTop: '10px'}}>
                <Col xs = {12} lg={8}>
                    <ItemCard className='d-flex justify-content-center align-items-center scroll' style={{height: '60vh', overflowY: 'scroll'}}>
                        <div style={{padding: '20px'}}>
                            <CardTitle tag="h5">Mesa 1</CardTitle>
                            <CardSubtitle tag="h5" className="mb-2 text-muted">Numero de platos : <b>4</b></CardSubtitle>
                            <CardText>
                                <ul className="list-group">
                                    <li className="list-group-item" style={{backgroundColor: '#fff0'}}>
                                        <div class="d-flex justify-content-between">
                                            
                                            <b>2</b> 
                                            <div>
                                                Almuerzo
                                            </div> 
                                        </div>
                                    </li>
                                    <li className="list-group-item" style={{backgroundColor: '#fff0'}}>
                                        <div class="d-flex justify-content-between">
                                            
                                            <b>2</b> 
                                            <div>
                                                Desayunos
                                            </div> 
                                        </div>
                                    </li>
                                </ul>
                            </CardText>
                            <CardText>Tiempo de espera: <b>00:05</b></CardText>
                            <SecondaryBtn style={{fontSize: '30px', width: '100%'}}>
                                Entregar 
                            </SecondaryBtn>
                        </div>

                        
                    </ItemCard>
                </Col>
                <Col xs = {12} lg={4}>
                    <ItemCard className="scroll"  style={{height: '60vh', overflow: 'hidden', overflowY: 'scroll'}} >
                        <div>
                            <h5>Numero de platos pedidos</h5>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item" style={{backgroundColor: '#fff0'}}>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        Almuerzo
                                    </div>
                                    <span class="badge bg-primary "><b style={{color: 'white'}}>2</b></span> 
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        Almuerzo
                                    </div>
                                    <div>
                                        <b>4</b>
                                    </div>  
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        Almuerzo
                                    </div>
                                    <div>
                                        <b>4</b>
                                    </div>  
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        Almuerzo
                                    </div>
                                    <div>
                                        <b>4</b>
                                    </div>  
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        Almuerzo
                                    </div>
                                    <div>
                                        <b>4</b>
                                    </div>  
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        Almuerzo
                                    </div>
                                    <div>
                                        <b>4</b>
                                    </div>  
                                </div>
                            </li>
                        </ul>
                        
                        
                    </ItemCard>
                </Col>
            </Row>
            <Row  style={{marginTop: '10px'}}>
                <h4>Menu</h4>
            </Row>
            <Row style={{marginTop: '10px'}}>
                <Col>
                    <ItemCard>
                        <CardTitle tag="h6">Almuerzo</CardTitle>
                        <CardText>
                            <ul className="list-group">
                                <li className="list-group-item" style={{backgroundColor: '#fff0'}}>
                                    Arroz con juegueteado
                                </li>
                                <li className="list-group-item" style={{backgroundColor: '#fff0'}}>
                                    sopa
                                </li>
                            </ul>
                        </CardText>
                        <WaringBtn>
                            Agotado   
                        </WaringBtn>
                    </ItemCard>
                </Col>
                <Col>
                    <ItemCard>
                        <CardTitle tag="h6">Almuerzo</CardTitle>
                        <CardText>
                            <ul className="list-group">
                                <li className="list-group-item" style={{backgroundColor: '#fff0'}}>
                                    Arroz con juegueteado
                                </li>
                                <li className="list-group-item" style={{backgroundColor: '#fff0'}}>
                                    sopa
                                </li>
                            </ul>
                        </CardText>
                    </ItemCard>
                </Col>
                <Col>
                    <ItemCard>
                        <CardTitle tag="h6">Almuerzo</CardTitle>
                        <CardText>
                            <ul className="list-group">
                                <li className="list-group-item" style={{backgroundColor: '#fff0'}}>
                                    Arroz con juegueteado
                                </li>
                                <li className="list-group-item" style={{backgroundColor: '#fff0'}}>
                                    sopa
                                </li>
                            </ul>
                        </CardText>
                    </ItemCard>
                </Col>
                
                
            </Row>
            
        </>
        
    )
}
