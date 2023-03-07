import React from 'react';
import Answer from './Answer';
import MessageInput from './MessageInput';
import Question from './Question';
const MessageContent = () => {
    return (
        <>
            <div className="flex flex-col items-center w-full text-sm dark:bg-gray-800">
                <Question />

                <div className="w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]">
                    <Answer />
                </div>
            </div>
            <MessageInput />
        </>
    );
};

export default MessageContent;
