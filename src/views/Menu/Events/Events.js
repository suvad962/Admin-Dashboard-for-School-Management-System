import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardGroup,
  FormGroup,
  Container,
  Label,
  Form,
  Col,
  Input,
  Row,
  Button,
} from 'reactstrap';

class Events extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      event:'',
      description:'',
      date:'',
      time:'',
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
    console.log(this.state);
  }


  render() {
    return (
      <Container>
        <Row>
          <Col md="8">
            <CardGroup>
              <Card className="p-5">
                <CardBody>
                  <Form>
                    <h1>Create Event</h1>
                    <FormGroup>
                      <Label htmlFor="event">Event Name</Label>
                      <Input type="text" id="event" placeholder="Enter Event name" onChange={(event) => this.setState({event: event.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="eventD">Event Description</Label>
                      <Input type="textarea" id="eventD" placeholder="Event Description" onChange={(event) => this.setState({description: event.target.value})}/>
                    </FormGroup>
                    <FormGroup row className="my-0">
                      <Col xs="8">
                        <FormGroup>
                          <Label htmlFor="date">Date</Label>
                          <Input type="date" id="date" placeholder="Event Date" onChange={(event) => this.setState({date: event.target.value})}/>
                        </FormGroup>
                      </Col>
                      <Col xs="4">
                        <FormGroup>
                          <Label htmlFor="time">Time</Label>
                          <Input type="time" id="time" placeholder="" onChange={(event) => this.setState({time: event.target.value})}/>
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
        </Row>
      </Container>
    );
  }
}
export default Events;
