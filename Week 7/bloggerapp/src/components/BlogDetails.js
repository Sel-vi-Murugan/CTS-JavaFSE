import React from 'react';

const BlogDetails = () => {
  const blogs = [
    {
      title: 'React Learning',
      author: 'Stephen Biz',
      description: 'Welcome to learning React!'
    },
    {
      title: 'Installation',
      author: 'Schwezdenier',
      description: 'You can install React from npm.'
    }
  ];

  return (
    <div>
      {blogs.length > 0 ? (
        blogs.map((blog, idx) => (
          <div key={idx}>
            <h3>{blog.title}</h3>
            <p><strong>{blog.author}</strong></p>
            <p>{blog.description}</p>
          </div>
        ))
      ) : (
        <p>No blog articles available.</p>
      )}
    </div>
  );
};

export default BlogDetails;
