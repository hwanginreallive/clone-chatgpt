import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AddIcon } from '../../asset/icon';
import HeadlessDialog from './HeadlessDialog';
import SidebarContent from './SidebarContent';
import SidebarMobile from './SidebarMobile';
import SidebarOptions from './SidebarOptions';

const options = [
    {
        id: 1,
        value: ' Title: Something to search?',
    },
    {
        id: 2,
        value: 'What is reactjs?',
    },
    {
        id: 3,
        value: 'What is nextjs?',
    },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleteMode, setIsDeleteMode] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [dataOptions, setDataOptions] = useState(options);
    const { pathname } = useLocation();

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const handleDelete = (id) => {
        const index = options.findIndex((item) => item.id === id);
        const dataFilter = options.splice(index, 1);
        setDataOptions(dataFilter);
    };

    useEffect(() => {
        if (isDeleteMode) {
            setIsDeleteMode(false);
        }
        if (isEditMode) {
            setIsEditMode(false);
        }
        // eslint-disable-next-line
    }, [pathname]);

    return (
        <>
            <div className="dark hidden bg-[#202123] text-white md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col ">
                <div className="flex flex-col flex-1 h-full p-2 space-y-1">
                    <Link
                        to="/"
                        className="flex items-center flex-shrink-0 gap-3 px-3 py-3 mb-2 text-sm text-white transition-colors duration-200 border rounded-md cursor-pointer hover:bg-gray-500/10 border-white/20"
                    >
                        <AddIcon />
                        <button>New chat</button>
                    </Link>
                    <SidebarContent
                        pathname={pathname}
                        options={options}
                        isDeleteMode={isDeleteMode}
                        setIsDeleteMode={setIsDeleteMode}
                        isEditMode={isEditMode}
                        setIsEditMode={setIsEditMode}
                        handleDelete={handleDelete}
                    />
                    <SidebarOptions options={dataOptions} />
                </div>
            </div>
            <SidebarMobile openModal={openModal} />
            <HeadlessDialog isOpen={isOpen} closeModal={closeModal} openModal={openModal}>
                <div className="flex items-start flex-1 w-full h-full min-h-screen scrollbar-trigger border-white/20">
                    <div className="flex flex-col justify-between flex-1 h-full min-h-screen p-2 space-y-1">
                        <Link
                            to="/"
                            className="flex items-center flex-shrink-0 gap-3 px-3 py-3 mb-2 text-sm text-white transition-colors duration-200 border rounded-md cursor-pointer hover:bg-gray-500/10 border-white/20"
                        >
                            <AddIcon />
                            <button>New chat</button>
                        </Link>
                        <SidebarContent
                            pathname={pathname}
                            options={options}
                            isDeleteMode={isDeleteMode}
                            setIsDeleteMode={setIsDeleteMode}
                            isEditMode={isEditMode}
                            setIsEditMode={setIsEditMode}
                            handleDelete={handleDelete}
                        />
                        <SidebarOptions options={dataOptions} />
                    </div>
                </div>
            </HeadlessDialog>
        </>
    );
};

export default Sidebar;
