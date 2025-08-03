import React from 'react';
import './App.css';
import { books } from './components/Data';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const showBooks = true;
  const showBlog = true;
  const showCourses = true;

  return (
    <div className="container">
      <div className="box">
        <h1>Course Details</h1>
        {showCourses ? <CourseDetails /> : null}
      </div>
      

      <div className="box divider">
        <h1>Blog Details</h1>
        {showBlog ? <BlogDetails /> : <p>No Blog Data</p>}
      </div>

      <div className="box">
        <h1>Book Details</h1>
        {showBooks && <BookDetails books={books} />}
      </div>
    </div>
  );
}

export default App;
