import React from 'react';
import {Col, Row, CardTitle,CardSubtitle,CardText} from 'reactstrap';
import {ItemCard} from '../../../components/cards/Cards';
import {SecondaryBtn} from '../../../components/Buttons/Buttons';
export default function Charge() {
    return (
        <Row style={{marginTop: '15px'}}>
                <Col md={4} style={{height: '300px'}}>
                    <ItemCard>
                        <div style={{padding: '20px'}}>
                            <CardTitle tag="h5">Mesa 1</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Numero de platos : <b>4</b></CardSubtitle>
                            <CardText>
                                <li>Almuerzo 3 <b>$3.00</b></li>
                                <li>Desayuno 1 <b>$1.00</b></li>
                            </CardText>
                            <CardText>Total <b>$4.00</b></CardText>
                        </div>
                        <SecondaryBtn>
                            Cobrar 
                        </SecondaryBtn>
                    </ItemCard>
                </Col>
            </Row>
    )
}
