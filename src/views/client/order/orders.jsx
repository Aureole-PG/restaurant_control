import React,{useState, useEffect} from 'react';
import {Row, Col} from 'reactstrap';
import {useSelector} from 'react-redux';
import {SecondaryBtn} from '../../../components/Buttons/Buttons';
import {ItemCard} from '../../../components/cards/Cards';
import {MenuContent} from '../dishes/styles';
import Api from '../../../utils/ClientApi';
import {useHistory} from 'react-router-dom';
export default function Orders() {
    const [pedido, setPedido] = useState([]);
    const selector = useSelector(state=> state.orderReducer);
    const history = useHistory();
    const [allData, setAllData]= useState({});

    const goTooBack =()=>history.push('/dashboard')
    useEffect(() => {
        Api.get(`/api/pedido/reserva/${selector.reserve}`).then(e=>{
            let order= e.data.data
            if (order.length>0) {
                setPedido(order[order.length-1].pedidos)
                setAllData(order[order.length-1])
            }
        })
        .catch(()=>{
            goTooBack()
        })
    }, [])


    return (
        <>
            <Row>
                <Col>
                    <h3 className="text-center">Tu orden esta en Proseso</h3>
                    <small className="text-center">Te notificaremos cuando tu orden este lista!</small>
                </Col>

            </Row>
            <Row>
                <Col>
                    <h3 className="text-center">Tu Orden </h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={9} lg={8}>
                    <Row>
                        {pedido.map((data)=>(
                            <Col style={{marginBlock: '5px'}} key={data._id} xs={12} sm={12} md={6} lg={4}>
                                <ItemCard>
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <h5>{data.cantidad} {data.menu.nombre}</h5>
                                        <small>${data.menu.precio} c/u</small>
                                    </div>
                                    <MenuContent className={'scroll'}>
                                        {data.menu.platos.map(plato=>(
                                            <div key={plato._id} >
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h6 className="mb-1">{plato.nombre}</h6>

                                                </div>
                                                <p className="mb-1">{plato.descripcion??''}</p>
                                            </div>
                                            
                                        ))}
                                    </MenuContent>
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        
                                        <h4>$ {data.menu.precio*data.cantidad}</h4>
                                    </div>
                                </ItemCard>
                            </Col>
                        ))}
                        {pedido.length>0?(
                            <Col style={{marginBlock: '5px'}}  xs={12} sm={12} md={6} lg={4}>
                                <ItemCard>
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <h4>Total</h4>
                                    </div>
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        
                                        <h3>$ {allData.total} </h3>
                                    </div>
                                </ItemCard>
                            </Col>
                        ):(
                            <ItemCard>
                                <div className="d-flex w-100 justify-content-between align-items-center">
                                    <h4>Todavia no tienes un pedido</h4>
                                </div>
                                <div className="d-flex w-100 justify-content-between align-items-center">
                                    
                                <SecondaryBtn onClick={()=>history.goBack()}>
                                    Continuar
                                </SecondaryBtn>
                                </div>
                            </ItemCard>
                        )}   
                    </Row>
                </Col>
            </Row>
        </>
        
    )
}
