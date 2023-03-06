import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { AddIcon, DeleteIcon, LogOutIcon, MailIcon, OutWardIcon, UserIcon } from '../../asset/icon';

export default function HeadlessDialog({ closeModal, isOpen }) {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10 " onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[#6e6e80] bg-opacity-60" />
                    </Transition.Child>

                    <div className="fixed inset-0">
                        <div className="max-w-[318px] min-h-full text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out"
                                enterFrom="translate-x-[-100%] opacity-0"
                                enterTo="translate-x-0 opacity-100"
                                leave="ease-out"
                                leaveFrom="translate-x-0 opacity-100"
                                leaveTo="translate-x-[-100%] opacity-0"
                            >
                                <Dialog.Panel className="w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-[#202123] shadow-xl ">
                                    <div className="flex items-start flex-1 w-full h-full scrollbar-trigger border-white/20">
                                        <nav className="flex flex-col justify-between flex-1 h-full p-2 space-y-1">
                                            <div className="flex items-center flex-shrink-0 gap-3 px-3 py-3 mb-2 text-sm text-white transition-colors duration-200 border rounded-md cursor-pointer hover:bg-gray-500/10 border-white/20">
                                                <AddIcon /> New chat
                                            </div>
                                            <div className="flex-col flex-1 min-h-[400px] overflow-y-auto border-b border-white/20">
                                                <div className="flex flex-col gap-2 text-sm text-gray-100">
                                                    <div className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group">
                                                        <MailIcon />
                                                        <div className="relative flex-1 overflow-hidden break-all text-ellipsis max-h-5">
                                                            Title: Request for Clarification
                                                        </div>
                                                    </div>
                                                    <div className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group">
                                                        <MailIcon />
                                                        <div className="relative flex-1 overflow-hidden break-all text-ellipsis max-h-5">
                                                            New chat
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 px-3 py-3 text-sm text-white transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-500/10">
                                                <DeleteIcon />
                                                Clear conversations
                                            </div>
                                            <div className="flex items-center gap-3 px-3 py-3 text-sm text-white transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-500/10">
                                                <span className="flex flex-row justify-between w-full">
                                                    <span className="flex items-center gap-3 gold-new-button">
                                                        <UserIcon />
                                                        Upgrade to Plus
                                                    </span>
                                                    <span className="rounded-md bg-yellow-200 py-0.5 px-1.5 text-xs font-medium uppercase text-gray-800">
                                                        NEW
                                                    </span>
                                                </span>
                                            </div>
                                            <div
                                                href="https://help.openai.com/en/collections/3742473-chatgpt"
                                                target="_blank"
                                                className="flex items-center gap-3 px-3 py-3 text-sm text-white transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-500/10"
                                            >
                                                <OutWardIcon />
                                                Updates &amp; FAQ
                                            </div>
                                            <div className="flex items-center gap-3 px-3 py-3 text-sm text-white transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-500/10">
                                                <LogOutIcon />
                                                Log out
                                            </div>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
