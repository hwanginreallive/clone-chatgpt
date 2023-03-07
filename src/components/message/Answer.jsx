import React from 'react';
import { DisLikeIcon, LikeIcon, LogoIcon } from '../../asset/icon';
const Answer = () => {
    return (
        <div className="flex gap-4 p-4 m-auto text-base md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl md:py-6 lg:px-0">
            <div className="w-[30px] flex flex-col relative items-end">
                <div
                    className="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center"
                    style={{
                        backgroundColor: 'rgb(16, 163, 127)',
                    }}
                >
                    <LogoIcon />
                </div>
            </div>
            <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                <div className="flex flex-col flex-grow gap-3">
                    <div className="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
                        <div className="w-full prose break-words markdown dark:prose-invert light">
                            <p>
                                ReactJS, also known as React, is an open-source JavaScript library used for building
                                user interfaces. It was developed by Facebook and is widely used by many other companies
                                and developers.
                            </p>
                            <p>
                                React allows developers to create reusable UI components and manage the state of those
                                components in an efficient way. It uses a declarative approach to programming, where the
                                developer specifies what they want the UI to look like, and React takes care of updating
                                the DOM and rendering changes.
                            </p>
                            <p>
                                One of the key benefits of React is its ability to work seamlessly with other JavaScript
                                libraries and frameworks. It can be used in conjunction with popular tools like Redux,
                                React Native, and Next.js to build complex applications.
                            </p>
                            <p>
                                React has gained a lot of popularity in recent years due to its ease of use,
                                flexibility, and performance. It is used by many large companies and startups, and has a
                                large community of developers contributing to its ongoing development and improvement.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex self-end justify-center visible gap-3 mt-2 text-gray-400 lg:self-center md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2">
                        <button className="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
                            <LikeIcon />
                        </button>
                        <button className="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
                            <DisLikeIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Answer;
