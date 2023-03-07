import React from 'react';
import { useLocation } from 'react-router-dom';
import MessageContent from './MessageContent';
import MessageDemo from './MessageDemo';
import MessageInput from './MessageInput';
const Message = () => {
    const { pathname } = useLocation();

    return (
        <div className="relative flex flex-col items-stretch flex-1 w-full h-full overflow-hidden transition-width">
            <div className="flex-1 overflow-hidden">
                <div className="flex flex-col items-center text-sm dark:bg-gray-800">
                    {pathname === '/' ? (
                        <div className="w-full px-6 text-gray-800 md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col dark:text-gray-100">
                            <h1 className="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
                                ChatGPT
                            </h1>
                            <MessageDemo />
                            <MessageInput />
                        </div>
                    ) : (
                        <MessageContent />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Message;
