import React from 'react';
import './AchievementsSection.css';

const AchievementsSection = () => {
    return (
        <section className="achievements">
            <h2>My Achievements</h2>
            <div className="certificates">
                <img src="/kishorm3795.github.io/certificates/cert1.png" alt="Certificate 1" />
                <img src="/kishorm3795.github.io/certificates/cert2.png" alt="Certificate 2" />
                <img src="/kishorm3795.github.io/certificates/cert3.png" alt="Certificate 3" />
            </div>
        </section>
    );
};

export default AchievementsSection;