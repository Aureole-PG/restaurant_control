import React,{useState} from 'react'
import {
    Container , Row, Col, Form, 
    FormGroup, Label, Input, UncontrolledAlert
} from 'reactstrap';
import {SimpleCard} from '../../components/cards/Cards';
import {PrimaryBtn, SecondaryBtn} from '../../components/Buttons/Buttons';
import {useHistory} from 'react-router-dom';
import  {useFormik} from 'formik';
import * as yup  from 'yup';
import Api from '../../utils/api';
export default function Singin() {
    const history = useHistory();
    const [loading, setLoading] =useState(false)
    const [error, setError]= useState(false)
    const back = () => history.goBack();
    const formik = useFormik({
        initialValues: InitialValues(),
        validationSchema: yup.object(validationSchema()),
        onSubmit: (form)=>{
            let data={
                nombre: form.nombre,
                correo: form.correo,
                password: form.password,
                rol: 'Cliente'
            }
            console.log(data)
            submit(data)
        }
    });
    const submit =(data)=>{
        setLoading(true)
        Api.post('api/usuario',data)
        .then(e=>{
            console.log(e.data)

        })
        .catch((e)=>{
            setError(true)
            console.log(e)
            setLoading(false)
        })
    }

    return (
        <Container >
            <Row style={{height:'100vh'}} className={'justify-content-center align-items-center'}>
                <Col xs={12} md={8} lg={6}>
                    <SimpleCard>
                        <h5>Registro</h5>
                        <UncontrolledAlert color="warning" isOpen={error} toggle={()=>setError(false)}>
                                Correo o Contraseña Incorrectos
                        </UncontrolledAlert>
                        <Form  onSubmit={formik.handleSubmit}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" invalid={formik.errors.correo?true:false} onChange={formik.handleChange} name="correo" id="exampleEmail" placeholder="Ingrese un correo" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Nombre</Label>
                                <Input type="text" invalid={formik.errors.nombre?true:false} onChange={formik.handleChange} name="nombre" id="name" placeholder="Ingrese un nombre" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" invalid={formik.errors.password?true:false} onChange={formik.handleChange} name="password" id="examplePassword" placeholder="Ingrese su contraseña" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Verificar Contraseña</Label>
                                <Input type="password" invalid={formik.errors.password2?true:false} onChange={formik.handleChange} name="password2" id="Password" placeholder="Ingrese su contraseña otra vex" />
                            </FormGroup>
                            <div className="d-flex justify-content-between align-items-center">
                                <PrimaryBtn  disabled={loading} type='submit' >Registrase</PrimaryBtn>
                                <SecondaryBtn disabled={loading} type='button' onClick={back} >Cancelar</SecondaryBtn>
                            </div>
                            
                        </Form>
                    </SimpleCard>
                </Col>
            </Row>
        </Container>
    )
}

function InitialValues(){
    return{
        correo: "",
        nombre:"",
        password: "",
        password2: ""
    }
}

function validationSchema (){
    return{
        correo: yup.string().email().required(true),
        nombre: yup.string().required(true),
        password: yup.string().required(true),
        password2: yup.string().oneOf([yup.ref('password')]).required(true)
    }
}