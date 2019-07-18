import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faCubes } from "@fortawesome/free-solid-svg-icons";
import { Table, Button, Row, Col, FormControl, Badge } from "react-bootstrap";
import api from "../../services/api";
import "./styles.css";
export default class Insumos extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const response = await api.get("/products.json");
    this.setState({ products: response.data.products });
    console.log(this.state);
  }

  render() {
    return (
      <div className="insumoStyle">
        <div className="headerStyle">
          <Row>
            <Col md="5" className="pstyle">
              <h3>Insumos</h3>
              <p>Busca Avançada</p>
            </Col>
            <Col md="2">
              <FormControl as="select" size="sm">
                <option>Fazenda 2</option>
                <option>Fazenda 1</option>
              </FormControl>
            </Col>
            <Col md="1">
              <FormControl as="select" size="sm">
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
              </FormControl>
            </Col>
            <Col md="4">
              <Button className="btnStyle" variant="success" size="sm">
                <FontAwesomeIcon icon={faPlus} /> Adicionar Vários
              </Button>
              <Button className="btnStyle" variant="success" size="sm">
                <FontAwesomeIcon icon={faPlus} /> Adicionar
              </Button>
              <Button className="btnStyle" variant="danger" size="sm">
                Inventário
              </Button>
              <Button variant="info" size="sm">
                Exportar
              </Button>
            </Col>
          </Row>
        </div>

        <Table striped hover id="tabela">
          <thead>
            <tr>
              <th>Estoque Físico na Fazenda</th>
              <th />
              <th>Insumo</th>
              <th>Custo Unitário Médio na Safra</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(prod => (
              <tr key={prod.name}>
                <td className="td1">
                  {prod.balance.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
                  {prod.unit}
                </td>
                <td>
                  <FontAwesomeIcon icon={faCubes} />
                </td>
                <td>
                  {prod.name}{" "}
                  <Badge className="sma1" pill variant="warning">
                    {prod.type}
                  </Badge>{" "}
                  <small className="sma2">{prod.formulation}</small>
                  <br />
                  <small className="sma3">{prod.manufactor}</small>
                </td>
                <td>
                  <Row>
                    <Col sm="1">USD</Col>
                    <Col sm="4">
                      {" "}
                      <FormControl
                        type="text"
                        defaultValue={prod.price
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                      />
                    </Col>
                    <Col sm="1">/{prod.unit}</Col>
                  </Row>
                </td>
                <td>
                  <Button size="sm" variant="outline-dark">
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
