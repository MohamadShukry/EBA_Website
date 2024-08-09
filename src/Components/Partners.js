// import React from 'react';
// import img1 from '../Assets/1.png';
// import img2 from '../Assets/2.png';
// import img3 from '../Assets/3.png';
// import img4 from '../Assets/4.png';
// import img5 from '../Assets/5.png';
// import img6 from '../Assets/6.png';
// import '../Styles/Partners.css';

// function Partners() {
//   return (
//     <div className='pa-section' id='partners'>
//       <div className='pa-title'>Partners</div>
//       <div className='pa-content'>
//         <div className='pa-column'>
//           <img src={img1} alt='Partner 1' />
//           <img src={img2} alt='Partner 2' />
//           <img src={img3} alt='Partner 3' />
//         </div>
//         <div className='pa-column'>
//           <img src={img4} alt='Partner 4' />
//           <img src={img5} alt='Partner 5' />
//           <img src={img6} alt='Partner 6' />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Partners;

import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import img1 from '../Assets/1.png';
import img2 from '../Assets/2.png';
import img3 from '../Assets/3.png';
import img4 from '../Assets/4.png';
import img5 from '../Assets/5.png';
import img6 from '../Assets/6.png';

export default function AppPartners() {
  return (
    <MDBContainer>
      <div className='pa-section' id='partners'>
        <div className='pa-title'>Partners</div>
        <MDBRow className='pa-content'>
          <MDBCol sm='6' md='6' lg='6'>
            <MDBRow>
              <MDBCol sm='12' className='mb-3'>
                <img src={img1} alt='Partner 1' className='img-fluid' />
              </MDBCol>
              <MDBCol sm='12' className='mb-3'>
                <img src={img2} alt='Partner 2' className='img-fluid' />
              </MDBCol>
              <MDBCol sm='12' className='mb-3'>
                <img src={img3} alt='Partner 3' className='img-fluid' />
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol sm='6' md='6' lg='6'>
            <MDBRow>
              <MDBCol sm='12' className='mb-3'>
                <img src={img4} alt='Partner 4' className='img-fluid' />
              </MDBCol>
              <MDBCol sm='12' className='mb-3'>
                <img src={img5} alt='Partner 5' className='img-fluid' />
              </MDBCol>
              <MDBCol sm='12' className='mb-3'>
                <img src={img6} alt='Partner 6' className='img-fluid' />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}



