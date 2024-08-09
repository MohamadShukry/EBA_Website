import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import Director from "../Assets/About.png";
import "../Styles/About.css";

export default function About() {
  return (
    <MDBContainer id='about' className='container'>
      <div className='about-content'>
      <div className='about-image-container'>
          <img
            src={Director}
            alt='Director'
            className='about-image'
            aria-label='Director Image'
          />
        </div>
        <div className='about-text'>
          <div className='about-title'>About</div>
          <p className="about-description">
            At European Business Academy, our commitment to quality education and training has led to the growth of our student numbers to over 15,000 around the world. The range of education and training courses includes Accounting, Business, Finance, Hospitality, Tourism, Information Technology, Computing, Management, and English Language Programmes.

            As a European Business Academy student, you will be part of a vibrant city-center campus and community that represents a variety of nationalities, cultures, and religious beliefs. This diversity fosters understanding, confidence, and the development of meaningful relationships. By emphasizing the development of professional and entrepreneurial skills, our graduates are equipped to approach problems with creative, practical solutions and assume leadership roles.

            Modern telecommunication facilities ensure that wherever you choose to study, you will receive the total support of European Business Academy. The unique partnership of our management, academics, staff, and students creates an environment conducive to fun, creativity, teamwork, communication, knowledge, and broad-based skills development.

            I look forward to welcoming you to European Business Academy as you embark on your journey to develop both your professional and personal life.
          </p>
        </div>
      
      </div>
    </MDBContainer>
  );
}
