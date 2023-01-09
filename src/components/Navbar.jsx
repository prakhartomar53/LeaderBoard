import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import logo from './gdsc-logo.png'




export default function Navbar() {
    return (
        <Router>
            <Popover className="relative bg-white">
                <div className="mx-auto max-w-7xl px-6 items-center ">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex items-center justify-start  lg:w-0 lg:flex-1">
                        
                            <Link to="/">
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src={logo}
                                    alt="gdsc-pec"
                                />
                            </Link>
                            <span className="flex justify-start ml-3 text-xl lg:w-0 lg:flex-1">GDSC PEC </span>
                        </div>
                        <div className="-my-2 -mr-2 md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden space-x-10 md:flex">

                            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Leaderboard
                            </Link>
                            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                About
                            </Link>
                        </Popover.Group>

                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            <Link
                                to="/"
                                className="ml-8 inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                                Admin

                            </Link>
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src={logo}
                                            alt="gdsc-pec"
                                        />
                                    </div>
                                    <span className="flex justify-start ml-3 text-xl lg:w-0 lg:flex-1">GDSC PEC </span>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center content-center gap-4 pt-2">
                                <div className="flex flex-col items-center gap-6">
                                    <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Pricing
                                    </Link>

                                    <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Docs
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="/"
                                        className="flex flex-row gap-2 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                    > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                  </svg>Admin
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>

        </Router>
    )
}
