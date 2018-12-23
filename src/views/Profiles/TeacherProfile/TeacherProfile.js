import React, { Component } from 'react';
import { Col,Row,Form,Label,Container,TabContent,TabPane,Tab,Nav,NavItem } from 'reactstrap';
import './TeacherProfile.css';




class TeacherProfile extends Component{
  constructor(props){
    super(props);

    this.state = {
      picture:'',
      teacherID:'',
      name:'akib',
      email:'',
      phone:'',
      qualification:'',
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
                  <h5>{this.state.name}Teacher Name</h5>
                  <h6>
                    .....
                  </h6>
                  <p className="proile-rating">RANKINGS : <span>8/10</span></p>

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
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab"  data-target="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                  </li>
                </ul>
                <div className="tab-content profile-tab" id="myTabC">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <Row>
                      <Col md='6'>
                        <Label>Teacher Id</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.state.teacherID} Kshiti123</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <Label>Name</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.state.name} Kshiti Ghelani</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <Label>Email</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.state.email} teacher@gmail.com </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <Label>Phone</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.state.phone} 019458 439850 </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <Label>Qualification</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.state.qualification}</p>
                      </Col>
                    </Row>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <Row>
                      <Col md='6'>
                        <Label>Father Name</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.props.fathername}Kalam</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <Label>Mother Name</Label>
                      </Col>
                      <Col md='6'>
                        <p>{this.props.mothername}Kshiti Ghelani</p>
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
    )
  }
}

export default TeacherProfile;
