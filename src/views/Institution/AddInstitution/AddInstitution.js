import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
  Table,
  Collapse
} from 'reactstrap';
import { Redirect } from 'react-router-dom';


class AddInstitution extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      name: '',
      short_name: '',
      code_school: '',
      code_college: '',
      code_eiin: '',
      village: '',
      house_no: '',
      road_no: '',
      sector: '',
      postoffice: '',
      post_code: '',
      upazilla: '',
      district: '',
      lat: '',
      lng: '',
      logo: '',
      total_student: '',
      type: '',
      estd: '',
      email: '',
      phone_no: '',
      mobile_no: '',



      accordion: [false, false, false, false],
      custom: [true, false],
      status: 'Closed',

      redirect: false

    };
  }

  onSubmit(e){
    e.preventDefault()
    console.log(this.state);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  viewdetail=()=>{
    this.setState({
      redirect: true
    })
  }

  render() {
    if(this.state.redirect === true){return <switch><Redirect to={"/profiledetail"}/></switch>}

    return (
      <div className="animated fadeIn py-3 ml-5">
        <Row>
          <Col xs="12" sm="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Add New Institution</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/AddAdmin.js" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted"></small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>

                <FormGroup>
                  <Input type="text" id="institution" placeholder="Institution name" onChange={(event) => this.setState({name: event.target.value})} />
                </FormGroup>

                <FormGroup row className={"my-0"}>
                  <Col xs={"8"}>
                    <FormGroup>
                      <Input type="text" id="short_name" placeholder="Institution Short name" onChange={(event) => this.setState({short_name: event.target.value})} />
                    </FormGroup>
                  </Col>

                  <Col xs={"4"}>
                    <FormGroup>
                      <Input type="text" id="code_eiin" placeholder="EIIN Code" onChange={(event) => this.setState({code_eiin: event.target.value})} />
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup row className={"my-0"}>
                  <Col xs={"6"}>
                    <FormGroup>
                      <Input type="text" id="code_school" placeholder="School Code" onChange={(event) => this.setState({code_school: event.target.value})} />
                    </FormGroup>
                  </Col>

                  <Col xs={"6"}>
                    <FormGroup>
                      <Input type="text" id="code_college" placeholder="College Code" onChange={(event) => this.setState({code_college: event.target.value})} />
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup row className={"my-0"}>
                  <Col xs={"6"}>
                    <FormGroup>
                      <Input type="text" id="house_no" placeholder="House Number" onChange={(event) => this.setState({house_no: event.target.value})} />
                    </FormGroup>
                  </Col>

                  <Col xs={"6"}>
                    <FormGroup>
                      <Input type="text" id="sector" placeholder="Sector" onChange={(event) => this.setState({sector: event.target.value})} />
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup row className={"my-0"}>
                  <Col xs={"4"}>
                    <FormGroup>
                      <Input type="text" id="road_no" placeholder="Road No." onChange={(event) => this.setState({road_no: event.target.value})} />
                    </FormGroup>
                  </Col>

                  <Col xs={"8"}>
                    <FormGroup>
                      <Input type="text" id="village" placeholder="Village" onChange={(event) => this.setState({village: event.target.value})} />
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup row className={"my-0"}>
                  <Col xs={"8"}>
                    <FormGroup>
                      <Input type="text" id="postOffice" placeholder="Post office" onChange={(event) => this.setState({postOffice: event.target.value})} />
                    </FormGroup>
                  </Col>

                  <Col xs={"4"}>
                    <FormGroup>
                      <Input type="text" id="post_code" placeholder="Post Code" onChange={(event) => this.setState({post_code: event.target.value})} />
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup row className={"my-0"}>
                  <Col xs={"6"}>
                    <FormGroup>
                      <Input type="text" id="upazilla" placeholder="Upazilla" onChange={(event) => this.setState({upazilla: event.target.value})} />
                    </FormGroup>
                  </Col>

                  <Col xs={"6"}>
                    <FormGroup>
                      <Input type="text" id="district" placeholder="District" onChange={(event) => this.setState({district: event.target.value})} />
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup row className={"my-0"}>
                  <Col xs={"6"}>
                    <FormGroup>
                      <Input type="text" id="lat" placeholder="Latitude" onChange={(event) => this.setState({lat: event.target.value})} />
                    </FormGroup>
                  </Col>

                  <Col xs={"6"}>
                    <FormGroup>
                      <Input type="text" id="lng" placeholder="Longitude" onChange={(event) => this.setState({lng: event.target.value})} />
                    </FormGroup>
                  </Col>
                </FormGroup>



                <FormGroup>
                  <Input type="text" id="total_student" placeholder="Total Student" onChange={(event) => this.setState({total_student: event.target.value})} />
                </FormGroup>

                <FormGroup row className={"my-0"}>
                  <Col xs={"8"}>
                    <FormGroup>
                      <Input type="select" id="type" placeholder="Type" onChange={(event) => this.setState({type: event.target.value})}>
                        <option>--Type--</option>
                        <option>Government</option>
                        <option>Half-Government</option>
                        <option>Non-Government</option>
                      </Input>
                    </FormGroup>
                  </Col>

                  <Col xs={"4"}>
                    <FormGroup>
                      <Input type="text" id="estd" placeholder="ESTD" onChange={(event) => this.setState({estd: event.target.value})} />
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Input type="text" id="email" placeholder="Email Address" onChange={(event) => this.setState({email: event.target.value})} />
                </FormGroup>

                <FormGroup>
                  <Input type="text" id="phone_no" placeholder="Phone Number" onChange={(event) => this.setState({phone_no: event.target.value})} />
                </FormGroup>

                <FormGroup>
                  <Input type="text" id="mobile_no" placeholder="Mobile Number" onChange={(event) => this.setState({mobile_no: event.target.value})} />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="logo">Institution Logo:</Label>
                  <Input type="file" id="logo" placeholder="Logo" onChange={(event) => this.setState({logo: event.target.value})}/>
                </FormGroup>

                <Button block outline color="success" onClick={(e) => this.onSubmit(e)}>Submit</Button>
              </CardBody>
            </Card>
          </Col>

          <Col xl="8">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Institution List
              </CardHeader>

              <CardBody>
                <div id="accordion">

                  <FormGroup row className={"my-0"}>
                    <Col xs={"6"}>
                      <Card>
                        <CardHeader id="headingOne">
                          <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                            <h5 className="m-0 p-0">Notor Dame College</h5>
                          </Button>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                          <CardBody>
                            <ul>
                              <li><strong>Name: </strong> Notor Dame College</li>
                              <li><strong>College Code: </strong> 5035</li>
                              <li><strong>Post Office: </strong> Motijheel</li>
                              <li><strong>Total Student: </strong> 2000</li>
                              <li><strong>Type: </strong>Non-Government</li>
                              <li><strong>Email: </strong> info@example.com</li>
                              <li><strong>Phone: </strong> +8801XXXXXXXX</li>
                            </ul>
                            <Button color="primary" onClick={this.viewdetail}>View Detail</Button>{' '}
                          </CardBody>
                        </Collapse>
                      </Card>
                    </Col>

                    <Col xs={"6"}>
                      <Card>
                        <CardHeader id="headingTwo">
                          <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                            <h5 className="m-0 p-0">Dhaka College</h5>
                          </Button>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                          <CardBody>
                            <ul>
                              <li><strong>Name: </strong> Dhaka College</li>
                              <li><strong>College Code: </strong> 5035</li>
                              <li><strong>Post Office: </strong> Science Lab</li>
                              <li><strong>Total Student: </strong> 2000</li>
                              <li><strong>Type: </strong>Non-Government</li>
                              <li><strong>Email: </strong> info@example.com</li>
                              <li><strong>Phone: </strong> +8801XXXXXXXX</li>
                            </ul>
                            <Button color="primary" onClick={this.viewdetail}>View Detail</Button>{' '}
                          </CardBody>
                        </Collapse>
                      </Card>
                    </Col>

                    <Col xs={"6"}>
                      <Card>
                        <CardHeader id="headingThree">
                          <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                            <h5 className="m-0 p-0">St.Joseph College</h5>
                          </Button>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                          <CardBody>
                            <ul>
                              <li><strong>Name: </strong> St.Joseph College</li>
                              <li><strong>College Code: </strong> 5035</li>
                              <li><strong>Post Office: </strong> Mohammadpur</li>
                              <li><strong>Total Student: </strong> 2000</li>
                              <li><strong>Type: </strong>Non-Government</li>
                              <li><strong>Email: </strong> info@example.com</li>
                              <li><strong>Phone: </strong> +8801XXXXXXXX</li>
                            </ul>
                            <Button color="primary" onClick={this.viewdetail}>View Detail</Button>{' '}
                          </CardBody>
                        </Collapse>
                      </Card>
                    </Col>

                    <Col xs={"6"} >
                      <Card >
                        <CardHeader id="headingFour" >
                          <Button block  color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(3)} aria-expanded={this.state.accordion[3]} aria-controls="collapseThree">
                            <h5 className="m-0 p-0">City College</h5>
                          </Button>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordion[3]} data-parent="#accordion" id="collapseThree">
                          <CardBody>
                            <ul>
                              <li><strong>Name: </strong> City College</li>
                              <li><strong>College Code: </strong> 5035</li>
                              <li><strong>Post Office: </strong> Dhanmondi</li>
                              <li><strong>Total Student: </strong> 2000</li>
                              <li><strong>Type: </strong>Non-Government</li>
                              <li><strong>Email: </strong> info@example.com</li>
                              <li><strong>Phone: </strong> +8801XXXXXXXX</li>
                            </ul>
                            <Button color="primary" onClick={this.viewdetail}>View Detail</Button>{' '}
                          </CardBody>
                        </Collapse>
                      </Card>
                    </Col>
                  </FormGroup>

                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddInstitution;

