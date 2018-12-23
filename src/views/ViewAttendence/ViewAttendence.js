import React, { Component } from 'react';
import { Card, CardBody, CardHeader,Row,Col, Table } from 'reactstrap';




class ViewAttendence extends Component {
 constructor(props){
   super(props);

   this.state={
     id: [],
     name: [],
     class: [],
     section: [],
     roll: [],
     attendence: [],
     remarks: []

   }
 }



  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>View Attendence</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/AddUser.js" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted"></small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div header tag="div" className="text-center"><strong><h3>Student's Attendence Sheet</h3></strong>
                <small className='text-danger'>[** These are dummy value. Value will be shown look like this after loading API **]</small></div>

                <hr/>

                <Table striped bordered className={"text-center"}>
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Roll/ID</th>
                    <th>Attendence</th>
                    <th>Remarks</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Azizul Karim</td>
                    <td>Six</td>
                    <td>B</td>
                    <td>1205</td>
                    <td>25</td>
                    <td>Good</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Azizul Karim</td>
                    <td>Six</td>
                    <td>B</td>
                    <td>1205</td>
                    <td>25</td>
                    <td>Good</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Azizul Karim</td>
                    <td>Six</td>
                    <td>B</td>
                    <td>1205</td>
                    <td>25</td>
                    <td>Good</td>
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td>Azizul Karim</td>
                    <td>Six</td>
                    <td>B</td>
                    <td>1205</td>
                    <td>25</td>
                    <td>Good</td>
                  </tr>

                  <tr>
                    <th scope="row">5</th>
                    <td>Azizul Karim</td>
                    <td>Six</td>
                    <td>B</td>
                    <td>1205</td>
                    <td>25</td>
                    <td>Good</td>
                  </tr>

                  <tr>
                    <th scope="row">6</th>
                    <td>Azizul Karim</td>
                    <td>Six</td>
                    <td>B</td>
                    <td>1205</td>
                    <td>25</td>
                    <td>Good</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Azizul Karim</td>
                    <td>Six</td>
                    <td>B</td>
                    <td>1205</td>
                    <td>25</td>
                    <td>Good</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Azizul Karim</td>
                    <td>Six</td>
                    <td>B</td>
                    <td>1205</td>
                    <td>25</td>
                    <td>Good</td>
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

export default ViewAttendence;
