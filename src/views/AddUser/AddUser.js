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
  Table
} from 'reactstrap';


class AddUser extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      username:'',
      mobileno:'',
      email:'',
      role: ''
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

  render() {
    return (
      <div className="animated fadeIn py-3 ml-5">
        <Row>
          <Col xs="12" sm="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Add New User</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/AddUser.js" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted"></small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="username">UserName</Label>
                  <Input type="text" id="username" placeholder="Enter UserName Name" onChange={(event) => this.setState({username: event.target.value})} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="username">Role</Label>
                  <Input type="select" id="role" onChange={(event) => this.setState({role: event.target.value})}>
                    <option>--Select Role--</option>
                    <option>Coordinator</option>
                    <option>Teacher</option>

                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="mobileno">Mobile Number</Label>
                  <Input type="text" id="mobileno" placeholder="Enter Mobile Number" onChange={(event) => this.setState({mobileno: event.target.value})} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email Address</Label>
                  <Input type="text" id="email" placeholder="Enter Email Address" onChange={(event) => this.setState({email: event.target.value})} />
                </FormGroup>

                <Button block outline color="success" onClick={(e) => this.onSubmit(e)}>Submit</Button>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" md="8">
            <Card className="card alert">
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>User List</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/AddUser.js" rel="noreferrer noopener" target="_blank" className="card-header-action">
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
      </div>
    );
  }
}

export default AddUser;

