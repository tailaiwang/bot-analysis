import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  imagePosition?: 'left' | 'right';
}

const CustomCard: React.FC<ProjectCardProps> = ({ title, description, image, link, imagePosition = 'left' }) => {
  return (
    <div className="card mb-4">
      <div className="row g-0">
        {imagePosition === 'left' && (
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt={title} />
          </div>
        )}
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text content-paragraph">{description}</p>
            <Link to={link} className="btn btn-primary">Read More</Link>
          </div>
        </div>
        {imagePosition === 'right' && (
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-end" alt={title} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomCard;
