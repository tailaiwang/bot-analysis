import React from 'react';

interface ImageWithSubTextProps {
	imageSrc: string;
	subText: React.ReactNode;
	altText?: string;
}

const ImageWithSubText: React.FC<ImageWithSubTextProps> = ({ imageSrc, subText, altText }) => {
	return (
		<div>
			<img className='img-fluid' src={imageSrc} alt={altText} />
			<p className='text-center text-secondary mt-1'>{subText}</p>
		</div>
	);
};

export default ImageWithSubText;