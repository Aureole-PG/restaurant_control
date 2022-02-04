import React, { useState, useEffect } from "react";
import { Collapse, Row, Col } from "reactstrap";
import { ItemCard } from "../../components/cards/Cards";
import Api from "../../utils/api";
import background from "../../images/comida1.jpg";
import Schedule from "./Schedule";
import Footer from "../../components/layout/footer/footer";
import noimg from "../../images/no-img.png";
import { SecondaryBtn } from "../../components/Buttons/Buttons";
import { MdRestaurantMenu } from "react-icons/md";
import { useHistory } from "react-router-dom";
const Public_home = () => {
  const [menu, setMenu] = useState([]);
  const history = useHistory();
  useEffect(() => {
    Api.get("/api/menu").then((e) => {
      setMenu(e.data.data);
    });
  }, []);
  return (
    <div className="">
      <SecondaryBtn
        className="button-to-login"
        onClick={() => history.push("/login")}
      >
        <div className="d-flex justify-content-center align-items-center">
          <MdRestaurantMenu size={30} style={{ marginRight: 10 }} />
          <p className="no-margin fw-bold"> Ordenar Plato</p>
        </div>
      </SecondaryBtn>
      <Row>
        <Col>
          <div className="custom-nav-container">
            <div
              className="bg-image"
              style={{ backgroundImage: `url(${background})` }}
            />
            <div className="absolute-center-container glassform">
              <h1>RESTAURANTE</h1>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="d-flex justify-content-center ">
            <div>
              <p className="no-margin">Conoce nuestros </p>
              <h4 className="text-center">Platos</h4>
            </div>
          </div>
        </Col>
      </Row>
      <div className="container">
        {menu.map((e) => (
          <ColapseDish
            key={e._id}
            nombre={e.nombre}
            precio={e.precio}
            platos={e.platos}
          />
        ))}
      </div>
      <Schedule />
      <Footer />
    </div>
  );
};

const ColapseDish = ({ nombre = "", precio = "", platos = [] }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Row style={{ margin: "10px 0 10px 0" }}>
      <Col>
        <button
          onClick={() => setToggle(!toggle)}
          className={`glassform-button menu-button ${
            toggle ? "menu-button-active" : ""
          }`}
        >
          <div className="d-flex justify-content-between">
            <p className="text-capitalize no-margin">{nombre}</p>
            <p className="no-margin">{precio}$</p>
          </div>
        </button>
        <Collapse isOpen={toggle}>
          <ItemCard>
            <Row>
              {platos.map((e) => (
                <Col
                  key={e._id}
                  sm={12}
                  md={6}
                  className="img-container"
                  style={{ marginBlock: 10 }}
                >
                  <Row>
                    <Col xs={4}>
                      <img
                        src={
                          e.imagen
                            ? process.env.REACT_APP_HOST_URL + e.imagen
                            : noimg
                        }
                        className="img-dish"
                        alt=""
                      />
                    </Col>
                    <Col xs={8}>
                      <p className="no-margin title-dish">{e.nombre}</p>
                      <p className="dish-description ">{e.descripcion}</p>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </ItemCard>
        </Collapse>
      </Col>
    </Row>
  );
};

export default Public_home;
