import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
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
export default function HeadlessDialog({ closeModal, isOpen, children }) {
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
                                enter="ease-out duration-500"
                                enterFrom="translate-x-[-100%] opacity-0 "
                                enterTo="translate-x-0 opacity-100 "
                                leave="ease-out duration-500"
                                leaveFrom="translate-x-0 opacity-100"
                                leaveTo="translate-x-[-100%] opacity-0"
                            >
                                <Dialog.Panel className="w-full max-w-md min-h-screen  h-full text-left align-middle transition-all transform bg-[#202123] shadow-xl ">
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
