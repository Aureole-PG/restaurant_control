import React, { useState, useEffect } from "react";
import { ItemCard } from "../../../components/cards/Cards";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  UncontrolledAlert,
} from "reactstrap";
import {
  SecondaryBtn,
  PrimaryBtn,
  WaringBtn,
} from "../../../components/Buttons/Buttons";
import { formInitData, AddItems, createMenu, editMenu } from "./api_request";
import * as yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import Api from "../../../utils/ClientApi";
import Loading from "../../../components/animations/loading";
import DishesForm from "./dihesForm";
export default function AddMenuForm() {
  const [modal, setModal] = useState(false);
  const [platos, setPlatos] = useState([]);
  const history = useHistory();
  const [loading, setLoadig] = useState(true);
  const [loadingDishes, setLoadigDishes] = useState(true);
  const [error, setError] = useState(false);
  const [newDish, setNewDish] = useState(false);
  const [dish, setDish] = useState({});
  const [menuDishes, setMenuDishes] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditDishes, setIsEditDishes] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [initialValues, setinitialValues] = useState({
    nombre: "",
    precio: 0,
  });
  const menuFormik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object(menuSchema()),
    enableReinitialize: true,
    onSubmit: (form) => {
      if (isEdit) {
        editMenu(form, menuDishes, history.location.state.id).then(() => {
          setLoadig(true);
        });
      } else {
        createMenu(form, menuDishes)
          .then((e) => {
            history.replace("/dashboard/menu");
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  });

  const editdish = (plato) => {
    setDish(plato);
    setIsEditDishes(true);
    toggle();
  };
  const toggle = () => setModal(!modal);
  const addDishesToMenu = (data) => {
    setMenuDishes(AddItems(menuDishes, data));
  };
  const deleteItem = (id) => {
    let item = menuDishes.filter((plato) => plato._id !== id);
    setMenuDishes(item);
  };
  useEffect(() => {
    if (history.location.state) {
      setIsEdit(true);
      setReadOnly(true);
      Api.get(`/api/menu/${history.location.state.id}`)
        .then((data) => {
          const { platos, nombre, precio } = data.data.data;
          setinitialValues({ nombre: nombre, precio: precio });
          setMenuDishes(platos);
          setLoadig(false);
        })
        .catch(() => setError(true));
    } else {
      setLoadig(false);
    }
  }, [loading]);
  useEffect(() => {
    formInitData()
      .then((e) => {
        setPlatos(e.platos);
        setNewDish(false);
        setLoadigDishes(false);
      })
      .catch(() => {
        setError(true);
        setLoadigDishes(false);
        setNewDish(false);
      });
  }, [newDish]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ItemCard style={{ marginTop: "15px" }}>
        {isEdit ? (
          <Row>
            <Col>
              <div className="d-flex justify-content-end">
                <SecondaryBtn onClick={() => setReadOnly(false)}>
                  Editar
                </SecondaryBtn>
              </div>
            </Col>
          </Row>
        ) : null}
        <UncontrolledAlert
          color="warning"
          isOpen={error}
          toggle={() => setError(false)}
        >
          Ocurrio un error intentalo nuevamente
        </UncontrolledAlert>
        <Form onSubmit={menuFormik.handleSubmit}>
          <fieldset disabled={readOnly}>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="nombre">Nombre del menu</Label>
                  <Input
                    type="text"
                    invalid={menuFormik.errors.nombre ? true : false}
                    onChange={menuFormik.handleChange}
                    value={menuFormik.values.nombre}
                    name="nombre"
                    id="nombre"
                    placeholder="Ej: Desayuno, Almuerzo, etc."
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="precio">Precio</Label>
                  <Input
                    type="number"
                    step=".01"
                    invalid={menuFormik.errors.precio ? true : false}
                    onChange={menuFormik.handleChange}
                    value={menuFormik.values.precio}
                    name="precio"
                    id="precio"
                    placeholder="Precio"
                  />
                </FormGroup>
              </Col>
            </Row>
          </fieldset>
          <Row>
            <Col>
              <ListGroup>
                {menuDishes.map((dish) => (
                  <ListGroupItem
                    key={dish._id}
                    style={{ backgroundColor: "#fff0" }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <ListGroupItemHeading>
                          {dish.nombre}
                        </ListGroupItemHeading>
                        <ListGroupItemText>
                          {dish.descripcion}
                        </ListGroupItemText>
                      </div>
                      {!readOnly && (
                        <WaringBtn
                          type="button"
                          onClick={() => deleteItem(dish._id)}
                        >
                          Quitar
                        </WaringBtn>
                      )}
                    </div>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <Row style={{ marginBlock: "15px" }}>
            <Col>
              {!isEdit && (
                <PrimaryBtn
                  type="submit"
                  disabled={menuDishes.length > 0 && !loading ? false : true}
                >
                  Crear
                </PrimaryBtn>
              )}
              {!readOnly & isEdit ? (
                <PrimaryBtn
                  type="submit"
                  disabled={menuDishes.length > 0 && !loading ? false : true}
                >
                  Editar
                </PrimaryBtn>
              ) : null}
            </Col>
          </Row>
        </Form>
      </ItemCard>
      {!readOnly && (
        <>
          <Row>
            <Col xs={12} style={{ marginBlock: "10px" }}>
              <SecondaryBtn
                type="button"
                onClick={() => {
                  toggle();
                  setIsEditDishes(false);
                }}
              >
                Crear nuevo plato
              </SecondaryBtn>{" "}
              <DishesForm
                modal={modal}
                data={dish}
                setModal={setModal}
                toggle={toggle}
                setNewDish={setNewDish}
                setLoadig={setLoadigDishes}
                loading={loadingDishes}
                isedit={isEditDishes}
              />
            </Col>
          </Row>
          <Row>
            {loading ? (
              <div>cargando</div>
            ) : (
              platos.map((plato) => (
                <Col
                  key={plato._id}
                  xs={6}
                  md={6}
                  lg={4}
                  style={{ marginBlock: 10 }}
                >
                  <ItemCard>
                    <h6>{plato.nombre}</h6>
                    <p>{plato.descripcion ?? "-"}</p>
                    <PrimaryBtn
                      type="button"
                      onClick={() => addDishesToMenu(plato)}
                    >
                      Agregar
                    </PrimaryBtn>{" "}
                    <SecondaryBtn type="button" onClick={() => editdish(plato)}>
                      Editar
                    </SecondaryBtn>
                  </ItemCard>
                </Col>
              ))
            )}
          </Row>
        </>
      )}
    </>
  );
}

function menuSchema() {
  return {
    nombre: yup.string().required(true),
    precio: yup.number().required(true),
  };
}
