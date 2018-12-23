import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { Card, CardBody, CardGroup, FormGroup, Container, Label, Form, Col, Input, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Redirect } from 'react-router-dom';

class CreateCourse extends Component {
  constructor(props){
    super(props);

    this.state={
      name: '',
      teacher_id: '',
      section_id: '',
      subject_code: '',
      class_id: '',
      description: '',
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
                    <h1>Create Course/Subject</h1>
                    <FormGroup>
                      <Label htmlFor="subject">Subject Name</Label>
                      <Input type="text"  placeholder="Enter Subject Name" onChange={(event) => this.setState({name: event.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="subject">Teacher ID</Label>
                      <Input type="text"  placeholder="Enter Teacher ID" onChange={(event) => this.setState({teacher_id: event.target.value})}/>
                    </FormGroup>

                    <FormGroup row className="my-0">
                      <Col xs="6">
                        <FormGroup>
                          <Label >Section ID</Label>
                          <Input type="text" placeholder={"Enter Section ID"} onChange={(event) => this.setState({section_id: event.target.value})}/>
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="">Subject Code</Label>
                          <Input type="text" placeholder={"Enter Subject ID"} onChange={(event) => this.setState({subject_code: event.target.value})}/>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="">Class ID</Label>
                      <Input type="text" placeholder={"Enter Class ID"} onChange={(event) => this.setState({class_id: event.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="">Description</Label>
                      <Input type="textarea" placeholder={"Enter Description..."} onChange={(event) => this.setState({description: event.target.value})}/>
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
            Congratulation! You have created course successfully.
          </ModalBody>
          <ModalFooter>
            <Button color={"primary"} onClick={this.goback}>Back to Settings</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}


export default CreateCourse;
