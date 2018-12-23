import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);

    this.state={
      redirect: false,
      username: '',
      password: '',
      errusername: '',
      errpassword: '',
      signupredirect: false

    }
  }

  login =(e)=>{
    e.preventDefault();
    console.log(this.state);
    if(this.state.username === '')
    {
      this.setState({
        errusername: "*** Fill the username ***"
      })
    }
    if(this.state.password === '')
    {
      this.setState({
        errpassword: "*** Fill the password ***"
      })
    }
    if(this.state.username !== '' && this.state.password !== '')
    {
      this.setState({
        redirect: true
      });
    }


  };

  changehandel(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signup=()=>{
    this.setState({
      signupredirect: true
    })
  }

  render() {
    if(this.state.redirect === true){return(<switch><Redirect to="/dashboard"/></switch>)}
    if(this.state.signupredirect === true){return(<switch><Redirect to={"/register"}/></switch>)}


    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name={"username"} placeholder="Username" autoComplete="username" value={this.state.username} onChange={e=>this.changehandel(e)} />
                      </InputGroup>
                      <h6 className={"err"}>{this.state.errusername}</h6>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name={"password"} placeholder="Password" autoComplete="current-password" value={this.state.password} onChange={e=>this.changehandel(e)} />
                      </InputGroup>
                      <h6 className={"err"}>{this.state.errpassword}</h6>

                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.login}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Sign up here to access the dashboard.</p>
                      <Button color="primary" onClick={this.signup} className="mt-3" active>Signup Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
