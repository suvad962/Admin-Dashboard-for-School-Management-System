import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { Card, CardBody, CardGroup, FormGroup, Container, Label, Form, Col, Input, Row, Button,Modal, ModalHeader,ModalFooter,ModalBody} from 'reactstrap';
import { Redirect } from 'react-router-dom';

class CreatePeriod extends Component {
  constructor(props){
    super(props);

    this.state={
      name: '',
      start_time: '',
      end_time: '',
      subject_id: '',
      date: '',
      description: '',
      comments: '',
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
                    <h1>Create Period</h1>
                    <FormGroup>
                      <Label htmlFor="subject">Period Name</Label>
                      <Input type="text"  placeholder="Enter Period Name" onChange={(event) => this.setState({name: event.target.value})}/>
                    </FormGroup>

                    <FormGroup row className="my-0">
                      <Col xs="6">
                        <FormGroup>
                          <Label >Period start Time</Label>
                          <Input type="time" placeholder={"Enter Start time"} onChange={(event) => this.setState({start_time: event.target.value})}/>
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="">Period End Time</Label>
                          <Input type="time" placeholder={"Enter End Time"} onChange={(event) => this.setState({end_time: event.target.value})}/>
                        </FormGroup>
                      </Col>
                    </FormGroup>

                    <FormGroup row className="my-0">
                      <Col xs="6">
                        <FormGroup>
                          <Label >Subject ID</Label>
                          <Input type="text" placeholder={"Enter Subject ID"} onChange={(event) => this.setState({subject_id: event.target.value})}/>
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="">Date</Label>
                          <Input type="date" placeholder={"Enter Date"} onChange={(event) => this.setState({date: event.target.value})}/>
                        </FormGroup>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="">Description</Label>
                      <Input type="textarea"  placeholder="Enter Description Here..." onChange={(event) => this.setState({description: event.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="">Comments</Label>
                      <Input type="textarea" placeholder="Any Comments?" onChange={(event) => this.setState({comments: event.target.value})}/>
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
            Congratulation! You have created period successfully.
          </ModalBody>
          <ModalFooter>
            <Button color={"primary"} onClick={this.goback}>Back to Settings</Button>
          </ModalFooter>
        </Modal>

      </Container>
    );
  }
}


export default CreatePeriod;
