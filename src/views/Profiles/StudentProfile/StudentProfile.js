import React, { Component } from 'react';
import { Col,Row,Form,Label,Container } from 'reactstrap';
import './StudentProfile.css';


class StudentProfile extends Component{
  constructor(props){
    super(props);
    this.state={
      picture:'',
      studentID:'',
      name:'',
      roll:'',
      class:'',
      section:'',
    }

  }
  render(){
    return(
      <div className='emp-profile'>
        <Container>
          <Form method='post'>
            <Row>
              <Col md='4'>
                <div className='profile-img'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=''/>
                  <div className='file btn btn-lg btn-primary'>
                    Change Photo
                    <input type='file' name='file'/>
                  </div>
                </div>
              </Col>
              <Col md='6'>
                <div className='profile-head'>
                  <h5>Student Name</h5>
                  <h6>
                    .....
                  </h6>
                  <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-toggle="tab"  data-target="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md='2'>
                <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
              </Col>
            </Row>
            <Row className='py-5'>
              <Col md='4'>
                <div className="profile-work">
                  <p>SOCIAL WORK</p>
                  <a href="">......</a><br/>
                  <a href="">......</a><br/>
                  <p>SKILLS</p>
                  <a href="">Songs</a><br/>
                  <a href="">Good Player</a><br/>
                </div>
              </Col>
              <Col md='8'>
                <div className="tab-content profile-tab" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <Row>
                      <Col md='6'>
                        <Label>Student Id</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.state.studentid} Kshiti123</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <Label>Student Name</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.state.name} Kshiti Ghelani</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <Label>Class</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.state.class} Seven</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <Label>Roll</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.state.roll} 123 456 7890</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <Label>Section</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.state.section} A</p>
                      </Col>
                    </Row>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <Row>
                      <Col md='6'>
                        <Label>Father Name</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.state.fathername}Kalam</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <Label>Mother Name</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.state.mothername}Kshiti Ghelani</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <Label>Email</Label>
                      </Col>
                      <Col md='6'>
                        <p>kshitighelani@gmail.com</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <Label>Phone</Label>
                      </Col>
                      <Col md='6'>
                        <p>123 456 7890</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='12'>
                        <Label>Your Bio</Label><br/>
                        <p>Your detail description</p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default StudentProfile;
