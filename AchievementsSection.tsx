import React from 'react';
import './AchievementsSection.css';

const AchievementsSection = () => {
    const certificates = [
        {'name': 'Oracle Cloud Generative AI', 'link': 'link_to_certificate_1'},
        {'name': 'Oracle AI Vector', 'link': 'link_to_certificate_2'},
        {'name': 'Oracle Cloud AI', 'link': 'link_to_certificate_3'},
        {'name': 'Python', 'link': 'link_to_certificate_4'},
        {'name': 'SQL Basic', 'link': 'link_to_certificate_5'},
        {'name': 'C Basic', 'link': 'link_to_certificate_6'},
        {'name': 'Problem Solving', 'link': 'link_to_certificate_7'}
    ];

    const handleClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div className="achievements-section">
            <h2>My Achievements</h2>
            <div className="certificates">
                {certificates.map((cert, index) => (
                    <div key={index} className="certificate">
                        <span>{cert.name}</span>
                        <button onClick={() => handleClick(cert.link)}>View Certificate</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;