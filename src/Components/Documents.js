import React from 'react';
import styles from '../Styles/Doc.module.css'; // Import Doc.module.css

function Documents() {
  return (
    <div className={styles['documents-container']} id='documents'>
      <div className={styles['doc-title-content']}>
        <h3 className={styles['doc-title']}>
          <span>Documents</span>
        </h3>
        <div >
          More than 1500+ Customers
        </div>
        <div >Don't believe us, check clients' words</div>
      </div>
      <div className={`row text-center ${styles.row}`}>
        <div className={`col-lg-3 col-md-6 mb-5 mb-md-0 ${styles['position-relative']}`}>
          <i className="fas fa-cubes fa-3x text-primary mb-4"></i>
          <h5 className="text-primary fw-bold mb-3">5000+</h5>
          <h6 className="fw-normal mb-0">Components</h6>
          <div className={`vr vr-blurry d-none d-md-block ${styles.vr} ${styles['vr-blurry']}`}></div>
        </div>

        <div className={`col-lg-3 col-md-6 mb-5 mb-md-0 ${styles['position-relative']}`}>
          <i className="fas fa-layer-group fa-3x text-primary mb-4"></i>
          <h5 className="text-primary fw-bold mb-3">490+</h5>
          <h6 className="fw-normal mb-0">Design blocks</h6>
          <div className={`vr vr-blurry d-none d-md-block ${styles.vr} ${styles['vr-blurry']}`}></div>
        </div>

        <div className={`col-lg-3 col-md-6 mb-5 mb-md-0 ${styles['position-relative']}`}>
          <i className="fas fa-image fa-3x text-primary mb-4"></i>
          <h5 className="text-primary fw-bold mb-3">100+</h5>
          <h6 className="fw-normal mb-0">Templates</h6>
          <div className={`vr vr-blurry d-none d-md-block ${styles.vr} ${styles['vr-blurry']}`}></div>
        </div>

        <div className={`col-lg-3 col-md-6 mb-5 mb-md-0 ${styles['position-relative']}`}>
          <i className="fas fa-image fa-3x text-primary mb-4"></i>
          <h5 className="text-primary fw-bold mb-3">100+</h5>
          <h6 className="fw-normal mb-0">Templates</h6>
          <div className={`vr vr-blurry d-none d-md-block ${styles.vr} ${styles['vr-blurry']}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Documents;
