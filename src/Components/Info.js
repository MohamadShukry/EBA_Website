import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth, faStethoscope, faSyringe, faPills, faMicroscope, faAmbulance, faUserMd } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

const Info = () => {
  const services = [
    { title: 'Emergency Care', description: 'Our Emergency Care service is designed to be ', icon: faTruckMedical },
    { title: 'Heart Disease', description: ' s. From comprehensive screenings to advanced interventions, we are committed to helping you maintain a healthy heart and lead a fulfilling life.', icon: faHeartPulse },
    { title: 'Dental Care', description: ' health needs. Our skilled dentists provide a wide range of treatments, from routine check-ups and cleanings to cosmetic procedures and restorative treatments.', icon: faTooth },
    { title: 'Primary Care', description: ' all your general health needs, including preventive care, chronic disease management, and health screenings.', icon: faStethoscope },
    { title: 'Vaccinations', description: ' ensuring you and your family are safeguarded against various preventable diseases.', icon: faSyringe },
    { title: 'Pharmacy', description: ' over-the-counter products. Our pharmacists are available to offer guidance and answer any questions you may have.', icon: faPills },
    { title: 'Lab Testing', description: ' manage your health. From routine blood work to specialized testing, we have you covered.', icon: faMicroscope },
    { title: 'Ambulance Services', description: ' staffed by skilled paramedics equipped to provide immediate care.', icon: faAmbulance },
  ];

  return (
    <div className="parent-container" id="services">
      <div className="info-section">
        <div className="info-title-content">
          <h3 className="info-title">
            <span>What We Do</span>
          </h3>
          <p className="info-description">
            We bring healthcare to your convenience, offering a comprehensive range of on-demand medical services tailored to your needs. Our platform allows you to connect with experienced online doctors who provide expert medical advice, issue online prescriptions, and offer quick refills whenever you require them.
          </p>
        </div>

        <div className="cards-wrapper">
          {services.map((service, index) => (
            <InformationCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
