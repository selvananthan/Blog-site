import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const posts = [
    { id: 1, title: 'Blog Post 1', content: 'Full content of blog post 1' },
    { id: 2, title: 'Blog Post 2', content: 'Full content of blog post 2' },
    { id: 3, title: 'Blog Post 3', content: 'Full content of blog post 3' },
  ];

  const post = posts.find(p => p.id === parseInt(id));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
