'use client'
import React, { useState } from 'react';
import Bot from './portifolio-content/Bot';
import Web from './portifolio-content/Web';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabIndex: any) => {
        setActiveTab(tabIndex);
    };

    return (
        <div id='portifolio' className="portfolio mt-32 flex flex-col items-center justify-center md:mt-40">
            <h2 className="heading mb-3 text-zinc-100">Selected work</h2>
            <p className="mb-10 max-w-lg text-center text-sm text-zinc-400 md:text-base">
                Product engineering across web platforms, fintech-adjacent flows, and intelligent bots.
            </p>
            <div className="tabs tabs-bordered w-full max-w-6xl">
                <div role="tablist" className="tablist mb-8 flex flex-wrap justify-center gap-3">
                    <button
                        type="button"
                        className={`tab text-base sm:text-lg ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => handleTabChange(1)}
                        aria-selected={activeTab === 1}
                        aria-controls="tab-content-1"
                        role="tab"
                    >
                        Recent Works
                    </button>
                    {/* <button
                        className={`tab ${activeTab === 2 ? 'active' : '!bg-blue-400 !text-white'} text-xl sm:text-2xl`}
                        onClick={() => handleTabChange(2)}
                        aria-selected={activeTab === 2}
                        aria-controls="tab-content-2"
                        role="tab"
                    >
                        Bot Development
                    </button> */}
                </div>

                <div className="tab-content" id="tab-content-1" role="tabpanel" aria-labelledby="tab-1" hidden={activeTab !== 1}>
                    <Web />
                </div>
                <div className="tab-content" id="tab-content-2" role="tabpanel" aria-labelledby="tab-2" hidden={activeTab !== 2}>
                    <Bot />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
