import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import "../Styles/Team.css";

function Team() {
  const doctors = [
    { id: 1, name: "Aswan Ahamed", email: "john.doe@gmail.com", image: 'https://mdbootstrap.com/img/new/avatars/8.jpg' },
    { id: 2, name: "Cooray", email: "alex.ray@gmail.com", image: 'https://mdbootstrap.com/img/new/avatars/6.jpg' },
    { id: 3, name: "Kate Hunington", email: "kate.hunington@gmail.com", image: 'https://mdbootstrap.com/img/new/avatars/7.jpg' },
    { id: 4, name: "Soraya Letto", email: "soraya.letto@gmail.com", image: 'https://mdbootstrap.com/img/new/avatars/9.jpg' },
    { id: 5, name: "Zeynep Dudley", email: "zeynep.dudley@gmail.com", image: 'https://mdbootstrap.com/img/new/avatars/11.jpg' },
    { id: 6, name: "Ayat Black", email: "ayat.black@gmail.com", image: 'https://mdbootstrap.com/img/new/avatars/15.jpg' }
  ];

  // Function to render each doctor card
  const renderDoctors = () => {
    return doctors.map(doctor => (
      <MDBCol key={doctor.id} xl={4} lg={4} md={6} sm={12} className='mb-4'>
        <MDBCard className='team-card'>
          <MDBCardBody className='team-card-body'>
            <div className='d-flex align-items-center'>
              <img
                src={doctor.image}
                alt={doctor.name}
                className='card-image rounded-circle'
              />
              <div className='card-info'>
                <p className='card-name'>{doctor.name}</p>
                <p className='card-email'>{doctor.email}</p>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    ));
  };

  return (
    <div className="team-section" id='team'>
      <div className="team-title-content">
        <h3 className="team-title">
          <span>Meet Our Team</span>
        </h3>
      </div>
      <MDBRow className='justify-content-center'>
        {/* Render the doctors */}
        {renderDoctors()}
      </MDBRow>
    </div>
  );
}

export default Team;
