import dir from '@/assets/dir.jpg';
import global from '@/assets/global.jpg';
import blih from '@/assets/blih.jpg';
import oromia from '@/assets/oromia.png';
import Image, { StaticImageData } from 'next/image';
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
        image: oromia,
        name: 'Oromia Bank',
        git:'https://github.com/Million-art/oromiya_bank_referral_bot_v2',
        web: 'https://t.me/official_oromia_bank_bot'
    },
    {
        image: global,
        name: 'Global Bank Ethiopia',
        git:'https://github.com/Million-art/oromiya_bank_referral_bot_v2',
        web: 'https://lewis-retails-supermarket.vercel.app/'
    },
    {
        image: blih,
        name: ' ብልህ የ ቢዝነስ ሰው',
        git:' ',
        web: 'https://t.me/blihmarkting_bot'
    },
    // Add more cards as needed
];

const Bot = () => {
    return (
        <div className='mt-6 w-full'>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
                <div key={index} className="bg-black w-full rounded-lg overflow-hidden shadow-md">
                    <figure className="flex justify-center">
                        <Image src={card.image} alt={card.name} className="w-full h-48 object-cover" />
                    </figure>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{card.name}</h2>
                        <div className="flex justify-between items-center">
                            {card.git && (
                                <Link href={card.git} className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300">
                                    GitHub
                                </Link>
                            )}
                            {card.web && (
                                <Link href={card.web} className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300">
                                    Bot
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

export default Bot;
