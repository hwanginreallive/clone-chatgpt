import React from 'react';
import { SendIcon } from '../../asset/icon';
const MessageInput = () => {
    return (
        <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient">
            <form className="flex flex-row gap-3 pt-2 mx-2 stretch last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6">
                <div className="relative flex flex-1 h-full md:flex-col">
                    <div className="flex ml-1 mt-1.5 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"></div>
                    <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
                        <textarea
                            tabIndex="0"
                            data-id="root"
                            style={{
                                maxHeight: '200px',
                                height: '24px',
                                overflowY: 'hidden',
                            }}
                            rows="1"
                            className="w-full p-0 pl-2 m-0 text-[16px] bg-transparent border-0 resize-none pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0"
                        ></textarea>
                        <button className="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent">
                            <SendIcon />
                        </button>
                    </div>
                </div>
            </form>
            <div className="px-3 pt-2 pb-3 text-xs text-center text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
                <a
                    href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                >
                    ChatGPT Feb 13 Version
                </a>
                . Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your
                feedback will help us improve.
            </div>
        </div>
    );
};

export default MessageInput;
