import React from 'react';
import { MailIcon } from '../../asset/icon';

const SidebarContent = () => {
    return (
        <div className="flex-col flex-1 overflow-y-auto border-b border-white/20">
            <div className="flex flex-col gap-2 text-sm text-gray-100">
                <div className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group">
                    <MailIcon />
                    <div className="relative flex-1 overflow-hidden break-all text-ellipsis max-h-5">
                        Title: Something to search?
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarContent;
