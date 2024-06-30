import React from 'react';
import CourseCard from '../components/CourseCard';

const Home = () => {
  const courses = [
    {
      id: 1,
      title: 'React for Beginners',
      description: 'Learn the basics of React and build your first application.',
      image: 'https://d2i2xyh28mr8fx.cloudfront.net/wp-content/uploads/2023/04/26184806/ReactJS-features.png',
    },
    {
      id: 2,
      title: 'Advanced React',
      description: 'Dive deeper into React and learn advanced concepts.',
      image: 'https://eflairwebtech.com/wp-content/uploads/2024/01/Advanced-React-JS-Concepts-for-Developers-1.jpg',
    },
    {
      id: 3,
      title: 'JavaScript Essentials',
      description: 'Master the fundamentals of JavaScript.',
      image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*W4IMRQe1RxNocB5sXyPfWQ.jpeg',
    },
    {
        id: 4,
        title: 'JavaScript Essentials',
        description: 'Master the fundamentals of JavaScript.',
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*W4IMRQe1RxNocB5sXyPfWQ.jpeg',
      },
      {
        id: 5,
        title: 'JavaScript Essentials',
        description: 'Master the fundamentals of JavaScript.',
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*W4IMRQe1RxNocB5sXyPfWQ.jpeg',
      },
      {
        id: 6,
        title: 'JavaScript Essentials',
        description: 'Master the fundamentals of JavaScript.',
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*W4IMRQe1RxNocB5sXyPfWQ.jpeg',
      },
      {
        id: 7,
        title: 'JavaScript Essentials',
        description: 'Master the fundamentals of JavaScript.',
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*W4IMRQe1RxNocB5sXyPfWQ.jpeg',
      },
      {
        id: 8,
        title: 'JavaScript Essentials',
        description: 'Master the fundamentals of JavaScript.',
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*W4IMRQe1RxNocB5sXyPfWQ.jpeg',
      },
  ];

  return (
    <div>
      <h1>Welcome to Selva Blog</h1>
      <p>Your one-stop destination for all the latest blog posts and courses.</p>
      <div className="row">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Home;
