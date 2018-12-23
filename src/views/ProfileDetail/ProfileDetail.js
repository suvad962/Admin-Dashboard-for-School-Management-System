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
import './profiledetail.css';


class ProfileDetail extends Component {
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
          <Col xs="12" sm="8">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Location</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/AddAdmin.js" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted"></small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Basic</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/AddAdmin.js" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted"></small>
                  </a>
                </div>
              </CardHeader>

              <CardBody>
                <div className={"logo"}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" className="img-avatar" alt=''/>
                  {this.state.logo}
                  <h6>Logo</h6>
                </div>
                <hr/>

                <FormGroup>
                  <label><strong>Name: </strong>{this.state.name}</label>
                </FormGroup>

                <FormGroup>
                  <label><strong>Short Name: </strong>{this.state.short_name}</label>
                </FormGroup>

                <FormGroup>
                  <label><strong>Address: </strong>{this.state.house_no}, {this.state.road_no}, {this.state.sector}, {this.state.village}, {this.state.upazilla}, {this.state.district}</label>
                </FormGroup>

                <FormGroup>
                  <label><strong>Phone Number: </strong>{this.state.phone_no}</label>
                </FormGroup>

                <FormGroup>
                  <label><strong>Email: </strong>{this.state.email}</label>
                </FormGroup>


              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Detailed Informatoin</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/AddAdmin.js" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted"></small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <FormGroup row className={"my-0"}>
                  <Col xs={"6"}>
                    <FormGroup>
                      <label><strong>Institution Type: </strong>{this.state.type}</label>
                    </FormGroup>

                    <FormGroup>
                      <label><strong>Total Student: </strong>{this.state.total_student}</label>
                    </FormGroup>

                    <FormGroup>
                      <label><strong>School Code: </strong>{this.state.code_school}</label>
                    </FormGroup>

                    <FormGroup>
                      <label><strong>College Code: </strong>{this.state.code_college}</label>
                    </FormGroup>

                    <FormGroup>
                      <label><strong>EIIN Code: </strong>{this.state.code_eiin}</label>
                    </FormGroup>
                  </Col>

                  <Col xs={"6"}>
                    <FormGroup>
                      <label><strong>Post Office: </strong>{this.state.postoffice}</label>
                    </FormGroup>

                    <FormGroup>
                      <label><strong>Post Code: </strong>{this.state.post_code}</label>
                    </FormGroup>

                    <FormGroup>
                      <label><strong>ESTD Code: </strong>{this.state.estd}</label>
                    </FormGroup>

                    <FormGroup>
                      <label><strong>Mobile Number: </strong>{this.state.mobile_no}</label>
                    </FormGroup>

                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProfileDetail;

