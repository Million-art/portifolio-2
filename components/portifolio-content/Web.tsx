import React from 'react';

// Importing images (assuming these are the correct paths)
import adpictures from '@/assets/adpictures.png';
import thejuice from '@/assets/thejuiceplus.png';
import ecommerce from '@/assets/ecommerce.png';
import dir from '@/assets/dir.png';
import blih from '@/assets/blihweb.png';
import lewis from '@/assets/lewis.png';
import ehpsa from '@/assets/ehpsa.png';
import Image, { StaticImageData } from 'next/image';

// Interface definition for card data
interface Card {
    image: StaticImageData;
    name: string;
    git:string;
    web: string;
}

// Array of card data
const cards: Card[] = [
    {
        image: adpictures,
        name: 'AD Pictures',
        git:'',
        web: 'https://adpicturesethio.com/en'
    },
    {
        image: thejuice,
        name: 'The Juice Plus',
        git:'',
        web: 'https://thejuicepluss.com/'
    },
    {
        image: ecommerce,
        name: 'Dir Ecommerce',
        git:'https://github.com/Million-art/dir_ecommerce',
        web: 'https://dir-ecommerce.vercel.app/'
    },
    {
        image: blih,
        name: 'Blih Marketing',
        git:'',
        web: 'https://blihmarketing.com'
    },
    {
        image: lewis,
        name: 'Lewis retails',
        git:'https://github.com/Million-art/lewis-retails-supermarket',
        web: 'https://lewis-retails-supermarket.vercel.app/'
    },
    {
        image: dir,
        name: 'Dir Tech',
        git:' ',
        web: 'https://dirtechsolution.com/'
    },
    {
        image: ehpsa,
        name: 'Ethiopian Health profession',
        git:'https://github.com/Million-art/EHPSA',
        web: 'https://ehpsa.vercel.app/'
    },
    // Add more cards as needed
];

const Web = () => {
    return (
        <div className='mt-6'>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
                <div key={index} className="bg-black rounded-lg overflow-hidden shadow-md">
                    <figure className="flex justify-center">
                        <Image src={card.image} alt={card.name} className="w-full h-48 object-cover" />
                    </figure>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{card.name}</h2>
                        <div className="flex justify-between items-center">
                            {card.git && (
                                <a href={card.git} className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300">
                                    GitHub
                                </a>
                            )}
                            {card.web && (
                                <a href={card.web} className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300">
                                    Web Link
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
    );
};

export default Web;
