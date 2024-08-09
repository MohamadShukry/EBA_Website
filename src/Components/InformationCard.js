// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function InformationCard(props) {
//   return (
//     <div className="info-cards">
      
//       <p className="info-card-title">{props.title}</p>
//       <p className="info-card-description">{props.description}</p>
//     </div>
//   );
// }

// export default InformationCard;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Info.css"; // Assuming your CSS file is named Info.css

const InformationCard = ({ title, description, icon }) => {
  return (
    <div className="info-cards">
      <div className="card-content">
        <span className="info-card-icon">
          <FontAwesomeIcon className="info-fa-icon" icon={icon} />
        </span>
        <p className="info-card-title">{title}</p>
        <p className="info-card-description">{description}</p>
      </div>
    </div>
  );
};

export default InformationCard;
