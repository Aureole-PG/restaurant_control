import React from 'react'
import {
    Card, Table, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {SecondaryBtn, WaringBtn, PrimaryBtn} from '../../../components/Buttons/Buttons'

export default function AddMenu() {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Menu</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <PrimaryBtn>
                        Agregar nuevo 
                    </PrimaryBtn>
                </CardBody>
                <CardBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Número de platos</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>
                                    <SecondaryBtn>
                                        Editar platos
                                    </SecondaryBtn>
                                    -
                                    <WaringBtn>
                                        Eliminar Menu
                                    </WaringBtn>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
            
        </div>
    )
}
