import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/log.svg'
import sygnet from '../../assets/img/brand/sygne.svg'
import mobipath from '../../assets/img/brand/mobipath.jpg';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  constructor(props){
    super(props);

    this.state={
      redirect: false
    }
  }

  logout =()=>{
    this.setState({
      redirect: true
    })
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    if(this.state.redirect === true){return(<switch><Redirect to="/login"/></switch>)}

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: mobipath, width: 89, height: 25, alt: 'Mobipath Logo' }}
          //minimized={{ src: sygnet, width: 30, height: 30, alt: 'Mobipath Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />


        <Nav className="ml-auto" navbar>

          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'assets/img/avatars/mobipath.jpg'} className="img-avatar" alt="Example@mobipath.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>

              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
              <DropdownItem onClick={this.logout}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>

      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
