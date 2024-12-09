import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  image: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, image }) => {
  return (
    <div className="relative py-24 bg-amber-900">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4" data-aos="fade-up">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-amber-100 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;