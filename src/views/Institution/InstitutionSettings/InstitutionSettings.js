import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, Row, Label } from 'reactstrap';
import { Redirect,Switch } from 'react-router-dom'

class InstitutionSettings extends Component {
  constructor(props){
    super(props);

    this.state={
      shift: false,
      period: false,
      teacher: false,
      cclass: false,
      section: false,
      course: false,
      student: false
    }
  }

  shift=()=>{
    this.setState({
      shift: true
    })

  };

  period=()=>{
    this.setState({
      period: true
    })

  };

  teacher=()=>{
    this.setState({
      teacher: true
    })

  };

  cclass=()=>{
    this.setState({
      cclass: true
    })

  };

  section=()=>{
    this.setState({
      section: true
    })

  };

  course=()=>{
    this.setState({
      course: true
    })

  }

  student=()=>{
    this.setState({
      student: true
    })

  };

  render() {

    if(this.state.shift === true){return <Switch><Redirect to={"/shift"}/></Switch>}
    if(this.state.period === true){return <Switch><Redirect to={"/menu/createperiod"}/></Switch>}
    if(this.state.teacher === true){return <Switch><Redirect to={"/teacher/addteacher"}/></Switch>}
    if(this.state.cclass === true){return <Switch><Redirect to={"/menu/createclass"}/></Switch>}
    if(this.state.section === true){return <Switch><Redirect to={"/menu/createsection"}/></Switch>}
    if(this.state.course === true){return <Switch><Redirect to={"/createcourse"}/></Switch>}
    if(this.state.student === true){return <Switch><Redirect to={"/student/addstudent"}/></Switch>}

    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm={"3"}></Col>
          <Col sm={"6"}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Institution Settings</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/AddAdmin.js" rel="noreferrer noopener" target="_blank" className="card-header-action">
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm={"6"}>
                    <Button outline color={"success"} size={"lg"} block onClick={this.shift}>Create Shift</Button>
                  </Col>
                  <Col sm={"6"}>
                    <Button outline color={"success"} size={"lg"} block onClick={this.period}>Create Period</Button>
                  </Col>
                </Row>
                <Label/>
                <Row>
                  <Col sm={"6"}>
                    <Button outline color={"primary"} size={"lg"} block onClick={this.teacher}>Create Teacher</Button>
                  </Col>
                  <Col sm={"6"}>
                    <Button outline color={"primary"} size={"lg"} block onClick={this.cclass}>Create Class</Button>
                  </Col>
                </Row>
                <Label/>
                <Row><Col sm={"6"}>
                  <Button outline color={"warning"} size={"lg"} block onClick={this.section}>Create Section</Button>
                </Col>
                  <Col sm={"6"}>
                    <Button outline color={"warning"} size={"lg"} block onClick={this.course}>Create Subject</Button>
                  </Col>
                </Row>
                <Label/>
                <Row>
                  <Col sm={"6"}>
                    <Button outline color={"info"} size={"lg"} block onClick={this.student}>Create Student</Button>
                  </Col>
                  <Col sm={"6"}></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm={"3"}></Col>
        </Row>
      </div>
    );
  }
}

export default InstitutionSettings;
