import React from 'react';
import Message from '../components/message/Message';
const NewChat = () => {
    return (
        <div className="flex h-full min-h-screen flex-1 flex-col md:pl-[260px]">
            <Message />
        </div>
    );
};

export default NewChat;
