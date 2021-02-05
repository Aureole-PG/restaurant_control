import React from 'react'
import {Col, Row, CardTitle,CardSubtitle,CardText} from 'reactstrap';
import {SecondaryBtn} from '../../../components/Buttons/Buttons';
import {ItemCard} from '../../../components/cards/Cards'
export default function dishes() {
    return (
        <ItemCard style={{height: '80vh', marginTop: '10px'}}>
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
    )
}
