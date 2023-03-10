import Image from 'next/image';
import React from 'react';
import chatImg from '../public/assets/projects/chat.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const chat = () => {
    return (
        <div className='w-full'>
            <div className='w-[100%] h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={chatImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Chat API</h2>
                    <h3>NodeJS / PostgreSQL</h3>
                </div>
            </div>
    
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>   
                    <p>
                        I built this application in Node JS.
                        I built this app starting with the basic configurations of my database and the server,
                        also creating the necessary models for the tables in the databases. This app has users 
                        who have authentication and authorization processes.
                        The passwords are also encrypted, which are compared in login, encrypting 
                        the password that is received in the input and comparing with the stored encrypted password.
                        Giving a jwt with the authentication.
                        Users can create messages, delete them, have conversations 1 on 1 conversations, chat groups, 
                        profile pictures. This proyect also has error handlers.
                    </p>
                    <a
                        href='https://github.com/robertomattus/clone-chat-API'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4'>Code</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> NodeJS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> JavaScript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> ExpressJS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> PostgreSQL
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Sequelize
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> JWT
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Passport
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    );
};

export default chat;