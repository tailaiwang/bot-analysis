import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imagePosition?: 'left' | 'right';
}

const CustomCard: React.FC<ProjectCardProps> = ({ title, description, image, imagePosition = 'left' }) => {
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
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Read More</a>
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
