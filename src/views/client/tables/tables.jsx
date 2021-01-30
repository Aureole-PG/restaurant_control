import React from 'react'
// import imgTable from '../../../images/table.svg';
import BtnCard from '../../../components/cards/BtnCard'
import {Row, Col} from 'reactstrap'
import {CenterText, H2}from './style'
import {useHistory} from 'react-router-dom'
export default function Tables() {
    const router = useHistory()

    const getTable =()=>{
        console.log(router)
        router.push('/dashboard/dishes')
        
    }
    return (
        <>
            <Row style={{paddingBlock: '20px'}}>
                <Col>
                    <h1>Elige un lugar para empezar... </h1>
                </Col>
            </Row>
            <Row>
                <Col md={4} style={{height: '300px'}}>
                    <BtnCard onClick={()=>getTable()}>
                        <CenterText>
                            <H2>Mesa 1</H2>
                        </CenterText>
                        {/* <TableImg src={imgTable} alt="table"/> */}
                    </BtnCard>

                </Col>
                <Col md={4} style={{height: '300px'}}>
                    <BtnCard disabled={true} onClick={()=>console.log("asdsads")}>
                        <CenterText>
                            <H2>ocupado</H2>
                        </CenterText>
                        {/* <TableImg src={imgTable} alt="table"/> */}
                    </BtnCard>

                </Col>
            </Row>
        </>
    )
}
