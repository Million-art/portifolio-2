'use client'
import React, { useState } from 'react';
import Bot from './portifolio-content/Bot';
import Web from './portifolio-content/Web';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabIndex:any) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="portfolio flex flex-col justify-center items-center">
            <h1 className='flex text-center text-3xl sm:text-5xl mb-10'>My Previous Projects</h1>
            <div className="tabs tabs-bordered">
                <div role="tablist" className="tablist flex gap-5">
                    <button
                        className={`tab ${activeTab === 1 ? 'active' : ''} text-xl sm:text-2xl`}
                        onClick={() => handleTabChange(1)}
                        aria-selected={activeTab === 1}
                        aria-controls="tab-content-1"
                        role="tab"
                    >
                        Web Development
                    </button>
                    <button
                        className={`tab ${activeTab === 2 ? 'active' : ''} text-xl sm:text-2xl`}
                        onClick={() => handleTabChange(2)}
                        aria-selected={activeTab === 2}
                        aria-controls="tab-content-2"
                        role="tab"
                    >
                        Bot Development
                    </button>
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
