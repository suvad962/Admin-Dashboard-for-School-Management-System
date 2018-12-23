import React, { Component } from 'react';
import { Card, CardBody, CardGroup, FormGroup, Container, Label, Form, Col, Input, Row, Button, Modal, ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import { Redirect } from 'react-router-dom';


class CreateClass extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      class_id: '',
      class_name: '',
      shift_id: '',
      section_id: '',
      capacity: '',
      modal: false,
      visi: false,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  onSubmit(e){
    e.preventDefault();
    this.setState({
      modal: true
    });
    console.log(this.state);
  }

  goback=()=>{
    this.setState({
      visi: true
    })
  };

  render() {
    if(this.state.visi === true){return <switch><Redirect to={"/institution/institutionsettings"}/></switch>}
    return (
      <Container>
        <Row>
          <Col xs="12" md="2">
          </Col>
          <Col md="8">
            <CardGroup>
              <Card className="p-5">
                <CardBody>
                  <Form>
                    <h1>Create Class</h1>
                    <FormGroup>
                      <Label htmlFor="subject">Class Name</Label>
                      <Input type="text"  placeholder="Enter class name" onChange={(event) => this.setState({class_name: event.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="Teacher Name">Shift ID</Label>
                      <Input type="text"  placeholder="Enter Shift ID" onChange={(event) => this.setState({shift_id: event.target.value})}/>
                    </FormGroup>
                    <FormGroup row className="my-0">
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="Teacher Name">Section ID</Label>
                          <Input type="text" placeholder={"Enter Section ID"} onChange={(event) => this.setState({section_id: event.target.value})}/>
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="">Capacity</Label>
                          <Input type="text" placeholder={"Enter Capacity"} onChange={(event) => this.setState({capacity: event.target.value})}/>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4" onClick={(e) => this.onSubmit(e)}>Submit</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
          <Col xs="12" md="2">
          </Col>
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.onSubmit}>
          <ModalHeader toggle={this.onSubmit}>Confirmation</ModalHeader>
          <ModalBody>
            Congratulation! You have added class successfully.
          </ModalBody>
          <ModalFooter>
            <Button color={"primary"} onClick={this.goback}>Back to Settings</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default CreateClass;
