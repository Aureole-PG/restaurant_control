import React from "react";
import { Row, Col } from "reactstrap";
import { CenterText } from "../../client/tables/style";
import { useHistory } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { SiAirtable } from "react-icons/si";
const size = 40;
export default function GeneralStatus() {
  const history = useHistory();
  return (
    <>
      <Row>
        <Col className="dashboard-col">
          <CenterText>
            <h1>Menu de Administrador</h1>
          </CenterText>
        </Col>
      </Row>
      <Row>
        <Col md={4} xs={12} lg={4} className="dashboard-col">
          <button
            onClick={() => history.push("/dashboard/menu")}
            className="flat-card"
          >
            <CenterText>
              <MdRestaurantMenu size={size} />
              <h2>Menu</h2>
            </CenterText>
          </button>
        </Col>
        <Col md={4} xs={12} lg={4} className="dashboard-col">
          <button
            className="flat-card"
            onClick={() => history.push("/dashboard/users")}
          >
            <CenterText>
              <FiUsers size={size} />
              <h2>Usuarios</h2>
            </CenterText>
          </button>
        </Col>
        <Col md={4} xs={12} lg={4} className="dashboard-col">
          <button
            onClick={() => history.push("/dashboard/tables")}
            className="flat-card"
          >
            <CenterText>
              <SiAirtable size={size} />
              <h2>Mesas</h2>
            </CenterText>
          </button>
        </Col>
      </Row>
    </>
  );
}
