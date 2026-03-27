import React from 'react';

// Importing images (assuming these are the correct paths)
import habeshanets from '@/assets/habeshanets.png';
import oromia from '@/assets/oromia.png';
import mrb from '@/assets/mrb.jpg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import investpro from '@/assets/investpro.jpg';
import blockbar from '@/assets/BlockBar.png';
import carramarket from '@/assets/carramarket.png';
import sewafri from '@/assets/sewafri.png';
import hive888 from '@/assets/hive888.png';
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
        image: investpro,
        name: 'Invest  Pro',
        git:'',
        web: 'https://investproo_bot/'
    },
    {
        image: habeshanets,
        name: 'Habesha Nets',
        git:'',
        web: 'https://www.habeshanets.com/en'
    },
    {
        image: blockbar,
        name: 'BlockBar',
        git:'',
        web: 'https://blockbar.com'
    },
    {
        image: carramarket,
        name: 'Carramarket',
        git: '',
        web: 'https://carramarket.com/'
    },
    {
        image: sewafri,
        name: 'SWAFRI',
        git: '',
        web: 'https://swafri.com/'
    },
    {
        image: hive888,
        name: 'HIVE888',
        git: '',
        web: 'https://hive888.org/'
    },
    {
        image: mrb,
        name: ' Mr Beast Crypto Remittance',
        git:'https://github.com/Million-art/mini_app_backend.git',
        web: ' https://t.me/mrbeasapp_bot'
    },


    {
        image: oromia,
        name: 'Oromia Bank Referral BOT',
        git:'https://github.com/Million-art/oromiya_bank_referral_bot_v2',
        web: 'https://t.me/official_oromia_bank_bot'
    },






];

const Web = () => {
    return (
        <div className="mt-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
                <article
                    key={index}
                    className="group surface-card overflow-hidden transition duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5"
                >
                    <figure className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06]">
                        <Image
                            src={card.image}
                            alt={card.name}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </figure>
                    <div className="p-5">
                        <h2 className="mb-4 text-lg font-semibold tracking-tight text-zinc-100">{card.name}</h2>
                        <div className="flex flex-wrap gap-2">
                            {card.git && (
                                <Link
                                    href={card.git}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-200 transition hover:border-violet-500/40 hover:bg-violet-500/10"
                                >
                                    GitHub
                                </Link>
                            )}
                            {card.web && (
                                <Link
                                    href={card.web.trim()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-200 transition hover:bg-cyan-500/20"
                                >
                                    Live
                                </Link>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </div>

    </div>
    );
};

export default Web;
