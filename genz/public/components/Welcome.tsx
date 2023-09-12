import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

export const Welcome = () => {
  return (
    <div className='hello'>
      <Image
        src="/circle.jpg" 
        alt="Circle Image"
        width={300} 
        height={200} 
        
      />
    </div>
  );
};
