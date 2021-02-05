import React from 'react';
import {Col, Row, CardTitle,CardSubtitle,CardText} from 'reactstrap';
import {ItemCard} from '../../../components/cards/Cards';
import {SecondaryBtn} from '../../../components/Buttons/Buttons';
export default function Tables() {
    return (
        <>
            <Row style={{marginTop: '15px'}}>
                <Col md={4} style={{height: '300px'}}>
                    <ItemCard>
                        <div style={{padding: '20px'}}>
                            <CardTitle tag="h5">Mesa 1</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Numero de platos : <b>4</b></CardSubtitle>
                            <CardText>
                                <li>Almuerzo 3</li>
                                <li>Desayuno 1</li>
                            </CardText>
                            <CardText>Tiempo de espera: <b>00:05</b></CardText>
                        </div>
                        <SecondaryBtn>
                            Entregar 
                        </SecondaryBtn>
                    </ItemCard>
                </Col>
            </Row>
        </>
    )
}
