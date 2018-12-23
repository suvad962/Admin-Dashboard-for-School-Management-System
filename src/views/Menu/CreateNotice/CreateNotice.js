import React, { Component } from 'react';
import Todoitems from './Todoitems';
import { Card,CardHeader,CardBody,Col,Row,FormGroup,Input,Button,Table,ListGroup, ListGroupItem } from 'reactstrap';

//import logo from './logo.svg';
//import './App.css';

class CreateNotice extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],

    }

  }
  additem=(e)=>{
    e.preventDefault();
    if(this._element !== ""){
      var newItem={
        text: this._element.value,
        key: Date.now()
      }



      this.setState((prevState)=>{
        return{
          items: prevState.items.concat(newItem)
        };
      });
      this._element="";

    }
  }

  deleteitem=(key)=> {
    var filtereditem = this.state.items.filter(function (item) {
      return (item.key !== key)
    })

    this.setState({
      items: filtereditem,

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
                <i className="fa fa-align-justify"></i><strong>Create Notice</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/AddAdmin.js" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted"></small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div header tag="div" className="text-center"><strong>Input Notice</strong></div>
                <hr/>
                <form onSubmit={this.additem}>

                  <FormGroup>
                    <Input type={"textarea" +
                    ""} block innerRef={(a)=> this._element = a} placeholder={"Enter Task"}/>
                  </FormGroup>

                  <FormGroup>
                    <Button block color={"success"} type={"submit"} >Add</Button>
                  </FormGroup>

                </form>
                <hr/>
                <div header tag="div" className={"text-center"}><strong>Event Item</strong></div>
                <hr/>

                <Todoitems entries={this.state.items} delete={this.deleteitem}/>
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

export default CreateNotice;
