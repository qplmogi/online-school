import React from 'react';
import './Teachers.css';

const teachers = [
  { name: 'نام استاد', specialty: '  ریاضیات', gender: 'female' },
  { name: 'نام استاد', specialty: '  شیمی', gender: 'female' },
  { name: 'نام‌ استاد', specialty: 'فیزیک  ', gender: 'female' },
];

const Avatar = ({ gender }) => (
  <div className={`teacher-avatar teacher-avatar--${gender}`}>
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill={gender === 'female' ? '#fde8f0' : '#e8f0fc'} />
      <circle cx="40" cy="28" r="14" fill={gender === 'female' ? '#f4a0c0' : '#90acd8'} />
      <ellipse cx="40" cy="66" rx="22" ry="14" fill={gender === 'female' ? '#f4a0c0' : '#90acd8'} />
    </svg>
  </div>
);

const TeacherCard = ({ name, specialty, gender }) => (
  <div className="teacher-card">
    <Avatar gender={gender} />
    <div className="teacher-card__info">
      <h4 className="teacher-card__name">{name}</h4>
      <p className="teacher-card__specialty">{specialty}</p>
      <div className="teacher-card__stars">{'★'.repeat(5)}</div>
    </div>
  </div>
);

const Teachers = () => {
  return (
    <section className="teachers" id="teachers">
      <div className="container">
        <h2 className="section-title">اساتید مجرب ما</h2>
        <div className="teachers__grid">
          {teachers.map((t, i) => (
            <TeacherCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
