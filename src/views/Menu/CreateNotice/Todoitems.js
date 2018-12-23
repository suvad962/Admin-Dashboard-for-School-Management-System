import React,{ Component } from 'react';
import {Card, CardBody,ListGroup,ListGroupItem } from 'reactstrap';
//import './Todolist.css';

class Todoitems extends Component{
  constructor(props){
    super(props);

    this.createtask = this. createtask.bind(this);

  }
  createtask(item){
    return<ListGroupItem key={item.key}>{item.text}</ListGroupItem>
  }
  delete(key){
    this.props.delete(key);
  }

  render(){
    var todoentries = this.props.entries;
    var listitems = todoentries.map(this.createtask);

    return(
        <div className={"liststyle"}>
          <ListGroup>
              {listitems}
          </ListGroup>

        </div>



    );
  }
}
export default Todoitems;
