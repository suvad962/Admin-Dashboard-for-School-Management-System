import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class AddTeacher extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      teacher_index: '',
      institute_id: '',
      first_name: '',
      last_name: '',
      gender: '',
      present_house_no: '',
      present_road_no: '',
      present_sector: '',
      present_postOffice: '',
      present_post_code: '',
      present_upazilla: '',
      present_district: '',
      parmanent_house_no: '',
      parmanent_road_no: '',
      parmanent_sector: '',
      parmanent_postOffice: '',
      parmanent_post_code: '',
      parmanent_upazilla: '',
      parmanent_district: '',
      title_qualification: '',
      other_qualification: '',
      nid: '',
      tin: '',
      subject_speciality: '',
      email: '',
      phone_no: '',
      mobile_no: '',
      status: '',
      teacher_contact_type: '',
      modal: false,
      visi: false,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({
      modal: true
    });
    console.log(this.state);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  goback=()=>{
    this.setState({
      visi: true
    })
  };

  render() {
    if(this.state.visi === true){return <switch><Redirect to={"/institution/institutionsettings"}/></switch>}
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="8">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Add New Teacher</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/AddAdmin.js" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted"></small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>

                <FormGroup>
                  <Label htmlFor="">Teacher Index</Label>
                  <Input type="text" placeholder="Enter Teacher Index" onChange={(event) => this.setState({teacher_index: event.target.value})} />

                  <FormGroup row className={"my-0"}>
                    <Col sm={"8"}>
                      <Label>Institute ID</Label>
                      <Input type={"text"} placeholder={"Enter Institute ID"} onChange={(event) => this.setState({institute_id: event.target.value})}/>
                    </Col>
                    <Col sm={"4"}>
                      <Label>Gender</Label>
                      <Input type={"select"} onChange={(event) => this.setState({gender: event.target.value})}>
                        <option>-Select-</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </Input>
                    </Col>
                  </FormGroup>

                  <FormGroup row className={"my-0"}>
                    <Col sm={"6"}>
                      <Label>First Name</Label>
                      <Input type={"text"} placeholder={"Enter First Name"} onChange={(event) => this.setState({first_name: event.target.value})}/>
                    </Col>
                    <Col sm={"6"}>
                      <Label>Last Name</Label>
                      <Input type={"text"} placeholder={"Enter Last Name"} onChange={(event) => this.setState({last_name: event.target.value})}/>
                    </Col>
                  </FormGroup>
                  <Label/>

                  <Col header tag="div" className="text-center"><strong>Present Address</strong></Col>
                  <hr/>
                  <FormGroup row className={"my-0"}>
                    <Col sm={"4"}>
                      <Label></Label>
                      <Input type={"text"} placeholder={"House No"} onChange={(event) => this.setState({present_house_no: event.target.value})}/>
                    </Col>
                    <Col sm={"4"}>
                      <Label/>
                      <Input type={"text"} placeholder={"Road No"} onChange={(event) => this.setState({present_road_no: event.target.value})}/>
                    </Col>
                    <Col sm={"4"}>
                      <Label/>
                      <Input type={"text"} placeholder={"Sector"} onChange={(event) => this.setState({present_sector: event.target.value})}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row className={"my-0"}>
                    <Col sm={"6"}>
                      <Label/>
                      <Input type={"text"} placeholder={"Post Office"} onChange={(event) => this.setState({present_postOffice: event.target.value})}/>
                    </Col>
                    <Col sm={"6"}>
                      <Label></Label>
                      <Input type={"text"} placeholder={"Post Code"} onChange={(event) => this.setState({present_post_code: event.target.value})}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row className={"my-0"}>
                    <Col sm={"6"}>
                      <Label></Label>
                      <Input type={"text"} placeholder={"Upazilla"} onChange={(event) => this.setState({present_upazilla: event.target.value})}/>
                    </Col>
                    <Col sm={"6"}>
                      <Label></Label>
                      <Input type={"text"} placeholder={"District"} onChange={(event) => this.setState({present_district: event.target.value})}/>
                    </Col>
                  </FormGroup>
                  <Label/>
                  <Col header tag="div" className="text-center"><strong>Parmanent Address</strong></Col>
                  <hr/>
                  <FormGroup row className={"my-0"}>
                    <Col sm={"4"}>
                      <Label></Label>
                      <Input type={"text"} placeholder={"House No"} onChange={(event) => this.setState({parmanent_house_no: event.target.value})}/>
                    </Col>
                    <Col sm={"4"}>
                      <Label/>
                      <Input type={"text"} placeholder={"Road No"} onChange={(event) => this.setState({parmanent_road_no: event.target.value})}/>
                    </Col>
                    <Col sm={"4"}>
                      <Label/>
                      <Input type={"text"} placeholder={"Sector"} onChange={(event) => this.setState({parmanent_sector: event.target.value})}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row className={"my-0"}>
                    <Col sm={"6"}>
                      <Label/>
                      <Input type={"text"} placeholder={"Post Office"} onChange={(event) => this.setState({parmanent_postOffice: event.target.value})}/>
                    </Col>
                    <Col sm={"6"}>
                      <Label></Label>
                      <Input type={"text"} placeholder={"Post Code"} onChange={(event) => this.setState({parmanent_post_code: event.target.value})}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row className={"my-0"}>
                    <Col sm={"6"}>
                      <Label></Label>
                      <Input type={"text"} placeholder={"Upazilla"} onChange={(event) => this.setState({parmanent_upazilla: event.target.value})}/>
                    </Col>
                    <Col sm={"6"}>
                      <Label></Label>
                      <Input type={"text"} placeholder={"District"} onChange={(event) => this.setState({parmanent_district: event.target.value})}/>
                    </Col>
                  </FormGroup>
                  <Label/>
                  <hr/><hr/>

                  <FormGroup row className={"my-0"}>
                    <Col sm={"7"}>
                      <Label>National ID Card Number</Label>
                      <Input type={"text"} placeholder={"Enter NID Number"} onChange={(event) => this.setState({nid: event.target.value})}/>
                    </Col>
                    <Col sm={"5"}>
                      <Label>TIN Number</Label>
                      <Input type={"text"} placeholder={"Enter TIN Number"} onChange={(event) => this.setState({tin: event.target.value})}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row className={"my-0"}>
                    <Col sm={"6"}>
                      <Label>Phone Number</Label>
                      <Input type={"text"} placeholder={"Enter Phone Number"} onChange={(event) => this.setState({phone_no: event.target.value})}/>
                    </Col>
                    <Col sm={"6"}>
                      <Label>Mobile Number</Label>
                      <Input type={"text"} placeholder={"Enter Mobile Number"} onChange={(event) => this.setState({mobile_no: event.target.value})}/>
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Label>Title Qualification</Label>
                    <Input type={"text"} placeholder={"Enter Title Qualification"} onChange={(event) => this.setState({title_qualification: event.target.value})}/>
                  </FormGroup>

                  <FormGroup>
                    <Label>Other Qualification</Label>
                    <Input type={"text"} placeholder={"Enter Other Qualification"} onChange={(event) => this.setState({other_qualification: event.target.value})}/>
                  </FormGroup>

                  <FormGroup row className={"my-0"}>
                    <Col sm={"6"}>
                      <Label>Status</Label>
                      <Input type={"select"} onChange={(event) => this.setState({status: event.target.value})}>
                        <option>-Select-</option>
                        <option>Available</option>
                        <option>Not Available</option>
                      </Input>
                    </Col>
                    <Col sm={"6"}>
                      <Label>Teacher Type</Label>
                      <Input type={"select"} onChange={(event) => this.setState({teacher_contact_type: event.target.value})}>
                        <option>-Select-</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                      </Input>
                    </Col>
                  </FormGroup>

                  <FormGroup row className={"my-0"}>
                    <Col sm={"6"}>
                      <FormGroup>
                        <Label>Subject Speciality</Label>
                        <Input type={"select"} onChange={(event) => this.setState({subject_speciality: event.target.value})}>
                          <option>-Select-</option>
                          <option>Bangla</option>
                          <option>English</option>
                          <option>Math</option>
                          <option>Physics</option>
                          <option>Chemistry</option>
                          <option>Biology</option>
                          <option>ICT</option>
                          <option>Accounting</option>
                          <option>Finance</option>
                          <option>Management</option>
                          <option>Marketing</option>
                          <option>Statistics</option>
                          <option>Economics</option>
                          <option>Geography</option>
                          <option>History</option>
                          <option>Agriculture</option>
                          <option>Religion</option>
                          <option>Social Science</option>
                          <option>Home Economics</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col sm={"6"}>
                      <Label>Email</Label>
                      <Input type={"text"} placeholder={"Enter Email"} onChange={(event) => this.setState({email: event.target.value})}/>
                    </Col>
                  </FormGroup>

                </FormGroup>

                <Button block outline color="success" onClick={(e) => this.onSubmit(e)}>Submit</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="4">
            <Card className="card alert">
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Teacher List</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/AddAdmin.js" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted"></small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Table className="table student-data-table m-t-20">
                  <thead>
                  <tr>
                    <th>Roll</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Parents Name</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Address</th>
                    <th>Date Of Birth</th>
                    <th>Mobile No</th>
                    <th>E-mail</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>#2901</td>
                    <td>Daniel Will</td>
                    <td>Male</td>
                    <td>David Smith</td>
                    <td>1</td>
                    <td>A</td>
                    <td>Dhaka-1200</td>
                    <td>10/03/2013</td>
                    <td>+985049</td>
                    <td>suppor@example.com</td>

                  </tr>
                  <tr>
                    <td>#2901</td>
                    <td>Daniel Will</td>
                    <td>Male</td>
                    <td>David Smith</td>
                    <td>1</td>
                    <td>A</td>
                    <td>Dhaka-1200</td>
                    <td>10/03/2013</td>
                    <td>+985049</td>
                    <td>suppor@example.com</td>
                  </tr>
                  <tr>
                    <td>#2901</td>
                    <td>Daniel Will</td>
                    <td>Male</td>
                    <td>David Smith</td>
                    <td>1</td>
                    <td>A</td>
                    <td>Dhaka-1200</td>
                    <td>10/03/2013</td>
                    <td>+985049</td>
                    <td>suppor@example.com</td>
                  </tr>
                  <tr>
                    <td>#2901</td>
                    <td>Daniel Will</td>
                    <td>Male</td>
                    <td>David Smith</td>
                    <td>1</td>
                    <td>A</td>
                    <td>Dhaka-1200</td>
                    <td>10/03/2013</td>
                    <td>+985049</td>
                    <td>suppor@example.com</td>
                  </tr>
                  <tr>
                    <td>#2901</td>
                    <td>Daniel Will</td>
                    <td>Male</td>
                    <td>David Smith</td>
                    <td>1</td>
                    <td>A</td>
                    <td>Dhaka-1200</td>
                    <td>10/03/2013</td>
                    <td>+985049</td>
                    <td>suppor@example.com</td>
                  </tr>
                  <tr>
                    <td>#2901</td>
                    <td>Daniel Will</td>
                    <td>Male</td>
                    <td>David Smith</td>
                    <td>1</td>
                    <td>A</td>
                    <td>Dhaka-1200</td>
                    <td>10/03/2013</td>
                    <td>+985049</td>
                    <td>suppor@example.com</td>
                  </tr>
                  <tr>
                    <td>#2901</td>
                    <td>Daniel Will</td>
                    <td>Male</td>
                    <td>David Smith</td>
                    <td>1</td>
                    <td>A</td>
                    <td>Dhaka-1200</td>
                    <td>10/03/2013</td>
                    <td>+985049</td>
                    <td>suppor@example.com</td>
                  </tr>
                  <tr>
                    <td>#2901</td>

                    <td>Daniel Will</td>
                    <td>Male</td>
                    <td>David Smith</td>
                    <td>1</td>
                    <td>A</td>
                    <td>Dhaka-1200</td>
                    <td>10/03/2013</td>
                    <td>+985049</td>
                    <td>suppor@example.com</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.onSubmit}>
          <ModalHeader toggle={this.onSubmit}>Confirmation</ModalHeader>
          <ModalBody>
            Congratulation! You have added teacher successfully.
          </ModalBody>
          <ModalFooter>
            <Button color={"primary"} onClick={this.goback}>Back to Settings</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddTeacher;
