import { useState } from 'react';
import { AddIcon } from '../../asset/icon';
import HeadlessDialog from './HeadlessDialog';
import SidebarContent from './SidebarContent';
import SidebarMobile from './SidebarMobile';
import SidebarOptions from './SidebarOptions';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };
    return (
        <>
            <div className="dark hidden bg-[#202123] text-white md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col ">
                <div className="flex flex-col flex-1 h-full p-2 space-y-1">
                    <div className="flex items-center flex-shrink-0 gap-3 px-3 py-3 mb-2 text-sm text-white transition-colors duration-200 border rounded-md cursor-pointer hover:bg-gray-500/10 border-white/20">
                        <AddIcon />
                        <button>New chat</button>
                    </div>
                    <SidebarContent />
                    <SidebarOptions />
                </div>
            </div>
            <SidebarMobile openModal={openModal} />
            <HeadlessDialog isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
        </>
    );
};

export default Sidebar;
