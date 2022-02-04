import React from "react";
import { Col, Row } from "reactstrap";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
const iconSize = 30;
const Footer = () => {
  return (
    <div className="footer-container">
      <Row>
        <Col>
          <h3 className="text-center">Ciudad</h3>
          <p className="text-center no-margin">Direccion</p>
          <p className="text-center ">contacto</p>
        </Col>
        <Col>
          <h3 className="text-center">Ciudad</h3>
          <p className="text-center no-margin">Direccion</p>
          <p className="text-center ">contacto</p>
        </Col>
        <Col>
          <h3 className="text-center">Ciudad</h3>
          <p className="text-center no-margin">Direccion</p>
          <p className="text-center ">contacto</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex justify-content-center aling-items-center">
            <BsFacebook
              size={iconSize}
              style={{ margin: 10, cursor: "pointer" }}
            />
            <BsInstagram
              size={iconSize}
              style={{ margin: 10, cursor: "pointer" }}
            />
            <BsWhatsapp
              size={iconSize}
              style={{ margin: 10, cursor: "pointer" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
