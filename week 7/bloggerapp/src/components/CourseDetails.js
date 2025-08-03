import React from 'react';

const CourseDetails = () => {
  const courses = [
    { name: 'Angular', date: '6/8/2025' },
    { name: 'React', date: '3/9/2025' }
  ];

  if (courses.length === 0) {
    return <p>No course details available.</p>;
  }

  return (
    <ul>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </ul>
  );
};

export default CourseDetails;
