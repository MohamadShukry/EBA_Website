import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBNavbarToggler,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'; // Import external CSS file for styling

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div>
      <MDBNavbar expand='lg' light={false} fixed='top' className='custom-navbar'>
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <Link to='/' className='navbar-brand'>
              European Business Academy
            </Link>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            type='button'
            onClick={toggleCollapse}
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon icon='bars' />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={isOpen}>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <a href='#services' className='nav-link'>
                  Services
                </a>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <a href='#about' className='nav-link'>
                  About
                </a>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <a href='#reviews' className='nav-link'>
                  Reviews
                </a>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <a href='#documents' className='nav-link'>
                  Documents
                </a>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <a href='#team' className='nav-link'>
                  Team
                </a>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <a href='#partners' className='nav-link'>
                  Partners
                </a>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <MDBNavbarNav className='d-flex align-items-center'>
              {/* Additional navbar items or buttons can go here */}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

     
    </div>
  );
}
