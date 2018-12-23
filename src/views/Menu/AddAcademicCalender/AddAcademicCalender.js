import React, { Component } from 'react';
import Todoitems from './Todoitems';
import { Card,CardHeader,CardBody,Col,Row,FormGroup,Input,Button,Table,ListGroup, ListGroupItem } from 'reactstrap';
//import logo from './log.svg';
//import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      des: []
    }

  }
  additem=(e)=>{
    e.preventDefault();
    if(this._element !== ""){
      var newItem={
        text: this._element.value,
        key: Date.now()
      }

      if(this._descrip !== ""){
        var desitem ={
          destext: this._descrip.value,
          deskey: Date.now()
        }
      }

      this.setState((prevState)=>{
        return{
          items: prevState.items.concat(newItem)
        };
      });
      this._element="";

      this.setState((prevState)=>{
        return{
          des: prevState.des.concat(desitem)
        };
      });
      this._descrip="";


    }
  }

  deleteitem=(key)=> {
    var filtereditem = this.state.items.filter(function (item) {
      return (item.key !== key)
    })
    var filtereddes = this.state.des.filter(function (descrip) {
      return (descrip.deskeykey !== key)
    })
    this.setState({
      items: filtereditem,
      des: filtereddes
    })
  }

  uploadapi=()=>{
    console.log(this.state)
  }

  render() {
    return (
      <div className="animated fadeIn py-3 ml-5">
        <Row>
          <Col xs="12" md="3">
          </Col>
          <Col xs={"12"} sm={"6"}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Create Academic Calender</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/AddAdmin.js" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted"></small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div header tag="div" className="text-center"><strong>Input Event</strong></div>
                <hr/>
                <form onSubmit={this.additem}>
                  <FormGroup row className={"my-0"}>
                    <Col xs={"4"}>
                      <FormGroup>
                        <Input innerRef={(a)=> this._element = a} placeholder={"Enter Task"}/>
                      </FormGroup>
                    </Col>
                    <Col xs={"6"}>
                      <FormGroup>
                        <Input innerRef={(a)=> this._descrip = a} placeholder={"Enter Description"}/>
                      </FormGroup>
                    </Col>
                    <Col xs={"2"}>
                      <FormGroup>
                        <Button color={"success"} type={"submit"} >Add</Button>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </form>
                <hr/>
                <div header tag="div" className={"text-center"}><strong>Event Item</strong></div>
                <hr/>
                <Table>
                  <thead>
                  <tr>
                    <th>Date</th>
                    <th>Event</th>
                  </tr>
                  </thead>
                </Table>
                <Todoitems entries={this.state.items} description={this.state.des} delete={this.deleteitem}/>
                <Button block color={"primary"} onClick={this.uploadapi}>Submit</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="3">
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
