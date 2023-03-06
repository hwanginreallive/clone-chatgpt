import React, { Fragment, useState } from 'react';
import { DeleteIcon, LightIcon, LogOutIcon, MoonIcon, OutWardIcon, UserIcon } from '../../asset/icon';
const SidebarOptions = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <Fragment>
            <div className="flex items-center gap-3 px-3 py-3 text-sm text-white transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-500/10">
                <DeleteIcon />
                <div>Clear conversations</div>
            </div>
            <div className="flex items-center gap-3 px-3 py-3 text-sm text-white transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-500/10">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex items-center gap-3 gold-new-button">
                        <UserIcon />
                        <div>Upgrade to Plus</div>
                    </div>
                    <span className="rounded-md bg-yellow-200 py-0.5 px-1.5 text-xs font-medium uppercase text-gray-800">
                        NEW
                    </span>
                </div>
            </div>
            <div
                className="flex items-center gap-3 px-3 py-3 text-sm text-white transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-500/10"
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                {!isDarkMode ? <MoonIcon /> : <LightIcon />}
                <div> {!isDarkMode ? 'Dark mode' : 'Light mode'}</div>
            </div>
            <div className="flex items-center gap-3 px-3 py-3 text-sm text-white transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-500/10">
                <OutWardIcon />
                <div>Updates & FAQ</div>
            </div>
            <div className="flex items-center gap-3 px-3 py-3 text-sm text-white transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-500/10">
                <LogOutIcon />
                <div>Log out</div>
            </div>
        </Fragment>
    );
};

export default SidebarOptions;
