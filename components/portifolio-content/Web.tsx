import React from 'react';

// Importing images (assuming these are the correct paths)
import habeshanets from '@/assets/habeshanets.png';
import adpictures from '@/assets/adpictures.png';
import thejuice from '@/assets/thejuiceplus.png';
import ecommerce from '@/assets/ecommerce.png';
import oromia from '@/assets/oromia.png';
import blih from '@/assets/blihweb.png';
import lewis from '@/assets/lewis.png';
import mrb from '@/assets/mrb.jpg';
import Image, { StaticImageData } from 'next/image';
import global from '@/assets/global.jpg';
import Link from 'next/link';

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
        image: habeshanets,
        name: 'Habesha Nets',
        git:'',
        web: 'https://www.habeshanets.com/en'
    },
    {
        image: adpictures,
        name: 'AD Pictures',
        git:'',
        web: 'https://adpicturesethio.com/en'
    },
    {
        image: mrb,
        name: ' Mr Beast Crypto BOT',
        git:'https://github.com/Million-art/mini_app_backend.git',
        web: ' https://t.me/john_sart_bot/app/'
    },

    {
        image: ecommerce,
        name: 'Dir Ecommerce',
        git:'https://github.com/Million-art/dir_ecommerce',
        web: 'https://dir-ecommerce.vercel.app/'
    },

    {
        image: oromia,
        name: 'Oromia Bank Referral BOT',
        git:'https://github.com/Million-art/oromiya_bank_referral_bot_v2',
        web: 'https://t.me/official_oromia_bank_bot'
    },

    {
        image: lewis,
        name: 'Lewis retails',
        git:'https://github.com/Million-art/lewis-retails-supermarket',
        web: 'https://lewis-retails-supermarket.vercel.app/'
    },


    {
        image: global,
        name: 'Global Bank Ethiopia Referral BOT',
        git:'https://github.com/Million-art/oromiya_bank_referral_bot_v2',
        web: 'https://t.me/globalbankethiopia_bot'
    },
    {
        image: thejuice,
        name: 'The Juice Plus',
        git:'',
        web: 'https://thejuicepluss.com/'
    },

    {
        image: blih,
        name: 'Blih Marketing',
        git:'',
        web: 'https://blihmarketing.com'
    },

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
                                <Link href={card.git} target='_blank' className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300">
                                    GitHub
                                </Link>
                            )}
                            {card.web && (
                                <Link href={card.web} target='_blank' className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300">
                                    Web Link
                                </Link>
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
