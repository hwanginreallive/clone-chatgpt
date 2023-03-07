import React, { useState } from 'react';
import { EditIcon } from '../../asset/icon';
import avatar from '../../asset/images/avatar.png';
const Question = () => {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className="w-full text-gray-800 border-b border-black/10 dark:border-gray-900/50 dark:text-gray-100 group dark:bg-gray-800">
            <div className="flex gap-4 p-4 m-auto text-base md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl md:py-6 lg:px-0">
                <div className="w-[30px] flex flex-col relative items-end">
                    <div className="relative flex">
                        <img
                            src={avatar}
                            alt="avatar"
                            style={{
                                display: 'block',
                                maxWidth: '100%',
                                width: 'initial',
                                height: 'initial',
                                background: 'none',
                            }}
                        />
                    </div>
                </div>
                <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                    <div className="flex flex-col flex-grow gap-3">
                        <div className="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
                            What is reactjs?
                        </div>
                    </div>
                    <div className="flex self-end justify-center visible gap-3 mt-2 text-gray-400 lg:self-center md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2">
                        <button
                            onClick={() => setIsEdit(!isEdit)}
                            className="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:invisible md:group-hover:visible"
                        >
                            <EditIcon />
                        </button>
                    </div>
                    {isEdit && (
                        <div className="flex justify-center mt-2 text-center">
                            <button className="relative mr-2 btn btn-primary">
                                <div className="flex items-center justify-center w-full gap-2">Save &amp; Submit</div>
                            </button>
                            <button className="relative btn btn-neutral">
                                <div
                                    className="flex items-center justify-center w-full gap-2"
                                    onClick={() => setIsEdit(false)}
                                >
                                    Cancel
                                </div>
                            </button>
                        </div>
                    )}

                    <div className="flex justify-between"></div>
                </div>
            </div>
        </div>
    );
};

export default Question;
