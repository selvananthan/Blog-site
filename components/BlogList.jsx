import React from 'react';
import { Link } from 'react-router-dom';


const BlogList = () => {
  const posts = [
    { id: 1, title: 'Blog Post 1', summary: 'Summary of blog post 1', Image: 'https://m.media-amazon.com/images/I/412AoyL4VZL._SY445_SX342_.jpg' },
    { id: 2, title: 'Blog Post 2', summary: 'Summary of blog post 2' },
    { id: 3, title: 'Blog Post 3', summary: 'Summary of blog post 3' },
    { id: 4, title: 'Blog Post 4', summary: 'Summary of blog post 4' },
    { id: 5, title: 'Blog Post 5', summary: 'Summary of blog post 5' },
    { id: 6, title: 'Blog Post 6', summary: 'Summary of blog post 6' },
    { id: 7, title: 'Blog Post 7', summary: 'Summary of blog post 7' },
    { id: 8, title: 'Blog Post 8', summary: 'Summary of blog post 8' },
    { id: 9, title: 'Blog Post 9', summary: 'Summary of blog post 9' },
    { id: 10, title: 'Blog Post 10', summary: 'Summary of blog post 10' },
    { id: 11, title: 'Blog Post 11', summary: 'Summary of blog post 11' },
    { id: 12, title: 'Blog Post 12', summary: 'Summary of blog post 12' },
    { id: 13, title: 'Blog Post 13', summary: 'Summary of blog post 13' },
  ];

  return (
    <div className="row">
      {posts.map(post => (
        <div className="col-md-4" key={post.id}>
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.summary}</p>
              <Link to={`/blog/${post.id}`} className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
