import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { Card, CardBody, CardGroup, FormGroup, Container, Label, Form, Col, Input, Row, Button, Modal, ModalHeader, ModalBody,ModalFooter} from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Shift extends Component {
  constructor(props){
    super(props);

    this.state={
      institute_id: '',
      name: '',
      time_start: '',
      time_end: '',
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
                    <h1>Create Shift</h1>
                    <FormGroup>
                      <Label htmlFor="subject">Institution ID</Label>
                      <Input type="text"  placeholder="Enter Institution ID" onChange={(event) => this.setState({institute_id: event.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="subject">Shift Name</Label>
                      <Input type="text"  placeholder="Enter Shift name" onChange={(event) => this.setState({name: event.target.value})}/>
                    </FormGroup>

                    <FormGroup row className="my-0">
                      <Col xs="6">
                        <FormGroup>
                          <Label >Period start Time</Label>
                          <Input type="time" placeholder={"Enter Start time"} onChange={(event) => this.setState({time_start: event.target.value})}/>
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="">Period End Time</Label>
                          <Input type="time" placeholder={"Enter End Time"} onChange={(event) => this.setState({time_end: event.target.value})}/>
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
            Congratulation! Shift has been added successfully.
          </ModalBody>
          <ModalFooter>
            <Button color={"primary"} onClick={this.goback}>Back to Settings</Button>
          </ModalFooter>
        </Modal>

      </Container>
    );
  }
}


export default Shift;
