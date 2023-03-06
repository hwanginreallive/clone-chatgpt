import React from 'react';
import { CapaIcon, LightIcon, WarningIcon } from '../../asset/icon';

const MessageDemo = () => {
    return (
        <div className="md:flex items-start text-center gap-3.5">
            <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                <h2 className="flex items-center gap-3 m-auto text-lg font-normal md:flex-col md:gap-2">
                    <LightIcon className="text-[24px]" />
                    Examples
                </h2>
                <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                    <button className="w-full p-3 rounded-md bg-gray-50 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-gray-900">
                        "Explain quantum computing in simple terms" →
                    </button>
                    <button className="w-full p-3 rounded-md bg-gray-50 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-gray-900">
                        "Got any creative ideas for a 10 year old’s birthday?" →
                    </button>
                    <button className="w-full p-3 rounded-md bg-gray-50 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-gray-900">
                        "How do I make an HTTP request in Javascript?" →
                    </button>
                </ul>
            </div>
            <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                <h2 className="flex items-center gap-3 m-auto text-lg font-normal md:flex-col md:gap-2">
                    <CapaIcon />
                    Capabilities
                </h2>
                <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                    <button className="w-full p-3 rounded-md bg-gray-50 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-gray-900">
                        "Explain quantum computing in simple terms" →
                    </button>
                    <button className="w-full p-3 rounded-md bg-gray-50 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-gray-900">
                        "Got any creative ideas for a 10 year old’s birthday?" →
                    </button>
                    <button className="w-full p-3 rounded-md bg-gray-50 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-gray-900">
                        "How do I make an HTTP request in Javascript?" →
                    </button>
                </ul>
            </div>
            <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                <h2 className="flex items-center gap-3 m-auto text-lg font-normal md:flex-col md:gap-2">
                    <WarningIcon />
                    Limitations
                </h2>
                <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                    <button className="w-full p-3 rounded-md bg-gray-50 cur dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-gray-900">
                        "Explain quantum computing in simple terms" →
                    </button>
                    <button className="w-full p-3 rounded-md bg-gray-50 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-gray-900">
                        "Got any creative ideas for a 10 year old’s birthday?" →
                    </button>
                    <button className="w-full p-3 rounded-md bg-gray-50 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-gray-900">
                        "How do I make an HTTP request in Javascript?" →
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default MessageDemo;
