import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CourseCard = ({ course }) => {
  return (
    <div className="col-md-4 mb-4">
      <Card className="shadow-sm">
        <Card.Img variant="top" src={course.image} />
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>{course.description}</Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
