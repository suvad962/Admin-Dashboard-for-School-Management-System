import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Dropdown, DropdownItem, DropdownMenu, DropdownToggle,Alert, Modal,ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Redirect} from 'react-router-dom';

class AddAdmin extends Component {
  constructor(props) {
    super(props);

    this.state={
      visi: false,
      modal: false
    }
  }

  backtodashboard=()=>{
    this.setState({
      visi: true
    });
  };

  toggle=()=> {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    if (this.state.visi === true){return <switch><Redirect to="/dashboard"/></switch>}
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Add Admin</h1>
                    <p className="text-muted">Include your new admin</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Name" autoComplete="Name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-badge"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Designation" autoComplete="Designation" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-people"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" id="seclet">
                        <option>--Select Role--</option>
                        <option>Super Admin</option>
                        <option>Supervisor</option>
                        <option>School Admin</option>
                      </Input>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Institute/District/Upazilla/Zone" autoComplete="Institution" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Mobile Number" autoComplete="Mobile" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" />
                    </InputGroup>

                    <Button color="success" block onClick={this.toggle}>Create Account</Button>
                  </Form>
                </CardBody>


              </Card>
            </Col>
          </Row>
        </Container>


        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Confirm Add Admin</ModalHeader>
          <ModalBody>
            Thank you for your request. We will confirm you soon by this
            mobile message and email address.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.backtodashboard}>Back to Dashboard</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddAdmin;

