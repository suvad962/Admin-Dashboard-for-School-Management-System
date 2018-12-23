import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { Card, CardBody, CardGroup, FormGroup, Container, Label, Form, Col, Input, Row, Button, Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import { Redirect } from 'react-router-dom';

class CreateSection extends Component {
  constructor(props){
    super(props);

    this.state={
      name: '',
      capacity: '',
      class_id: '',
      modal: false,
      visi: false,
    }
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
                    <h1>Create Section</h1>
                    <FormGroup>
                      <Label htmlFor="">Section Name</Label>
                      <Input type="text"  placeholder="Enter Section Name" onChange={(event) => this.setState({name: event.target.value})}/>
                    </FormGroup>

                    <FormGroup row className="my-0">
                      <Col xs="6">
                        <FormGroup>
                          <Label >Class ID</Label>
                          <Input type="text" placeholder={"Enter Class ID"} onChange={(event) => this.setState({class_id: event.target.value})}/>
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="">Capacity</Label>
                          <Input type="time" placeholder={"Enter Section Capacity"} onChange={(event) => this.setState({capacity: event.target.value})}/>
                        </FormGroup>
                      </Col>
                    </FormGroup>

                    <Row>
                        <Button color="primary" size={"lg"} block  onClick={(e) => this.onSubmit(e)}>Submit</Button>
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
            Congratulation! You have created section successfully.
          </ModalBody>
          <ModalFooter>
            <Button color={"primary"} onClick={this.goback}>Back to Settings</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}


export default CreateSection;
