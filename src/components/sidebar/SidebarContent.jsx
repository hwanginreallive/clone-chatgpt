import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Typewriter from 'typewriter-effect';
import { CheckIcon, CloseIcon, DeleteIcon, MailIcon, SmallEditIcon } from '../../asset/icon';
const SidebarContent = ({
    pathname,
    options,
    isDeleteMode,
    setIsDeleteMode,
    handleDelete,
    setIsEditMode,
    isEditMode,
}) => {
    const onViewNameKeyup = (event) => {
        const newName = event.target.value.trim();
        if (event.key === 'Enter') {
            if (!newName) {
                setIsEditMode(!isEditMode);
                return;
            }

            setIsEditMode(false);
        } else if (event.key === 'Escape') {
            setIsEditMode(false);
        }
    };

    return (
        <div className="flex-col flex-1 overflow-y-auto border-b border-white/20">
            <div className="flex flex-col gap-2 text-sm text-gray-100">
                {options.map((item) => {
                    const isActive = pathname.includes(item.id);

                    return (
                        <Link
                            to={`/chat/${item.id}`}
                            key={item.id}
                            className={twMerge(
                                'flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all  group',
                                isActive && 'bg-[#343541] pr-[56px] hover:bg-[#343541]',
                            )}
                        >
                            {isDeleteMode && isActive ? <DeleteIcon /> : <MailIcon />}
                            <div
                                className={twMerge(
                                    'relative flex-1 overflow-hidden break-all text-ellipsis max-h-5',
                                    isEditMode && isActive && 'border-solid border-[1px] border-blue-700',
                                )}
                            >
                                {isEditMode && isActive ? (
                                    <input
                                        type="text"
                                        autoFocus
                                        className="bg-[#343541] w-full z-1000"
                                        defaultValue={item.value}
                                        onKeyUp={(e) => onViewNameKeyup(e)}
                                    />
                                ) : (
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter
                                                .typeString(item.value)
                                                .callFunction((state) => {
                                                    // turn off animation
                                                    state.elements.cursor.style.animation = 'none';
                                                    // hide cursor
                                                    state.elements.cursor.style.display = 'none';
                                                })
                                                .start();
                                        }}
                                    />
                                )}
                                <div
                                    className={twMerge(
                                        'absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-[#202123] group-hover:from-[#2A2B32]',
                                        isActive && 'from-[#343541] group-hover:from-[#343541]',
                                        isEditMode && isActive && ' hidden',
                                    )}
                                />
                            </div>

                            {isActive && (
                                <div className="absolute z-10 flex visible text-gray-300 right-1">
                                    {!isDeleteMode ? (
                                        <button
                                            className="p-1 hover:text-white"
                                            onClick={() => setIsEditMode(!isEditMode)}
                                        >
                                            <SmallEditIcon />
                                        </button>
                                    ) : (
                                        <button className="p-1 hover:text-white" onClick={() => handleDelete(item.id)}>
                                            {<CheckIcon />}
                                        </button>
                                    )}
                                    <button
                                        className="p-1 hover:text-white"
                                        onClick={() => setIsDeleteMode(!isDeleteMode)}
                                    >
                                        {!isDeleteMode ? <DeleteIcon /> : <CloseIcon className="text-[16px]" />}
                                    </button>
                                </div>
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default SidebarContent;
