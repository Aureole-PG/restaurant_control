import React, {useState, useEffect} from 'react';
import BtnCard from '../../../components/cards/BtnCard';
import {Row, Col} from 'reactstrap';
import {CenterText, H2}from './style';
import {useHistory} from 'react-router-dom';
import Api from '../../../utils/ClientApi';
import {getUserData} from '../../../utils/tokenFunctions';
import {useDispatch} from 'react-redux'
import {OrderActions} from '../../../redux/actions'
import Loading from '../../../components/animations/loading'
export default function Tables() {
    const router = useHistory();
    const [tables, setTables] = useState([]) ;
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    const userData= getUserData();
    const dispatch = useDispatch();
    const [reserved, setReserved] = useState(false)
    const getTable =(id, num)=>{
        setLoading(true)
        Api.put(`/api/mesa/${id}`,{estado: false})
        .then(e=>{
            Api.post('/api/reserva',{
                mesa: id,
                usuario: userData.id
            }).then(response=>{
                dispatch({type: OrderActions.GET_TABLE, payload: { num: num, reserve: response.data.id}})
                router.push('/dashboard/dishes')
            })
        }).catch(e=>{
            setLoading(false)
            setError(true)
        })
    }

    useEffect(() => {
        setLoading(true)
        Api.get('/api/mesa')
        .then(e=>{
            setTables(e.data.data)
            setError(false)
            Api.get(`/api/reserva/usuario/${userData.id}`)
            .then(response=>{
                let userReserves= response.data.data
                // uwu.length
                if (userReserves.length>0) {
                    let lastReserveState = userReserves[userReserves.length - 1]
                    if (lastReserveState.estado==="reserva" || lastReserveState.estado==="pedido") {
                        
                        setReserved(true)
                        dispatch({type: OrderActions.GET_TABLE, payload: { num: lastReserveState.mesa.numero, reserve: lastReserveState._id}})
                    }
                }
                setLoading(false)
            })
        })
        .catch((e)=>{
            setError(true)
        })
    }, [error])
    if (reserved) {
        return(
            <Row>
                <Col style={{height: 300}} >
                    <BtnCard onClick={()=> router.push('/dashboard/dishes')}>
                        <CenterText>
                            <H2> ya tienes reservado una Mesa</H2>
                            <H2>Continuar</H2>
                        </CenterText>
                    </BtnCard>
                </Col>
            </Row>
            
        )
    }
    if (loading) {
        return(
           <Loading/>
        )
    }
    else{
        return (
            <>
                <Row style={{paddingBlock: '20px'}}>
                    <Col>
                        <h1>Elige un lugar para empezar... </h1>
                    </Col>
                </Row>
                <Row>
                    {tables.map(table=>(
                        <Col key={table._id}  md={6} xs={12} lg={4} style={{height: '300px', marginBottom: 15}}>
                            <BtnCard disabled={!table.estado} onClick={()=>getTable(table._id, table.numero)}>
                                <CenterText>
                                    {table.estado?(
                                        <H2>Mesa {table.numero}</H2>
                                    ):(
                                        <>
                                            <H2>Mesa {table.numero}</H2>
                                            <H2>ocupado</H2>
                                        </>
                                    )}
                                    
                                </CenterText>
                            </BtnCard>
                        </Col>
                    ))}
                </Row>
            </>
        )
    }
    
}
