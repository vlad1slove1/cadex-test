import React from 'react';
import { Image } from '@nextui-org/image';

const MessageFormImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="max-md:mt-8">
        <Image
            src={src}
            alt={alt}
            width={500}
            height={500}
            className="w-full h-full mx-auto block object-cover"
        />
    </div>
);

export default MessageFormImage;
