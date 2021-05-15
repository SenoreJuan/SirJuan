/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Toast,
  ToastBody,
  ToastHeader,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';
const state = {
  message: { usename: '', email: '', body: '' },
  alert: 'hi'
}
function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    /* Swal.fire({

      icon: 'error',
      title: 'Correo electrónico no configurado',
      showConfirmButton: false,
      timer: 2000

    }) */
    
    emailjs.send("service_k6h6tns","template_0l1it3y", {
      from_name: `${state.message.usename} (${state.message.email})`,
      to_name: "Sir Juan",
      message: state.message.body,
    }, "user_ilAsCgY8HTSiIFLkBF2KA").then(result => {
      Swal.fire({

        icon: 'success',
        title: 'Mensaje enviado con éxito',
        showConfirmButton: false,
        timer: 2000

      })
    },
      error => {
        console.log(error);
        Swal.fire({

          icon: 'error',
          title: 'erroe ' + error.message,
          showConfirmButton: false,
          timer: 2000

        })
      })
  }
  return (
    <>
      {/*       <ExamplesNavbar /> */}
      <LandingPageHeader />
      <div className="main">
        <div className="section section-dark text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Sobre El Señor Juan</h2>
                <h5 className="description">
                  Yo Soy Sir Juan! Yo So La Fuerza! Yo Soy El Poder!
                  Soy El Gerrero del tiempo! Los elementos me preceden en la batalla!
                  Soy La Fuerza del bosque! Mi Energía todo lo reverdece!
                  Soy El Poder Sobre la roca! Soy La Fuerza que da vida al bosque! Soy El DIOS de mis esclavos!
                  Trae tu lengua hasta Mis Pies, esclavo!


                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  ver más
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/domination.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Dominación</CardTitle>

                      </div>
                    </a>

                  </CardBody></Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/trample.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Pisoteando</CardTitle>

                      </div>
                    </a>

                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/feet.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">pies lamiendo</CardTitle>

                      </div>
                    </a>

                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Contáctame</h2>
                <Form className="contact-form" onSubmit={(e) => onSubmit(e)}>
                  <Row>
                    <Col md="6">
                      <label>Nombre</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Nombre" type="text" required onChange={(e) => { state.message.usename = e.target.value }} />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email" required onChange={(e) => { state.message.email = e.target.value }} />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Mensaje</label>
                  <Input
                    placeholder="Escribe tu mensaje aquí ..."
                    onChange={(e) => { state.message.body = e.target.value }}
                    type="textarea"
                    required
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg" type="submit" >
                        Enviar mensaje
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
