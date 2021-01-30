import React,{useState,useEffect} from 'react'
import {ItemCard} from '../../../components/cards/Cards'
import {Row, Col} from 'reactstrap'
import {PrimaryBtn, SecondaryBtn} from '../../../components/Buttons/Buttons'
import {StikyContent, RowResponsive, MenuContent} from './styles'
const mock=[
    {
        
        id: "1242843294324",
        nombr: "Almuerzo",
        precio: 2,
        plato: [
            {
                id: "12312312312321",
                nombre: "seco de pollo",
                descripcion: "arroz jugueteado"
            },
            {
                id: "12312312312322",
                nombre: "Consome",
                descripcion: "sopa de pollo"
            },
            {
                id: "12312312312323",
                nombre: "postre de leche",
                descripcion: "cake de 3 leche"
            }
        
        ]
    },
    {
        
        id: "1242843294325",
        nombr: "Desayuno",
        precio: 2,
        plato: [
            {
                id: "12312312312325",
                nombre: "Jugo",
                descripcion: "jugo de narangilla"
            },
            {
                id: "12312312312326",
                nombre: "Bolon",
                descripcion: "Bolon de verde"
            },
            {
                id: "12312312312327",
                nombre: "Cafe",
                descripcion: "Cafe"
            },
            {
                id: "12312312312328",
                nombre: "postre de leche",
                descripcion: "cake de 3 leche"
            }
        ]
    }

]






export default function Dishes() {
    const [userSelected, setUserSelected] = useState([])
    const [updateList, setUpdateList] = useState(false)
    const [menu, setMenu] = useState(mock)

    const selectItem=(data)=>{
        let selected = userSelected
        const found = selected.find(element => element.id === data.id);
        if (found) {
            let new_data  = selected.filter(plato=>{
                if(plato.id===data.id){
                    plato['cantidad'] += 1
                    plato.precio = data.precio*plato.cantidad 
                }
                return plato
            })
            console.log(new_data)
            setUserSelected(new_data)
        }else{
            data['cantidad']=1
            selected.push(data)
            setUserSelected(selected)
        }
        
        console.log(selected)
        console.log("mock")
        console.log(menu)
        console.log("_________________")
        setUpdateList(true)    
    }

    useEffect(() => {
        setUpdateList(false)
    }, [updateList])

    return (
        <>
            <Row>
                <Col>
                    <h2 className="text-center">Elige Tus Platos</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={3} lg={4}>
                    <StikyContent>
                        
                            {!updateList?(
                                <RowResponsive >
                                {userSelected.map((plato)=>(
                                    <Col key = {plato.id} style={{marginBlock: '5px'}} xs={12}>
                                        <ItemCard  >
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h5>{plato.nombr}</h5>
                                                <h2>{plato.cantidad}</h2>
                                                <h3>$ {plato.precio}</h3>
                                            </div>
                                        </ItemCard>
                                    </Col>
                                ))
                                }
                                </RowResponsive>
                            ):null}
                            
                            
                            
                        
                        <Row>
                            <Col >
                                <div className="d-flex justify-content-center">
                                    <PrimaryBtn>
                                        <h4 style={{margin: 0}}>Ordenar</h4>
                                    </PrimaryBtn>    
                                </div>
                            </Col>
                        </Row>
                    </StikyContent>
                    
                </Col>
                <Col xs={12} sm={12} md={9} lg={8}>
                    <Row>
                        {menu.map((menu)=>(
                            <Col style={{marginBlock: '5px'}} key={menu.id} xs={12} sm={12} md={6} lg={4}>
                                <ItemCard  >
                                    <h5>{menu.nombr}</h5>
                                    
                                    
                                    <MenuContent>
                                        {menu.plato.map(plato=>(
                                            <div key={plato.id} >
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h6 className="mb-1">{plato.nombre}</h6>
                                                </div>
                                                <p className="mb-1">{plato.descripcion}</p>
                                            </div>
                                            
                                        ))}
                                    </MenuContent>
                                   
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <SecondaryBtn onClick={()=>selectItem(menu)}>Agregar</SecondaryBtn>
                                        <h4>$ {menu.precio}</h4>
                                    </div>
                                    
                                </ItemCard>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </>
    )
}
