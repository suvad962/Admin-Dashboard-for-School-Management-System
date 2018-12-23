import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row, Button, Table, Modal,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class AddAdmin extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      first_name: '',
      last_name: '',
      gender: '',
      section_id: '',
      date_of_birth: '',
      nationality: '',
      religion: '',
      blood_group: '',
      email: '',
      present_house_no: '',
      present_road_no: '',
      present_sector: '',
      present_postOffice: '',
      present_post_code: '',
      present_upazilla: '',
      present_district: '',
      mobile_no: '',
      phone_no: '',
      status: '',
      father_name: '',
      father_mobile_no: '',
      father_profession: '',
      mother_name: '',
      mother_mobile_no: '',
      mother_profession: '',
      modal: false,
      visi: false,
    };
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
      <div className="animated fadeIn py-3 ml-5">
        <Row>
          <Col xs="12" sm="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Add New Student</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/AddAdmin.js" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted"></small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
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

                <FormGroup row className={"my-0"}>
                  <Col sm={"6"}>
                    <Label>Gender</Label>
                    <Input type={"select"} onChange={(event) => this.setState({gender: event.target.value})}>
                      <option>-Select-</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Input>
                  </Col>
                  <Col sm={"6"}>
                    <Label>Section ID</Label>
                    <Input type={"text"} placeholder={"Enter Section ID"} onChange={(event) => this.setState({section_id: event.target.value})}/>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Label>Date Of Birth</Label>
                  <Input type={"date"} onChange={(event) => this.setState({date_of_birth: event.target.value})}/>
                </FormGroup>

                <FormGroup row className={"my-0"}>
                  <Col sm={"6"}>
                    <Label>Nationality</Label>
                    <Input type={"text"} placeholder={"Enter Nationality"} onChange={(event) => this.setState({nationality: event.target.value})}/>
                  </Col>
                  <Col sm={"6"}>
                    <Label>Religion</Label>
                    <Input type={"text"} placeholder={"Enter Religion"} onChange={(event) => this.setState({religion: event.target.value})}/>
                  </Col>
                </FormGroup>

                <FormGroup row className={"my-0"}>
                  <Col sm={"4"}>
                    <Label>Blood Group</Label>
                    <Input type={"text"} placeholder={"Enter Blood group"} onChange={(event) => this.setState({blood_group: event.target.value})}/>
                  </Col>
                  <Col sm={"6"}>
                    <Label>Email</Label>
                    <Input type={"text"} placeholder={"Enter Text"} onChange={(event) => this.setState({email: event.target.value})}/>
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
                <Label/><hr/>

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
                    <Label>Status</Label>
                    <Input type={"select"} onChange={(event) => this.setState({status: event.target.value})}>
                      <option>-Select-</option>
                      <option>Available</option>
                      <option>Not Available</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Father's Name</Label>
                    <Input type={"text"} placeholder={"Enter Father's Name"} onChange={(event) => this.setState({father_name: event.target.value})}/>
                </FormGroup>

                <FormGroup row className={"my-0"}>
                  <Col sm={"6"}>
                    <Label>Father's Mobile No</Label>
                    <Input type={"text"} placeholder={"Enter Mobile Number"} onChange={(event) => this.setState({father_mobile_no: event.target.value})}/>
                  </Col>
                  <Col sm={"6"}>
                    <Label>Father's Profession</Label>
                    <Input type={"text"} placeholder={"Enter Profession"} onChange={(event) => this.setState({father_profession: event.target.value})}/>
                  </Col>
                </FormGroup>

                <FormGroup>
                    <Label>Mother's Name</Label>
                    <Input type={"text"} placeholder={"Enter Father's Name"} onChange={(event) => this.setState({mother_name: event.target.value})}/>
                </FormGroup>

                <FormGroup row className={"my-0"}>
                  <Col sm={"6"}>
                    <Label>Mother's Mobile No</Label>
                    <Input type={"text"} placeholder={"Enter Mobile Number"} onChange={(event) => this.setState({mother_mobile_no: event.target.value})}/>
                  </Col>
                  <Col sm={"6"}>
                    <Label>Mother's Profession</Label>
                    <Input type={"text"} placeholder={"Enter Profession"} onChange={(event) => this.setState({mother_profession: event.target.value})}/>
                  </Col>
                </FormGroup>
                <Label/>

                <Button block outline color="success" onClick={(e) => this.onSubmit(e)}>Submit</Button>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" md="8">
            <Card className="card alert">
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Student List</strong>
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
            Congratulation! You have Added Student successfully.
          </ModalBody>
          <ModalFooter>
            <Button color={"primary"} onClick={this.goback}>Back to Settings</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddAdmin;

