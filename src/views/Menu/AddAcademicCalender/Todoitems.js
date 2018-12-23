import React,{ Component } from 'react';
import {Col,Row,FormGroup } from 'reactstrap';

class Todoitems extends Component{
  constructor(props){
    super(props);

    this.createtask = this. createtask.bind(this);
    this.createdes = this.createdes.bind(this);
  }
  createtask(item){
    return<p key={item.key}>{item.text}</p>
  }
  delete(key){
    this.props.delete(key);
  }
  createdes(des){
    return<p key={des.deskey}>{des.destext}</p>
  }
  render(){
    var todoentries = this.props.entries;
    var listitems = todoentries.map(this.createtask);

    var tododes = this.props.description;
    var listdes = tododes.map(this.createdes);
    return(
        <div className='ml-3'>
          <Row>
            <Col sm={5}>
              {listitems}
            </Col>
            <Col sm={7}>
              {listdes}
            </Col>
          </Row>
        </div>



    );
  }
}
export default Todoitems;
