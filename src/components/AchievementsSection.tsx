import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  { title: 'Oracle Cloud Generative AI', image: '/certificates/Oracle cloud Generative AI.jpeg' },
  { title: 'Oracle AI Vector', image: '/certificates/Oracle AI Vector.jpeg' },
  { title: 'Oracle Cloud AI', image: '/certificates/Oracle cloud AI.jpeg' },
  { title: 'Python', image: '/certificates/Python.png' },
  { title: 'SQL Basic', image: '/certificates/SQL Basic.png' },
  { title: 'C Basic', image: '/certificates/C Basic.png' },
  { title: 'Problem Solving', image: '/certificates/Problem Solving.png' }
];

const AchievementsSection = () => {
  const [selectedCert, setSelectedCert] = React.useState(null);

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="achievements-section">
      <h2>Achievements</h2>
      <div className="certificates">
        {certificates.map((cert) => (
          <motion.div key={cert.title} className="certificate" onClick={() => handleCertClick(cert)}>
            <motion.img
              src={cert.image}
              alt={cert.title}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p>{cert.title}</p>
          </motion.div>
        ))}
      </div>

      {selectedCert && (
        <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>{selectedCert.title}</h3>
            <img src={selectedCert.image} alt={selectedCert.title} />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AchievementsSection;