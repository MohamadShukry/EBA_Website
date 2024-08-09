import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";

import Image from '../Assets/image0.jpeg'
import "../Styles/Hero.css";

function Hero() {
  // const navigate = useNavigate();
  // const [goUp, setGoUp] = useState(false);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // const handleBookAppointmentClick = () => {
  //   navigate("/appointment");
  // };

  // useEffect(() => {
  //   const onPageScroll = () => {
  //     if (window.scrollY > 600) {
  //       setGoUp(true);
  //     } else {
  //       setGoUp(false);
  //     }
  //   };
  //   window.addEventListener("scroll", onPageScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onPageScroll);
  //   };
  // }, []);

  return (
    // <div className="section-container">
    //   <div className="hero-section">
    //     <div className="text-section">
    //       <p className="text-headline">❤️ Health comes first</p>
    //       <h2 className="text-title">
    //         Find your Doctor and make an Appointments
    //       </h2>
    //       <p className="text-descritpion">
    //         Talk to online doctors and get medical advice, online prescriptions,
    //         refills and medical notes within minutes. On-demand healthcare
    //         services at your fingertips.
    //       </p>
    //       <button
    //         className="text-appointment-btn"
    //         type="button"
    //         onClick={handleBookAppointmentClick}
    //       >
    //         <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
    //       </button>
    //       <div className="text-stats">
    //         <div className="text-stats-container">
    //           <p>145k+</p>
    //           <p>Receive Patients</p>
    //         </div>

    //         <div className="text-stats-container">
    //           <p>50+</p>
    //           <p>Expert Doctors</p>
    //         </div>

    //         <div className="text-stats-container">
    //           <p>10+</p>
    //           <p>Years of Experience</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="hero-image-section">
    //       <img className="hero-image1" src={Doctor} alt="Doctor" />
    //     </div>
    //   </div>

    //   <div
    //     onClick={scrollToTop}
    //     className={`scroll-up ${goUp ? "show-scroll" : ""}`}
    //   >
    //     <FontAwesomeIcon icon={faAngleUp} />
    //   </div>
    // </div>

    <header style={{ paddingLeft: 0 }} >
    <div
      className='p-5 text-center bg-image'
      id="home"
      style={{ backgroundImage: `url(${Image})`, height: 600 }}>
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className='d-flex justify-content-left align-items-center h-100'>
          <div className='text-white'>
          <div className="text-section">
          <p className="text-headline">Unlock Your Potential with</p>
          <h2 className="text-title">
          European Business Academy
          </h2>
          <p className="text-descritpion">
          Empowering future leaders with world-class education and practical skills 
          for thriving in the global business landscape.
          </p>
         
        
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Receive Patients</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Expert Doctors</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
          
          
          </div>
        </div>
      </div>
    </div>
  </header>
  );
}

export default Hero;
